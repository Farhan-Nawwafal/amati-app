import api from "./api.js";

export const getChapterMaterialApi = async (chapterId) => {
  try {
    const response = await api.get(`/assessments/materi/${chapterId}`);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil materi:", error);
    throw error;
  }
};
