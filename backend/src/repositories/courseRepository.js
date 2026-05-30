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