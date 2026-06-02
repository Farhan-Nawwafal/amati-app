import { nanoid } from "nanoid";
import prisma from "../config/prisma.js";

export const createChapter = async (name) => {
  const generatedId = `CT${Date.now().toString().slice(-5)}`;

  return await prisma.chapter.create({
    data: {
      id: generatedId,
      name: name,
      total_sub_chapter: 0,
    },
  });
};

export const findChapterByName = async (name) => {
  return await prisma.chapter.findFirst({
    where: {
      name: name,
    },
  });
};

export const findAllChapters = async () => {
  return await prisma.chapter.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
