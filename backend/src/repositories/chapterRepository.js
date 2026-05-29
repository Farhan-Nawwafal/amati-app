import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

export const createChapter = async (name) => {
  return await prisma.chapter.create({
    data: {
      id: `chap-${nanoid(10)}`, // Generate ID unik
      name: name,
      total_sub_chapter: 0, // Diinisialisasi 0 di awal
    },
  });
};

export const findChapterByName = async (name) => {
  return await prisma.chapter.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive", // Case-insensitive check
      },
    },
  });
};
