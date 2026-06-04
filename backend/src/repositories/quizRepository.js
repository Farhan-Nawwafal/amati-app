import prisma from "../config/prisma.js";

// Ambil daftar sub-bab yang sedang dipelajari siswa beserta kuis (assessment) di dalamnya
export const getEnrolledSubChaptersWithAssessments = async (userId) => {
  return await prisma.userProgres.findMany({
    where: { user_id: userId },
    include: {
      sub_chapter: {
        include: {
          chapter: true,
          assessments: {
            where: {
              type: "quiz",
            },
          },
        },
      },
    },
  });
};

// Cek apakah siswa sudah punya riwayat mengerjakan kuis tersebut
export const findUserAttemptByQuiz = async (userId, assessmentId) => {
  return await prisma.userAttempt.findFirst({
    where: {
      user_id: userId,
      assessment_id: assessmentId,
    },
    orderBy: { id: "desc" }, // Ambil skor pengerjaan terbaru jika siswa mengerjakan > 1 kali
  });
};
