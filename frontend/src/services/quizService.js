import api from "./api.js";

export const getStudentQuizListApi = async () => api.get("/quiz/student-list");

export const getAssessmentQuestionsApi = async (assessmentId) => {
  return await api.get(`/assessments/${assessmentId}/questions`);
};

export const submitAssessmentApi = async (assessmentId, payload) => {
  return await api.post(`/assessments/${assessmentId}/submit`, payload);
};
