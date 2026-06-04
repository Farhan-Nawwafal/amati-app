import api from "./api.js";

export const createChapter = async (data) => api.post("/chapters", data);
export const getChapters = async () => api.get("/chapters");
