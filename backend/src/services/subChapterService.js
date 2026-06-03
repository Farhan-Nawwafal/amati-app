import * as subChapterRepo from "../repositories/subChapterRepository.js";

export const addSubChapter = async (subData) => {
  // Validasi input dasar
  if (!subData.chapterId) throw new Error("Chapter ID is required");
  if (!subData.name || subData.name.trim() === "")
    throw new Error("Sub-Chapter name is required");
  if (!subData.content || subData.content.trim() === "")
    throw new Error("Content material is required");

  // 1. Validasi: Cek apakah Parent Chapter-nya memang terdaftar
  const parentChapter = await subChapterRepo.checkChapterExists(
    subData.chapterId,
  );
  if (!parentChapter) {
    throw new Error(`Parent Chapter with ID '${subData.chapterId}' not found!`);
  }

  // 2. 💡 VALIDASI BARU: Cek apakah nama sub-chapter sudah terpakai di bab ini
  const isDuplicate = await subChapterRepo.findSubChapterByNameAndChapter(
    subData.chapterId,
    subData.name.trim(),
  );
  if (isDuplicate) {
    throw new Error(
      `Sub-Chapter with name "${subData.name.trim()}" already exists in this chapter!`,
    );
  }

  // 3. Buat ID unik kustom untuk Sub-Chapter
  const generatedSubId = `SBC${Date.now().toString().slice(-5)}`;

  // 4. Eksekusi ke repository layer menggunakan database transaction
  const newSubChapter = await subChapterRepo.createSubChapterWithCounterUpdate(
    generatedSubId,
    subData.chapterId,
    subData.name.trim(),
    subData.content.trim(),
  );

  return newSubChapter;
};

export const removeSubChapter = async (subChapterId) => {
  if (!subChapterId || subChapterId.trim() === "") {
    throw new Error("Sub-Chapter ID is required for deletion");
  }

  // Jalankan perintah eksekusi transaksi hapus di repository
  const result =
    await subChapterRepo.deleteSubChapterWithCounterUpdate(subChapterId);
  return result;
};
