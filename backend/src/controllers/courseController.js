import {
  getAllChaptersList,
  enrollToChapterService,
  getSubChaptersListByChapter,
} from "../services/courseService.js";

import { markSubChapterDone } from "../repositories/courseRepository.js";

export const getCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const chapters = await getAllChaptersList(userId);

    return res.status(200).json({
      success: true,
      message: "Success to fetch all chapters for courses",
      data: chapters,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch courses!",
      error: error.message,
    });
  }
};

export const getSubChapters = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const userId = req.user.id;

    // Panggil fungsi bisnis logik di service layer
    const subChapters = await getSubChaptersListByChapter(chapterId, userId);

    return res.status(200).json({
      success: true,
      message:
        "Success to fetch sub chapters by chapter ID along with dynamic student progress",
      data: subChapters, // Mengembalikan array berisi daftar sub-bab yang sudah aman
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch sub chapters!",
      error: error.message,
    });
  }
};

export const handleEnrollChapter = async (req, res) => {
  try {
    const userId = req.user.id;
    const { chapterId } = req.body;

    if (!chapterId) {
      return res
        .status(400)
        .json({ success: false, message: "Chapter ID is required" });
    }

    const enrollment = await enrollToChapterService(userId, chapterId);

    return res.status(201).json({
      success: true,
      message:
        "Successfully enrolled to chapter and progress tracker initialized!",
      data: enrollment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to enroll to chapter",
      error: error.message,
    });
  }
};

export const completeSubChapter = async (req, res) => {
  try {
    const { subChapterId } = req.params;
    await markSubChapterDone(req.user.id, subChapterId);
    return res.status(200).json({ success: true, message: "Materi selesai!" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
