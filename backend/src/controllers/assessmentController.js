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

export const checkPlacementStatus = async (req, res) => {
  try {
    const userId = req.user.id; 

    const hasTaken = await assessmentService.checkIfUserHasTakenPlacement(userId);

    res.status(200).json({
      success: true,
      hasCompletedPlacement: hasTaken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const submitAssessment = async (req, res) => {
  try {
    const { assessmentId } = req.params;
    const userId = req.user.id; // Diambil otomatis dari gembok authMiddleware kalian
    const { answers } = req.body; // Array jawaban dari frontend

    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        message: "Answers data must be provided as an array.",
      });
    }

    // Panggil service untuk menghitung skor dan menyimpan hasilnya
    const result = await assessmentService.submitAnswersAndCalculateScore(userId, assessmentId, answers);

    res.status(201).json({
      success: true,
      message: "Assessment submitted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};