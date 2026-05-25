import prisma from "../config/prisma.js";

// 1. Menghitung Chapter Taken
export const findChaptersTakenByUserId = async (userId) =>
  await prisma.chapterTaken.findMany({
    where: { user_id: userId },
    select: { chapter_id: true },
  });

// 2. Menghitung Chapter In Progress
export const countChaptersInProgressByUserId = async (userId) =>
  await prisma.userProgres.groupBy({
    by: ['chapter_taken_id'],
    where: {
      user_id: userId,
      status: 'in_progres',
    },
  });