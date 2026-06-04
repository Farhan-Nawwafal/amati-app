import prisma from "../config/prisma.js";

export const checkChapterExists = async (chapterId) => {
  return await prisma.chapter.findUnique({
    where: { id: chapterId },
  });
};

export const findSubChapterByNameAndChapter = async (chapterId, name) => {
  return await prisma.subChapter.findFirst({
    where: {
      chapter_id: chapterId,
      name: name,
    },
  });
};

// Eksekusi transaksi ganda (Insert Sub-Chapter + Update Counter Chapter)
export const createSubChapterWithCounterUpdate = async (
  id,
  chapterId,
  name,
  content,
) => {
  return await prisma.$transaction(async (tx) => {
    const subChapter = await tx.subChapter.create({
      data: {
        id,
        chapter_id: chapterId,
        name,
        content,
      },
    });

    await tx.chapter.update({
      where: { id: chapterId },
      data: {
        total_sub_chapter: {
          increment: 1,
        },
      },
    });

    return subChapter;
  });
};

export const deleteSubChapterWithCounterUpdate = async (subChapterId) => {
  return await prisma.$transaction(async (tx) => {
    // Cari tahu dulu detail sub-bab yang mau dihapus untuk mendapatkan parent chapter_id
    const subChapter = await tx.subChapter.findUnique({
      where: { id: subChapterId },
      select: { chapter_id: true },
    });

    if (!subChapter) {
      throw new Error(`Sub-Chapter with ID '${subChapterId}' not found!`);
    }

    // Hapus sub-chapter secara permanen dari MySQL
    await tx.subChapter.delete({
      where: { id: subChapterId },
    });

    await tx.chapter.update({
      where: { id: subChapter.chapter_id },
      data: {
        total_sub_chapter: {
          decrement: 1, // Otomatis mengurangi nilai integer sebesar 1 di database
        },
      },
    });

    return { chapterId: subChapter.chapter_id };
  });
};
