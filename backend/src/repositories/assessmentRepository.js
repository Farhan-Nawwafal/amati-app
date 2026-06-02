import prisma from "../config/prisma.js";

// Fungsi untuk mengambil assessment sekaligus men-join tabel questions
export const findAssessmentWithQuestions = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: {
      id: assessmentId,
    },
    include: {
      questions: true, // Pastikan nama relasi di schema.prisma kamu adalah 'questions'
    },
  });
};

// Fungsi untuk menyimpan hasil usaha kuis siswa ke tabel user_attempts
export const createUserAttempt = async (attemptData) => {
  return await prisma.userAttempt.create({
    data: attemptData,
  });
};