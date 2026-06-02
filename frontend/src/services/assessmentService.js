import api from "./api.js";

export const getAssessmentQuestions = async (assessmentId) =>
  api.get(`/assessments/${assessmentId}/questions`);

export const getPlacementStatus = async () =>
  api.get("/assessments/status-placement");
