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
  // 1. Ambil data kuis beserta butir soal dari DB master untuk dicocokkan kuncinya
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

  // 2. Cocokkan jawaban siswa dari frontend dengan key_answer asli di database
  assessment.questions.forEach((question) => {
    const studentAnswer = userAnswers.find(
      (ans) => ans.questionId === question.id,
    );

    if (studentAnswer && studentAnswer.userAnswer === question.key_answer) {
      totalCorrect++;
    }
  });

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

  // 5. DETEKSI OTOMATIS: Jika kuisnya bertipe Pre-Test Global (PTG)
  const testType = assessmentId.substring(0, 3);
  let extraData = {};

  if (testType === "PTG") {
    // Tentukan tingkat penguasaan kompetensi awal siswa
    let calculatedLevel = "beginner";
    if (finalScore > 40 && finalScore <= 75) {
      calculatedLevel = "intermediate";
    } else if (finalScore > 75) {
      calculatedLevel = "advanced";
    }

    // Ambil seluruh daftar sub-chapter untuk di-inisialisasi massal
    const subChapters = await assessmentRepo.getAllSubChaptersMaster();

    const progressPayload = subChapters.map((sub) => ({
      id: "PRG-" + Math.random().toString(36).substring(2, 12).toUpperCase(),
      user_id: userId,
      sub_chapter_id: sub.id,
      chapter_taken_id: "", // Dikosongkan dulu karena belum mulai klik "Ambil Bab" di silabus
      current_level: calculatedLevel, // Level dinamis hasil Pre-Test Global
      status: "not_started", // Status awal belum dipelajari
    }));

    // Eksekusi bulk insert massal tabel progres awal siswa ke MySQL
    if (progressPayload.length > 0) {
      await assessmentRepo.createBulkUserProgress(progressPayload);
    }

    extraData.suggestedLevel = calculatedLevel;
    extraData.message =
      "Pre-Test Global completed. Adaptive user progress baseline has been created.";
  }

  return {
    attemptId: newAttempt.id,
    totalQuestions,
    correctAnswers: totalCorrect,
    score: newAttempt.score,
    ...extraData,
  };
};

export const checkIfUserHasTakenPlacement = async (userId) => {
  // Panggil repository untuk menghitung attempt siswa
  const count = await assessmentRepo.countUserPlacementAttempts(userId);

  // Jika count > 0, artinya siswa sudah pernah ikut pre-test (placement)
  return count > 0;
};
