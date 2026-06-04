import { getStudentExamListService } from "../services/examService.js";

export const getStudentExamList = async (req, res) => {
  try {
    const userId = req.user.id;
    const exams = await getStudentExamListService(userId);

    return res.status(200).json({
      success: true,
      message: "Berhasil memuat daftar ujian akhir bab siswa",
      data: exams,
    });
  } catch (error) {
    console.error("Error in getStudentExamList:", error);
    return res.status(500).json({
      success: false,
      message: "Gagal mengambil daftar ujian",
      error: error.message,
    });
  }
};
