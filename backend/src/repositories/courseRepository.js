import prisma from "../config/prisma.js";

// 1. Mengambil seluruh daftar bab asli dari database
export const findAllChapters = async () => 
  await prisma.chapter.findMany({
    select: {
      id: true,
      name: true,
      total_sub_chapter: true,
    },
  });

  // 2. Mengambil daftar sub-bab berdasarkan ID Bab tertentu
export const findSubChaptersByChapterId = async (chapterId) =>
  await prisma.subChapter.findMany({
    where: {
      chapter_id: chapterId,
    },
    select: {
      id: true,
      chapter_id: true,
      name: true,
      content: true,
    },
  });

  // 3. Mengambil status progres user berdasarkan user_id dan sub_chapter_id
export const findUserProgress = async (userId, subChapterId) =>
  await prisma.userProgres.findFirst({
    where: {
      user_id: userId,
      sub_chapter_id: subChapterId,
    },
  });

// 4. Memperbarui status progres user menjadi 'in-progres'
export const updateUserProgressToInProgres = async (progressId) =>
  await prisma.userProgres.update({
    where: {
      id: progressId,
    },
    data: {
      status: "in_progres", // Menggunakan enum 'in-progres' sesuai schema.prisma
    },
  });