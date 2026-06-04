import prisma from "../config/prisma.js";

// Fungsi untuk mengambil assessment sekaligus men-join tabel questions
export const findAssessmentWithQuestions = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: {
      id: assessmentId,
    },
    include: {
      questions: true,
    },
  });
};

export const findChapterById = async (chapterId) => {
  return await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: { id: true, name: true },
  });
};

export const countUserPlacementAttempts = async (userId) => {
  return await prisma.userAttempt.count({
    where: {
      user_id: userId,
      assessment: {
        type: "placement",
      },
    },
  });
};

// Fungsi untuk menyimpan hasil usaha kuis siswa ke tabel user_attempts
export const createUserAttempt = async (attemptData) => {
  return await prisma.userAttempt.create({
    data: attemptData,
  });
};

export const findChapterTakenByUser = async (userId, chapterId) => {
  return await prisma.chapterTaken.findFirst({
    where: {
      user_id: userId,
      chapter_id: chapterId,
    },
  });
};

// Fungsi untuk mencari tahu chapter_id dari kuis yang sedang dikerjakan
export const findAssessmentChapterInfo = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: { id: assessmentId },
    select: { chapter_taken_id: true }, // Mengambil ID relasi bab yang diambil
  });
};

// Fungsi untuk mengambil semua sub-bab berdasarkan chapter_taken_id
export const findSubChaptersByChapterTaken = async (chapterTakenId) => {
  // Mencari data bab asli untuk mendapatkan chapter_id
  const chapterTaken = await prisma.chapterTaken.findUnique({
    where: { id: chapterTakenId },
    select: { chapter_id: true },
  });

  if (!chapterTaken) return [];

  // Mengambil semua sub-bab milik chapter tersebut
  return await prisma.subChapter.findMany({
    where: { chapter_id: chapterTaken.chapter_id },
  });
};

export const findSubChaptersByChapterId = async (chapterId) => {
  return await prisma.subChapter.findMany({
    where: { chapter_id: chapterId },
  });
};

export const getAllSubChaptersMaster = async () => {
  return await prisma.subChapter.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

// Fungsi untuk memasukkan banyak data progres sekaligus (Bulk Insert)
export const createBulkUserProgress = async (progressDataArray) => {
  return await prisma.userProgres.createMany({
    data: progressDataArray,
    skipDuplicates: true, // Amankan dari eror jika data sudah pernah terbuat
  });
};

// Fungsi untuk mengubah status progres sub-bab siswa menjadi 'done'
export const updateUserProgressToDone = async (userId, subChapterId) => {
  return await prisma.userProgres.updateMany({
    where: {
      user_id: userId,
      sub_chapter_id: subChapterId,
    },
    data: {
      status: "done", // Mengubah status menjadi done sesuai diagram kendali
    },
  });
};

export const updateChapterTakenToDone = async (userId, chapterId) => {
  return await prisma.chapterTaken.updateMany({
    where: {
      user_id: userId,
      chapter_id: chapterId,
    },
    data: {
      updated_at: new Date(),
    },
  });
};

export const countExamAttempts = async (userId, assessmentId) => {
  return await prisma.userAttempt.count({
    where: { user_id: userId, assessment_id: assessmentId },
  });
};

export const countTotalSubChaptersInChapter = async (chapterId) => {
  return await prisma.subChapter.count({
    where: { chapter_id: chapterId },
  });
};

export const countDoneSubChaptersByUser = async (userId, chapterId) => {
  return await prisma.userProgres.count({
    where: {
      user_id: userId,
      status: "done",
      sub_chapter: { chapter_id: chapterId },
    },
  });
};

// Fungsi untuk menyimpan transkrip evaluasi & rekomendasi dari AI ke database
export const createAiReport = async (data) => {
  return await prisma.aiReport.create({
    data: {
      id: data.id,
      user_id: data.userId,
      chapter_taken_id: data.chapterTakenId,
      evaluation_text: data.evaluationText,
      recomendation_list: data.recomendationList, // Akan menyimpan array/objek JSON langsung
    },
  });
};

// Fungsi untuk mengambil semua laporan AI milik siswa berdasarkan userId
export const findAiReportsByUserId = async (userId) => {
  return await prisma.aiReport.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: "desc", // Laporan terbaru akan muncul di paling atas
    },
  });
};
