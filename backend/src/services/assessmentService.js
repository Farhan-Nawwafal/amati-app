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
    // Cari jawaban siswa yang cocok dengan id pertanyaan saat ini
    const studentAnswer = userAnswers.find((ans) => ans.questionId === question.id);

    // Jika siswa menjawab DAN jawabannya sama persis dengan key_answer di DB
    if (studentAnswer && studentAnswer.userAnswer === question.key_answer) {
      totalCorrect++;
    }
  });

  // 3. Hitung skor akhir dengan skala 0 - 100
  const finalScore = (totalCorrect / totalQuestions) * 100;

  // 4. Siapkan data untuk disimpan (Gunakan ID acak 20 karakter agar muat di VARCHAR(30))
  const attemptId = "ATT-" + Math.random().toString(36).substring(2, 18).toUpperCase();

  const newAttempt = await assessmentRepo.createUserAttempt({
    id: attemptId,
    user_id: userId,
    assessment_id: assessmentId, 
    score: parseFloat(finalScore.toFixed(2)), // Membatasi 2 angka di belakang koma
  });

  return {
    attemptId: newAttempt.id,
    totalQuestions,
    correctAnswers: totalCorrect,
    score: newAttempt.score,
  };
};

export const checkIfUserHasTakenPlacement = async (userId) => {
  // Panggil repository untuk menghitung attempt siswa
  const count = await assessmentRepo.countUserPlacementAttempts(userId);

  // Jika count > 0, artinya siswa sudah pernah ikut pre-test (placement)
  return count > 0;
};
