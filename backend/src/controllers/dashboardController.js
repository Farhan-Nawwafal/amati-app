import { countChaptersTakenByUserId, countChaptersInProgress, countChaptersDone } from "../services/dashboardService.js";

export const getCountChaptersTakenByUserId = async (req, res) => {
  const userId = "S0001"; // nanti ini ambil berdasarkan user id yang login ke sistem
  const chaptersTaken = await countChaptersTakenByUserId(userId);
  if (!chaptersTaken)
    return res.status(200).json({
      success: true,
      message: "You not taken any chapters!",
      data: chaptersTaken,
    });

  return res.status(200).json({
    success: true,
    message: "Success to count chapters taken by user",
    data: chaptersTaken,
  });
};

export const getCountChaptersInProgress = async (req, res) => {
  try {
    const userId = "S0001"; 
    const chaptersInProgress = await countChaptersInProgress(userId);

    if (!chaptersInProgress) {
      return res.status(200).json({
        success: true,
        message: "You don't have any chapters in progress!",
        data: chaptersInProgress, // Akan mengembalikan angka 0
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to count chapters in progress by user",
      data: chaptersInProgress, // Akan mengembalikan angka jumlah chapter
    });
  } catch (error) {
    // Menjaga standar catch error dari project kamu sebelumnya
    return res.status(500).json({
      success: false,
      message: "Failed to count chapters in progress!",
      error: error.message,
    });
  }
};

export const getCountChaptersDone = async (req, res) => {
  try {
    const userId = "S0001"; // Tetap disamakan hardcode dulu untuk testing
    const chaptersDone = await countChaptersDone(userId);

    if (!chaptersDone) {
      return res.status(200).json({
        success: true,
        message: "You haven't completed any chapters yet!",
        data: chaptersDone, // Mengembalikan angka 0
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to count chapters done by user",
      data: chaptersDone, // Mengembalikan angka jumlah chapter yang selesai
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to count chapters done!",
      error: error.message,
    });
  }
};