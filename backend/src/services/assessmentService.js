import * as assessmentRepo from "../repositories/assessmentRepository.js";

export const getQuestionsForAssessment = async (assessmentId) => {
  // Panggil repository untuk mencari data
  const assessment = await assessmentRepo.findAssessmentWithQuestions(assessmentId);

  // Logika validasi: Jika kuis tidak ditemukan di database
  if (!assessment) {
    throw new Error("Assessment not found!");
  }

  // Jika soalnya kosong
  if (!assessment.questions || assessment.questions.length === 0) {
    throw new Error("No questions available for this assessment yet.");
  }

  return assessment;
};