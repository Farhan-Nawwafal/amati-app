import prisma from "../config/prisma.js";

// Ambil daftar Bab yang sedang dipelajari siswa beserta Ujian Akhir (Exam) di dalamnya
export const getEnrolledChaptersWithExams = async (userId) => {
  return await prisma.chapterTaken.findMany({
    where: { user_id: userId },
    include: {
      chapter: {
        include: {
          assessments: {
            where: {
              type: "exam",
            },
          },
        },
      },
    },
  });
};

// Cek apakah siswa sudah pernah mengerjakan ujian akhir bab tersebut
export const findUserAttemptByExam = async (userId, assessmentId) => {
  return await prisma.userAttempt.findFirst({
    where: {
      user_id: userId,
      assessment_id: assessmentId,
    },
    orderBy: { id: "desc" }, // Ambil skor terbaru
  });
};
