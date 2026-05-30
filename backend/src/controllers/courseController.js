import { getAllChaptersList, getSubChaptersListByChapter } from "../services/courseService.js";

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

// 2. Mengambil daftar sub-bab berdasarkan ID bab dari parameter URL
export const getSubChapters = async (req, res) => {
  try {
    const { chapterId } = req.params; // Menangkap ID Bab dari URL (contoh: /sub-chapters/C0001)
    const userId = req.user.id;
    
    const subChapters = await getSubChaptersListByChapter(chapterId);

    if (!subChapters.length) {
      return res.status(200).json({
        success: true,
        message: `No sub chapters found for chapter ID: ${chapterId}`,
        data: subChapters, // Mengembalikan array kosong []
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to fetch sub chapters by chapter ID",
      data: subChapters, // Mengembalikan array berisi daftar sub-bab
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch sub chapters!",
      error: error.message,
    });
  }
};