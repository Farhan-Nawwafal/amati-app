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

// 3. Menghitung Chapter Done
export const countChaptersDoneByUserId = async (userId) => {
  // Langkah 1: Ambil semua data progress user
  const allProgress = await prisma.userProgres.findMany({
    where: { user_id: userId },
    select: {
      chapter_taken_id: true,
      status: true
    }
  });

  const chapterMap = {};
  allProgress.forEach(item => {
    if (!chapterMap[item.chapter_taken_id]) {
      chapterMap[item.chapter_taken_id] = [];
    }
    chapterMap[item.chapter_taken_id].push(item.status);
  });

  const completedChapters = Object.keys(chapterMap).filter(chapterId => {
    const statuses = chapterMap[chapterId];
    // Pastikan semua status di dalam chapter ini bernilai 'done'
    return statuses.every(status => status === 'done');
  });

  return completedChapters;
};

  // 4. Menghitung Sub Chapters Taken
  export const countSubChaptersTakenByUserId = async (userId) =>
    await prisma.userProgres.count({
      where: {
        user_id: userId,
        status: {
          in: ['in_progres', 'done'], // Menghitung yang sedang berjalan dan yang sudah selesai
        },
      },
    });