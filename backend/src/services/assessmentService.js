import { generateAiRecommendation } from "../utils/aiClient.js";
import * as assessmentRepo from "../repositories/assessmentRepository.js";

export const getQuestionsForAssessment = async (assessmentId) => {
  // Panggil repository untuk mencari data
  const assessment = await assessmentRepo.findAssessmentWithQuestions(assessmentId);

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

export const submitAnswersAndCalculateScore = async (userId, assessmentId, userAnswers) => {
  // 1. Ambil data kuis beserta butir soalnya untuk dicocokkan
  const assessment = await assessmentRepo.findAssessmentWithQuestions(assessmentId);
  if (!assessment) {
    throw new Error("Assessment not found!");
  }

  const totalQuestions = assessment.questions.length;
  if (totalQuestions === 0) {
    throw new Error("This assessment has no questions to grade.");
  }

  let totalCorrect = 0;

  // 2. Logika Pengecekan Jawaban secara Mandiri di Backend
  assessment.questions.forEach((question) => {
    const studentAnswer = userAnswers.find((ans) => ans.questionId === question.id);

    if (studentAnswer && studentAnswer.userAnswer === question.key_answer) {
      totalCorrect++;
    }
  });

  // 3. Hitung skor akhir dengan skala 0 - 100
  const finalScore = (totalCorrect / totalQuestions) * 100;

  // 4. Siapkan data untuk disimpan ke user_attempts
  const attemptId = "ATT-" + Math.random().toString(36).substring(2, 18).toUpperCase();

  const newAttempt = await assessmentRepo.createUserAttempt({
    id: attemptId,
    user_id: userId,
    assessment_id: assessmentId, 
    score: parseFloat(finalScore.toFixed(2)), 
  });

  // 5. DETEKSI JENIS KUIS BERDASARKAN PREFIX ID (3 HURUF PERTAMA)
  const testType = assessmentId.substring(0, 3).toUpperCase(); 

  let extraData = {};

  // ========================================================
  // [1] LOGIKA: Pre-Test Global (PTG)
  // ========================================================
  if (testType === "PTG") {
    let calculatedLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      calculatedLevel = "intermediate";
    } else if (finalScore > 75) {
      calculatedLevel = "advanced";
    }
    extraData.suggestedLevel = calculatedLevel;
  } 
  
  // ========================================================
  // [2] LOGIKA: Pre-Test Chapter (PTC)
  // ========================================================
  else if (testType === "PTC") {
    let currentLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      currentLevel = "intermediate";
    } else if (finalScore > 75) {
      currentLevel = "advanced";
    }

    const assessmentInfo = await assessmentRepo.findAssessmentChapterInfo(assessmentId);
    
    if (assessmentInfo) {
      const chapterTakenId = assessmentInfo.chapter_taken_id;
      const subChapters = await assessmentRepo.findSubChaptersByChapterTaken(chapterTakenId);

      const progressPayload = subChapters.map((sub) => {
        return {
          id: "PRG-" + Math.random().toString(36).substring(2, 12).toUpperCase(),
          user_id: userId,
          sub_chapter_id: sub.id,
          chapter_taken_id: chapterTakenId,
          current_level: currentLevel, 
          status: "not_started", 
        };
      });

      if (progressPayload.length > 0) {
        await assessmentRepo.createBulkUserProgress(progressPayload);
      }

      // ========================================================
      // INTEGRASI AI 
      // ========================================================
      try {
        //  Memicu AI dan menangkap response teks transkrip
        const aiResult = await generateAiRecommendation(newAttempt.score, currentLevel);

        const aiReportId = "AI-REP-" + Math.random().toString(36).substring(2, 12).toUpperCase();

        // Menyimpan laporan AI hasil tangkapan langsung ke MySQL
        await assessmentRepo.createAiReport({
          id: aiReportId,
          userId: userId,
          chapterTakenId: chapterTakenId,
          evaluationText: aiResult.evaluationText,
          recomendationList: aiResult.recomendationList // Array otomatis diconvert ke JSON oleh Prisma!
        });

        // Selipkan ke data kembalian agar Postman bisa melihat hasil kerja AI
        extraData.aiAnalysis = {
          reportId: aiReportId,
          evaluation: aiResult.evaluationText,
          recommendations: aiResult.recomendationList
        };

      } catch (aiError) {
        // Supaya jika AI down, kuis utama siswa tidak ikut eror (Gently handle)
        console.error("AI Generation failed but assessment saved:", aiError.message);
        extraData.aiStatus = "AI Engine temporary unavailable, report queue deferred.";
      }
    }

    extraData.currentLevel = currentLevel;
    extraData.message = "Pre-Test Chapter completed. Sub-chapters unlocked & AI Personalized report generated!";
  }

  // ========================================================
  // [3] LOGIKA BARU: Quiz Sub-Chapter (QZN)
  // ========================================================
  else if (testType === "QZN") {
    if (assessment.sub_chapter_id) {
      // Jika siswa lulus kuis (Skor >= 60), status progres otomatis diubah menjadi 'done'
      if (finalScore >= 60) {
        await assessmentRepo.updateUserProgressToDone(userId, assessment.sub_chapter_id);
        extraData.quizStatus = "PASSED";
        extraData.message = "Selamat! Kuis lulus, progres materi diperbarui menjadi 'done'.";
      } else {
        extraData.quizStatus = "FAILED";
        extraData.message = "Skor belum memenuhi syarat kelulusan (KKM: 60). Silakan coba kembali.";
      }
    }
  }

// ========================================================
  // [4] LOGIKA SAMBUNGAN: Exam Akhir Bab (EXM)
  // ========================================================
  else if (testType === "EXM") {
    if (finalScore >= 70) {
      // Jika lulus ujian, kunci status data bab yang diambil menjadi selesai
      if (assessment.chapter_taken_id) {
        await assessmentRepo.updateChapterTakenToDone(assessment.chapter_taken_id);
      }
      extraData.examStatus = "PASSED";
      extraData.message = "Luar biasa! Kamu lulus ujian kompetensi bab ini. Akses bab selanjutnya telah terbuka!";
    } else {
      extraData.examStatus = "FAILED";
      extraData.message = "Kamu belum lulus ujian bab ini. Silakan ulas kembali materi yang dirasa sulit.";
    }
  }

  // 6. Kembalikan data hasil kalkulasi gabungan
  return {
    attemptId: newAttempt.id,
    totalQuestions,
    correctAnswers: totalCorrect,
    score: newAttempt.score,
    ...extraData 
  };
};

export const checkIfUserHasTakenPlacement = async (userId) => {
  const count = await assessmentRepo.countUserPlacementAttempts(userId);
  return count > 0;
};