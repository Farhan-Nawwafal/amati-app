import prisma from "../config/prisma.js";

// Ubah fungsi agar menarik data master struktur bab + sub-bab dari DB murni
export const findAllChaptersWithSubsMaster = async () => {
  return await prisma.chapter.findMany({
    include: {
      sub_chapters: true, // Ambil info sub_chapter untuk menghitung totalSubs di service
    },
    orderBy: {
      id: "asc", // Menjaga urutan bab rapi berurutan
    },
  });
};

// Tambahkan fungsi pembantu untuk mencari list progres siswa berdasarkan Bab tertentu
export const findUserProgressForChapter = async (userId, chapterId) => {
  return await prisma.userProgres.findMany({
    where: {
      user_id: userId,
      sub_chapter: {
        chapter_id: chapterId,
      },
    },
  });
};

export const findSubChaptersByChapterId = async (chapterId) =>
  await prisma.subChapter.findMany({
    where: { chapter_id: chapterId },
    select: {
      id: true,
      chapter_id: true,
      name: true,
      content: true,
    },
  });

export const findUserProgress = async (userId, subChapterId) =>
  await prisma.userProgres.findFirst({
    where: {
      user_id: userId,
      sub_chapter_id: subChapterId,
    },
  });

export const updateUserProgressToInProgres = async (progressId) =>
  await prisma.userProgres.update({
    where: { id: progressId },
    data: { status: "in_progres" },
  });

export const findChapterTaken = async (userId, chapterId) => {
  return await prisma.chapterTaken.findFirst({
    where: {
      user_id: userId,
      chapter_id: chapterId,
    },
  });
};

export const createEnrollmentTransaction = async (
  userId,
  chapterId,
  chapterTakenId,
  progressPayload,
) => {
  return await prisma.$transaction(async (tx) => {
    const takenRecord = await tx.chapterTaken.create({
      data: {
        id: chapterTakenId,
        user_id: userId,
        chapter_id: chapterId,
      },
    });

    await tx.userProgres.createMany({
      data: progressPayload,
    });

    return takenRecord;
  });
};

export const countAssessmentsBySubChapter = async (subChapterId) => {
  return await prisma.assessment.count({
    where: {
      sub_chapter_id: subChapterId,
    },
  });
};

// Menghitung berapa banyak kuis pada sub-chapter tersebut yang sudah disubmit siswa
export const countUserAttemptsBySubChapter = async (userId, subChapterId) => {
  return await prisma.userAttempt.count({
    where: {
      user_id: userId,
      assessment: {
        sub_chapter_id: subChapterId,
      },
    },
  });
};

export const markSubChapterDone = async (userId, subChapterId) => {
  return await prisma.userProgres.updateMany({
    where: { user_id: userId, sub_chapter_id: subChapterId },
    data: { status: "done" },
  });
};