import { findAllChapters, findSubChaptersByChapterId } from "../repositories/courseRepository.js";

// 1. Mengambil semua bab tanpa filter untuk kebutuhan menu courses
export const getAllChaptersList = async () => {
  const chapters = await findAllChapters();
  return chapters;
};

// 2. Mengambil daftar sub-bab berdasarkan ID Bab
export const getSubChaptersListByChapter = async (chapterId) => {
  const subChapters = await findSubChaptersByChapterId(chapterId);
  return subChapters;
};