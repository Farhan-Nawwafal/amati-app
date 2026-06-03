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

// 5. DETEKSI JENIS KUIS BERDASARKAN PREFIX ID
  const testType = assessmentId.substring(0, 3); 

  let extraData = {};

  if (testType === "PTG") {
    // Logika Khusus Pre-Test Global (Selesai)
    let calculatedLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      calculatedLevel = "intermediate";
    } else if (finalScore > 75) {
      calculatedLevel = "advanced";
    }
    extraData.suggestedLevel = calculatedLevel;
  } 
  
  else if (testType === "PTC") {
    // ========================================================
    // LOGIKA BARU: Pre-Test Chapter (PTC)
    // ========================================================
    
    // A. Tentukan tingkat kompetensi awal bab berdasarkan skor kuis
    let currentLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      currentLevel = "intermediate";
    } else if (finalScore > 75) {
      currentLevel = "advanced";
    }

    // B. Ambil info chapter_taken_id dari kuis ini
    const assessmentInfo = await assessmentRepo.findAssessmentChapterInfo(assessmentId);
    
    if (assessmentInfo) {
      const chapterTakenId = assessmentInfo.chapter_taken_id;

      // C. Ambil semua daftar sub-bab yang ada di dalam bab ini
      const subChapters = await assessmentRepo.findSubChaptersByChapterTaken(chapterTakenId);

      // D. Susun array data untuk dimasukkan massal ke tabel user_progres
      const progressPayload = subChapters.map((sub) => {
        return {
          id: "PRG-" + Math.random().toString(36).substring(2, 12).toUpperCase(), // ID unik progres
          user_id: userId,
          sub_chapter_id: sub.id,
          chapter_taken_id: chapterTakenId,
          current_level: currentLevel, // Level dinamis hasil kuis
          status: "not started", // Status awal sesuai panduan gambarmu
        };
      });

      // E. Eksekusi simpan massal ke MySQL lewat Prisma
      if (progressPayload.length > 0) {
        await assessmentRepo.createBulkUserProgress(progressPayload);
      }
    }

    extraData.currentLevel = currentLevel;
    extraData.message = "Pre-Test Chapter completed. Sub-chapters unlocked with status 'not started'.";
  }

  // 6. Kembalikan data hasil kalkulasi gabungan
  return {
    attemptId: newAttempt.id,
    totalQuestions,
    correctAnswers: totalCorrect,
    score: newAttempt.score,
    ...extraData // Menggabungkan data level otomatis jika kuisnya PTG
  };
};

export const checkIfUserHasTakenPlacement = async (userId) => {
  // Panggil repository untuk menghitung attempt siswa
  const count = await assessmentRepo.countUserPlacementAttempts(userId);

  // Jika count > 0, artinya siswa sudah pernah ikut pre-test (placement)
  return count > 0;
};
