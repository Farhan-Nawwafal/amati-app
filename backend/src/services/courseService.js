import { findAllChapters } from "../repositories/courseRepository.js";

// 1. Mengambil semua bab tanpa filter untuk kebutuhan menu courses
export const getAllChaptersList = async () => {
  const chapters = await findAllChapters();
  return chapters;
};