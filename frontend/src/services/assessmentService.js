import api from "./api.js";

export const getAssessmentQuestions = async (assessmentId) =>
  api.get(`/assessments/${assessmentId}/questions`);
