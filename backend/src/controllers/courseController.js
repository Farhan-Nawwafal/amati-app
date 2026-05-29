import { getAllChaptersList } from "../services/courseService.js";

// 1. Mengambil seluruh daftar bab untuk halaman katalog courses
export const getCourses = async (req, res) => {
  try {
    const chapters = await getAllChaptersList();

    if (!chapters.length) {
      return res.status(200).json({
        success: true,
        message: "No courses or chapters found in database!",
        data: chapters, // Mengembalikan array kosong []
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to fetch all chapters for courses",
      data: chapters, // Mengembalikan array berisi daftar bab
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch courses!",
      error: error.message,
    });
  }
};