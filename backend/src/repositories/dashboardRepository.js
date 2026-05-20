import prisma from "../config/prisma.js";

export const findChaptersTakenByUserId = async (userId) =>
  await prisma.chapterTaken.findMany({
    where: { user_id: userId },
    select: { chapter_id: true },
  });
