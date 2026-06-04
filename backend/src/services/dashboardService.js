import {
  findChaptersTakenByUserId,
  countChaptersInProgressByUserId,
  countChaptersDoneByUserId,
  countSubChaptersTakenByUserId,
  countSubChaptersInProgressByUserId,
  countSubChaptersDoneByUserId,
  findChapterProgressDetails,
  findRecentSubChapterProgress,
} from "../repositories/dashboardRepository.js";

export const countChaptersTakenByUserId = async (userId) => {
  const result = await findChaptersTakenByUserId(userId);
  if (!result.length) return 0;
  return result.length;
};

export const countChaptersInProgress = async (userId) => {
  const result = await countChaptersInProgressByUserId(userId);
  if (!result.length) return 0;
  return result.length;
};

export const countChaptersDone = async (userId) => {
  const result = await countChaptersDoneByUserId(userId);
  if (!result.length) return 0;
  return result.length;
};

export const countSubChaptersTaken = async (userId) => {
  const result = await countSubChaptersTakenByUserId(userId);
  return result; // Langsung mengembalikan angka jumlah count dari database
};

export const countSubChaptersInProgress = async (userId) => {
  const result = await countSubChaptersInProgressByUserId(userId);
  return result;
};

export const countSubChaptersDone = async (userId) => {
  const result = await countSubChaptersDoneByUserId(userId);
  return result;
};

export const getChapterProgressList = async (userId) => {
  const chaptersTaken = await findChapterProgressDetails(userId);

  return chaptersTaken.map((ct) => {
    const progresses = ct.user_progres || [];
    const total = progresses.length;
    const done = progresses.filter((p) => p.status === "done").length;

    // Kalkulasi persentase (0 - 100)
    const percentage = total > 0 ? Math.round((done / total) * 100) : 0;

    return {
      title: ct.chapter?.name || "Chapter Matematika",
      progress: percentage,
    };
  });
};

// Service untuk mengambil riwayat aktivitas paling baru
export const getRecentActivities = async (userId) => {
  const recentProgress = await findRecentSubChapterProgress(userId);

  if (!recentProgress) {
    return {
      recent_chapter: { title: "Belum ada aktivitas", status: "-" },
      recent_sub_chapter: { title: "Belum ada aktivitas", status: "-" },
    };
  }

  // Format teks status
  const formatStatus = (status) => {
    if (status === "done") return "Completed";
    if (status === "in_progres") return "In Progress";
    return "Not Started";
  };

  return {
    recent_chapter: {
      title: recentProgress.chapter_taken?.chapter?.name || "Chapter",
      status: "Active Session",
    },
    recent_sub_chapter: {
      title: recentProgress.sub_chapter?.name || "Sub Chapter",
      status: formatStatus(recentProgress.status),
    },
  };
};
