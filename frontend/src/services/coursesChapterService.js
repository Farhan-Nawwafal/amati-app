import api from "./api.js";

export const getCoursesChapters = async () => api.get("/courses/all");
export const enrollChapterApi = async (payload) =>
  api.post("/courses/enroll", payload);
export const getSubChaptersByChapterApi = async (chapterId) =>
  api.get(`/courses/sub-chapters/${chapterId}`);
export const completeSubChapterApi = async (subChapterId) => 
  api.put(`/courses/sub-chapters/${subChapterId}/complete`);
