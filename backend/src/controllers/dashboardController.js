import { 
  countChaptersTakenByUserId, 
  countChaptersInProgress, 
  countChaptersDone,
  countSubChaptersTaken,
  countSubChaptersInProgress,
  countSubChaptersDone
} from "../services/dashboardService.js";

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

export const getCountSubChaptersTaken = async (req, res) => {
  try {
    const userId = "S0001"; // Mengunci user id statis untuk keperluan testing
    const subChaptersTaken = await countSubChaptersTaken(userId);

    if (!subChaptersTaken) {
      return res.status(200).json({
        success: true,
        message: "You haven't taken any sub chapters yet!",
        data: subChaptersTaken, // Mengembalikan angka 0
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to count sub chapters taken by user",
      data: subChaptersTaken, // Mengembalikan angka jumlah sub-chapter
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to count sub chapters taken!",
      error: error.message,
    });
  }
};

export const getCountSubChaptersInProgress = async (req, res) => {
  try {
    const userId = "S0001";
    const subChaptersInProgress = await countSubChaptersInProgress(userId);

    if (!subChaptersInProgress) {
      return res.status(200).json({
        success: true,
        message: "You don't have any sub chapters in progress!",
        data: subChaptersInProgress, // Mengembalikan angka 0
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to count sub chapters in progress by user",
      data: subChaptersInProgress, // Mengembalikan angka jumlah sub-chapter in progress
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to count sub chapters in progress!",
      error: error.message,
    });
  }
};

export const getCountSubChaptersDone = async (req, res) => {
  try {
    const userId = "S0001";
    const subChaptersDone = await countSubChaptersDone(userId);

    if (!subChaptersDone) {
      return res.status(200).json({
        success: true,
        message: "You haven't completed any sub chapters yet!",
        data: subChaptersDone, // Mengembalikan angka 0
      });
    }

    return res.status(200).json({
      success: true,
      message: "Success to count sub chapters done by user",
      data: subChaptersDone, // Mengembalikan angka jumlah sub-chapter done
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to count sub chapters done!",
      error: error.message,
    });
  }
};

export const getDashboardSummary = async (req, res) => {
  try {
    const userId = "S0001"; // Nanti diganti dengan ID dari middleware auth jika sudah ada

    // Menjalankan ke-6 fungsi service secara pararel (bersamaan) agar performa API instan
    const [
      chaptersTaken,
      chaptersInProgress,
      chaptersDone,
      subChaptersTaken,
      subChaptersInProgress,
      subChaptersDone // Menambahkan metrik sub-chapter done ke dalam antrean pararel
    ] = await Promise.all([
      countChaptersTakenByUserId(userId),
      countChaptersInProgress(userId),
      countChaptersDone(userId),
      countSubChaptersTaken(userId),
      countSubChaptersInProgress(userId),
      countSubChaptersDone(userId), // Memanggil service sub-chapter done
    ]);

    // Mengembalikan seluruh data statistik dalam satu objek JSON terstruktur
    return res.status(200).json({
      success: true,
      message: "Success to fetch dashboard summary",
      data: {
        chapters: {
          taken: chaptersTaken,
          in_progress: chaptersInProgress,
          done: chaptersDone,
        },
        sub_chapters: {
          taken: subChaptersTaken,
          in_progress: subChaptersInProgress,
          done: subChaptersDone, // Sekarang datanya sudah lengkap masuk ke sini!
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard summary!",
      error: error.message,
    });
  }
};