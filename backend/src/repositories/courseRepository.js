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