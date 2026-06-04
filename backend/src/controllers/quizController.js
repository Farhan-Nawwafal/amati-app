import { getStudentQuizListService } from "../services/quizService.js";

export const getStudentQuizList = async (req, res) => {
  try {
    const userId = req.user.id;
    const quizzes = await getStudentQuizListService(userId);

    return res.status(200).json({
      success: true,
      message: "Berhasil memuat daftar kuis milik siswa",
      data: quizzes,
    });
  } catch (error) {
    console.error("Error in getStudentQuizList:", error);
    return res.status(500).json({
      success: false,
      message: "Gagal mengambil daftar kuis",
      error: error.message,
    });
  }
};
