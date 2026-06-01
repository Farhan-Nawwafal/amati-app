import * as assessmentService from "../services/assessmentService.js";

export const getAssessmentQuestions = async (req, res) => {
  try {
    // Menangkap ID kuis dari parameter URL (misal: /api/assessments/A001/questions)
    const { assessmentId } = req.params;

    // Meminta service mengambilkan datanya
    const data = await assessmentService.getQuestionsForAssessment(assessmentId);

    // Mengirim respon sukses ke frontend
    res.status(200).json({
      success: true,
      message: "Success fetching questions",
      data: data,
    });
  } catch (error) {
    // Jika terjadi error di service (misal: kuis tidak ditemukan)
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};