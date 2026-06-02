import {
  createChapter,
  findChapterByName,
  findAllChapters,
} from "../repositories/chapterRepository.js";

export const addChapter = async (chapterData) => {
  if (!chapterData.name || chapterData.name.trim() === "") {
    throw new Error("Chapter name is required");
  }

  // Cek apakah chapter dengan nama yang sama sudah ada
  const isDuplicate = await findChapterByName(chapterData.name);
  console.log(isDuplicate);
  if (isDuplicate) {
    throw new Error(`Chapter with name "${chapterData.name}" already exists`);
  }

  // Eksekusi pembuatan chapter ke repository
  const newChapter = await createChapter(chapterData.name);

  return newChapter;
};

export const getAllChapters = async () => {
  const chapters = await findAllChapters();
  return chapters;
};
