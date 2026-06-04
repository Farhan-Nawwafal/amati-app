import {
  generateAiRecommendation,
  getPythonAiPrediction,
  getPythonMaterial,
} from "../utils/aiClient.js";
import * as assessmentRepo from "../repositories/assessmentRepository.js";

export const getQuestionsForAssessment = async (assessmentId) => {
  // Panggil repository untuk mencari data
  const assessment =
    await assessmentRepo.findAssessmentWithQuestions(assessmentId);

  // Logika validasi: Jika kuis tidak ditemukan di database
  if (!assessment) {
    throw new Error("Assessment not found!");
  }

  // Jika soalnya kosong
  if (!assessment.questions || assessment.questions.length === 0) {
    throw new Error("No questions available for this assessment yet.");
  }

  return assessment;
};

export const submitAnswersAndCalculateScore = async (
  userId,
  assessmentId,
  userAnswers,
) => {
  // Ambil data kuis beserta butir soal dari DB master untuk dicocokkan kuncinya
  const assessment =
    await assessmentRepo.findAssessmentWithQuestions(assessmentId);
  if (!assessment) {
    throw new Error("Assessment not found!");
  }

  const totalQuestions = assessment.questions.length;
  if (totalQuestions === 0) {
    throw new Error("This assessment has no questions to grade.");
  }

  let totalCorrect = 0;
  const weakTopicsSet = new Set();

  // Cocokkan jawaban siswa dari frontend dengan key_answer asli di database
  assessment.questions.forEach((question) => {
    const studentAnswer = userAnswers.find(
      (ans) => ans.questionId === question.id,
    );

    if (studentAnswer && studentAnswer.userAnswer === question.key_answer) {
      totalCorrect++;
    } else {
      if (question.topic) {
        weakTopicsSet.add(question.topic);
      }
    }
  });

  const weakTopicsString = Array.from(weakTopicsSet).join(", ");
  // 3. Kalkulasi Skor Akhir Skala 0 - 100
  const finalScore = (totalCorrect / totalQuestions) * 100;
  const attemptId =
    "ATT-" + Math.random().toString(36).substring(2, 12).toUpperCase();

  // 4. Simpan nilai hasil pengerjaan global ke tabel user_attempts
  const newAttempt = await assessmentRepo.createUserAttempt({
    id: attemptId,
    user_id: userId,
    assessment_id: assessmentId,
    score: parseFloat(finalScore.toFixed(2)),
  });

  // DETEKSI JENIS KUIS BERDASARKAN PREFIX ID
  let testType = "UNKNOWN";
  if (assessmentId.includes("-PTG-")) testType = "PTG";
  else if (assessmentId.includes("-PTC-")) testType = "PTC";
  else if (assessmentId.includes("-QZ-")) testType = "QZN";
  else if (assessmentId.includes("-EX-")) testType = "EXM";
  let extraData = {};

  // [1] LOGIKA: Pre-Test Global (PTG)
  if (testType === "PTG") {
    let calculatedLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      calculatedLevel = "intermediate";
    } else if (finalScore > 75) {
      calculatedLevel = "advanced";
    }
    extraData.suggestedLevel = calculatedLevel;
    extraData.message =
      "Pre-Test Global completed. Adaptive user progress baseline has been created.";
  }

  // [2] LOGIKA: Pre-Test Chapter (PTC)
  else if (testType === "PTC") {
    // A. Tentukan tingkat kompetensi awal bab berdasarkan skor kuis
    let currentLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      currentLevel = "intermediate";
    } else if (finalScore > 75) {
      currentLevel = "advanced";
    }

    // B. Ambil info chapter_taken_id dari kuis ini
    const assessmentInfo =
      await assessmentRepo.findAssessmentChapterInfo(assessmentId);

    if (assessmentInfo) {
      const chapterTakenId = assessmentInfo.chapter_id;

      // C. Ambil semua daftar sub-bab yang ada di dalam bab ini
      const subChapters =
        await assessmentRepo.findSubChaptersByChapterTaken(chapterTakenId);

      // D. Susun array data untuk dimasukkan massal ke tabel user_progres
      const progressPayload = subChapters.map((sub) => {
        return {
          id:
            "PRG-" + Math.random().toString(36).substring(2, 12).toUpperCase(),
          user_id: userId,
          sub_chapter_id: sub.id,
          chapter_taken_id: chapterTakenId,
          current_level: currentLevel,
          status: "not_started",
        };
      });

      // E. Eksekusi simpan massal ke MySQL lewat Prisma
      if (progressPayload.length > 0) {
        await assessmentRepo.createBulkUserProgress(progressPayload);
      }

      // INTEGRASI AI (HANYA UNTUK KUIS BAB / PTC)

      try {
        // Memicu AI dan menangkap response teks transkrip
        const aiResult = await generateAiRecommendation(
          newAttempt.score,
          currentLevel,
        );
        const aiReportId =
          "AI-REP-" + Math.random().toString(36).substring(2, 12).toUpperCase();

        // Menyimpan laporan AI hasil tangkapan langsung ke MySQL
        await assessmentRepo.createAiReport({
          id: aiReportId,
          userId: userId,
          chapterTakenId: chapterTakenId,
          evaluationText: aiResult.evaluationText,
          recomendationList: aiResult.recomendationList,
          chapterId: assessment.chapter_id,
        });

        // Selipkan ke data kembalian agar Postman bisa melihat hasil kerja AI
        extraData.aiAnalysis = {
          reportId: aiReportId,
          prediksiSkor: pythonResponse.prediksi_avg_score,
          kategori: aiData.kategori,
          pesan: aiData.pesan_tutor_ai,
          rekomendasi: aiData.rekomendasi_materi,
          chapterId: assessment.chapter_id,
        };
      } catch (aiError) {
        // Supaya jika AI down, kuis utama siswa tidak ikut eror (Gently handle)
        console.error(
          "AI Generation failed but assessment saved:",
          aiError.message,
        );
        extraData.aiStatus =
          "AI Engine temporary unavailable, report queue deferred.";
      }
    }

    extraData.currentLevel = currentLevel;
    extraData.message =
      "Pre-Test Chapter completed. Sub-chapters unlocked & AI Personalized report generated!";
  }

  // [3] LOGIKA: Quiz Sub-Chapter (QZN)
  else if (testType === "QZN") {
    if (assessment.sub_chapter_id) {
      // Jika siswa lulus kuis (Skor >= 60), status progres otomatis diubah menjadi 'done'
      if (finalScore >= 60) {
        await assessmentRepo.updateUserProgressToDone(
          userId,
          assessment.sub_chapter_id,
        );
        extraData.quizStatus = "PASSED";
        extraData.message =
          "Selamat! Kuis lulus, progres materi diperbarui menjadi 'done'.";
      } else {
        extraData.quizStatus = "FAILED";
        extraData.message =
          "Skor belum memenuhi syarat kelulusan (KKM: 60). Silakan coba kembali.";
      }
    }
  }

  // [4] LOGIKA: Exam Akhir Bab (EXM)
  else if (testType === "EXM") {
    // console.log("[DEBUG] 1. Berhasil masuk ke logika ujian akhir bab (EXM)");
    let isPassed = false;

    if (finalScore >= 70) {
      isPassed = true;
      if (assessment.chapter_id) {
        await assessmentRepo.updateChapterTakenToDone(
          userId,
          assessment.chapter_id,
        );
      }
      extraData.examStatus = "PASSED";
      extraData.message = "Luar biasa! Kamu lulus ujian kompetensi bab ini.";
    } else {
      extraData.examStatus = "FAILED";
      extraData.message =
        "Kamu belum lulus ujian bab ini. Silakan ulas kembali materi yang dirasa sulit.";
    }

    // 🔥 INTEGRASI PYTHON AI SAAT UJIAN SELESAI 🔥
    try {
      if (assessment.chapter_id) {
        // console.log("[DEBUG] 2. Mencari data pendaftaran bab siswa...");
        const chapterTaken = await assessmentRepo.findChapterTakenByUser(
          userId,
          assessment.chapter_id,
        );

        if (chapterTaken) {
          // console.log(
          //   "[DEBUG] 3. Menghitung variabel histori belajar dari MySQL...",
          // );
          const attemptsCount = await assessmentRepo.countExamAttempts(
            userId,
            assessmentId,
          );
          const totalSubs = await assessmentRepo.countTotalSubChaptersInChapter(
            assessment.chapter_id,
          );
          const doneSubs = await assessmentRepo.countDoneSubChaptersByUser(
            userId,
            assessment.chapter_id,
          );

          const aiPayload = {
            current_level: 1,
            status_chapter: isPassed ? 2 : 1,
            total_attempts: attemptsCount === 0 ? 1 : attemptsCount,
            total_subchapters_done: doneSubs,
            total_subchapter: totalSubs,
            weak_topics: weakTopicsString,
          };

          // console.log(
          //   "[DEBUG] 4. Payload siap! Menembak server Python AI...",
          //   aiPayload,
          // );
          const pythonResponse = await getPythonAiPrediction(aiPayload);

          // console.log("[DEBUG] 5. Python merespons sukses!");
          if (pythonResponse.status === "success") {
            const aiData = pythonResponse.analisis_siswa;
            const aiReportId =
              "AI-REP-" +
              Math.random().toString(36).substring(2, 12).toUpperCase();

            // console.log("[DEBUG] 6. Menyimpan hasil Gemini ke tabel MySQL...");
            await assessmentRepo.createAiReport({
              id: aiReportId,
              userId: userId,
              chapterTakenId: chapterTaken.id,
              evaluationText: aiData.pesan_tutor_ai,
              recomendationList: {
                kategori: aiData.kategori,
                rekomendasi_materi: aiData.rekomendasi_materi,
                prediksi_skor_ai: pythonResponse.prediksi_avg_score,
              },
            });

            // console.log(
            //   "[DEBUG] 7. Selesai! Data AI siap dikembalikan ke Frontend.",
            // );
            extraData.aiAnalysis = {
              reportId: aiReportId,
              prediksiSkor: pythonResponse.prediksi_avg_score,
              kategori: aiData.kategori,
              pesan: aiData.pesan_tutor_ai,
              rekomendasi: aiData.rekomendasi_materi,
              chapterId: assessment.chapter_id,
            };
          }
        }
      }
    } catch (aiError) {
      console.error("[DEBUG] ERROR SAAT PROSES AI:", aiError.message);
      extraData.aiStatus =
        "Sistem AI sedang menganalisis di latar belakang (Ditunda).";
    }
  }

  return {
    attemptId: newAttempt.id,
    totalQuestions,
    correctAnswers: totalCorrect,
    score: newAttempt.score,
    chapterId: assessment.chapter_id,
    ...extraData,
  };
};

export const checkIfUserHasTakenPlacement = async (userId) => {
  const count = await assessmentRepo.countUserPlacementAttempts(userId);
  return count > 0;
};

// Fungsi untuk memproses pengambilan laporan AI siswa
export const getUserAiReports = async (userId) => {
  const reports = await assessmentRepo.findAiReportsByUserId(userId);

  if (!reports || reports.length === 0) {
    throw new Error(
      "No AI reports found for this user. Take a Pre-Test Chapter first!",
    );
  }

  return reports;
};

export const getChapterMaterial = async (chapterId) => {
  // Query nama chapter dari DB
  const chapter = await assessmentRepo.findChapterById(chapterId);
  const chapterName = chapter?.name || "";

  // Kirim ke Python dengan nama chapter
  const materialResponse = await getPythonMaterial(chapterId, chapterName);

  if (materialResponse.status !== "success") {
    throw new Error(materialResponse.pesan || "Materi tidak ditemukan");
  }

  return materialResponse.data;
};
