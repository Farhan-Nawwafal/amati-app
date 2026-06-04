import api from "./api.js";

export const createSubChapter = async (data) => api.post("/subchapters", data);
