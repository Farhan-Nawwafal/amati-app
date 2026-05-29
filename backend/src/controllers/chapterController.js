import { addChapter } from "../services/chapterService.js";

export const handleCreateChapter = async (req, res) => {
  try {
    const { name } = req.body;

    // Memanggil service layer
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
