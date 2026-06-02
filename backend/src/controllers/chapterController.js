import { addChapter, getAllChapters } from "../services/chapterService.js";

export const handleCreateChapter = async (req, res) => {
  try {
    const { name } = req.body;

    const chapter = await addChapter({ name });

    return res.status(201).json({
      success: true,
      message: "Chapter successfully created",
      data: chapter,
    });
  } catch (error) {
    // Membedakan status code berdasarkan jenis error
    const statusCode = error.message.includes("already exists") ? 400 : 500;

    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllChapterController = async (req, res) => {
  try {
    const chapters = await getAllChapters();

    return res.status(200).json({
      success: true,
      message: "Chapters successfully fetched",
      data: chapters,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};