import prisma from "../config/prisma.js";

// Fungsi untuk mengambil assessment sekaligus men-join tabel questions
export const findAssessmentWithQuestions = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: {
      id: assessmentId,
    },
    include: {
      questions: true,
    },
  });
};

export const countUserPlacementAttempts = async (userId) => {
  return await prisma.userAttempt.count({
    where: {
      user_id: userId,
      assessment: {
        type: 'placement'
      }
    },
  });
};

// Fungsi untuk menyimpan hasil usaha kuis siswa ke tabel user_attempts
export const createUserAttempt = async (attemptData) => {
  return await prisma.userAttempt.create({
    data: attemptData,
  });
};

// Fungsi untuk mencari tahu chapter_id dari kuis yang sedang dikerjakan
export const findAssessmentChapterInfo = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: { id: assessmentId },
    select: { chapter_taken_id: true } // Mengambil ID relasi bab yang diambil
  });
};

// Fungsi untuk mengambil semua sub-bab berdasarkan chapter_taken_id
export const findSubChaptersByChapterTaken = async (chapterTakenId) => {
  // Mencari data bab asli untuk mendapatkan chapter_id
  const chapterTaken = await prisma.chapterTaken.findUnique({
    where: { id: chapterTakenId },
    select: { chapter_id: true }
  });

  if (!chapterTaken) return [];

  // Mengambil semua sub-bab milik chapter tersebut
  return await prisma.subChapter.findMany({
    where: { chapter_id: chapterTaken.chapter_id }
  });
};

// Fungsi untuk memasukkan banyak data progres sekaligus (Bulk Insert)
export const createBulkUserProgress = async (progressDataArray) => {
  return await prisma.userProgres.createMany({
    data: progressDataArray,
    skipDuplicates: true, // Amankan dari eror jika data sudah pernah terbuat
  });
};
