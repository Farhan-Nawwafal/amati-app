import { addSubChapter } from "../services/subChapterService.js";

export const handleCreateSubChapter = async (req, res) => {
  try {
    const { chapterId, name, content } = req.body;

    // Oper ke service layer
    const subChapter = await addSubChapter({ chapterId, name, content });

    return res.status(201).json({
      success: true,
      message: "Sub-Chapter successfully created and Chapter counter updated",
      data: subChapter,
    });
  } catch (error) {
    // Handling error jika chapter_id tidak ditemukan atau input kosong
    const statusCode = error.message.includes("not found") ? 404 : 400;

    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

export const handleDecreaseSubChapter = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID sub-chapter dari parameter URL route

    const result = await removeSubChapter(id);

    return res.status(200).json({
      success: true,
      message: "Sub-Chapter successfully deleted and Chapter counter decreased",
      data: result,
    });
  } catch (error) {
    const statusCode = error.message.includes("not found") ? 404 : 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};
