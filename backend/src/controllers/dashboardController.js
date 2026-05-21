import { countChaptersTakenByUserId } from "../services/dashboardService.js";

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
  const 
};