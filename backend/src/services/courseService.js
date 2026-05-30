import { findAllChapters,
   findSubChaptersByChapterId,
   findUserProgress,
   updateUserProgressToInProgres
   } from "../repositories/courseRepository.js";

// 1. Mengambil semua bab tanpa filter untuk kebutuhan menu courses
export const getAllChaptersList = async () => {
  const chapters = await findAllChapters();
  return chapters;
};

// 2. Mengambil daftar sub-bab berdasarkan ID Bab
export const getSubChaptersListByChapter = async (chapterId) => {
  const subChapters = await findSubChaptersByChapterId(chapterId);

  for (const sub of subChapters) {
    const progress = await findUserProgress(userId, sub.id);

  if (progress && progress.status === "not_started") {
      await updateUserProgressToInProgres(progress.id);
    }
  }
  return subChapters;
};