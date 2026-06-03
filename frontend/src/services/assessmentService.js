import api from "./api.js";

export const getAssessmentQuestions = async (assessmentId) =>
  api.get(`/assessments/${assessmentId}/questions`);

export const getPlacementStatus = async () =>
  api.get("/assessments/status-placement");

export const submitAssessmentAnswers = async (assessmentId, answersPayload) =>
  api.post(`/assessments/${assessmentId}/submit`, answersPayload);
