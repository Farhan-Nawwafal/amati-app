import * as courseRepo from "../repositories/courseRepository.js";

export const getAllChaptersList = async (userId) => {
  // Ambil semua bank silabus materi matematika VII dari DB master
  const masterChapters = await courseRepo.findAllChaptersWithSubsMaster();

  const finalResponse = [];

  for (const [index, chapter] of masterChapters.entries()) {
    const totalSubs = chapter.sub_chapters?.length || 0;

    // Cari apakah siswa ini sudah pernah klik "Ambil Kelas" untuk bab ini
    const userProgressList = await courseRepo.findUserProgressForChapter(
      userId,
      chapter.id,
    );

    let progressPercentage = 0;
    let finalStatus = "Not Started"; // Nilai default jika user MEMANG belum enroll

    // JIKA USER SUDAH ENROLL (Data progres untuk bab ini ditemukan di database)
    if (userProgressList && userProgressList.length > 0) {
      // 💡 FIX UTAMA: Begitu records progress ditemukan di DB, status default chapter langsung "In-Progress"!
      finalStatus = "In-Progress";

      const doneSubsCount = userProgressList.filter(
        (p) => p.status === "done",
      ).length;

      // Hitung persentase pengerjaan sub-bab berdasarkan kuis yang sudah selesai
      progressPercentage =
        totalSubs > 0 ? Math.round((doneSubsCount / totalSubs) * 100) : 0;

      // Jika seluruh sub-bab sudah berstatus done (100%), barulah status naik jadi "Done"
      if (progressPercentage === 100) {
        finalStatus = "Done";
      }
    }

    finalResponse.push({
      id: chapter.id,
      title: `Chapter ${index + 1}`,
      name: chapter.name,
      progress: progressPercentage,
      status: finalStatus, // 💡 Sekarang aman mengirimkan "In-Progress" ke frontend!
    });
  }

  return finalResponse;
};

export const getSubChaptersListByChapter = async (chapterId, userId) => {
  // Ambil semua butir sub-bab master dari DB berdasarkan ID Bab
  const subChapters = await courseRepo.findSubChaptersByChapterId(chapterId);

  const transformedSubChapters = [];

  for (const sub of subChapters) {
    // Cari data track record user_progres milik siswa untuk sub-bab ini
    const userProgress = await courseRepo.findUserProgress(userId, sub.id);

    let progressValue = 0;

    if (userProgress) {
      // Hitung total seluruh kuis evaluasi master yang ada di sub-bab ini
      const totalAssessmentsInSub =
        await courseRepo.countAssessmentsBySubChapter(sub.id);

      if (totalAssessmentsInSub > 0) {
        // Hitung berapa jumlah kuis di sub-bab ini yang sudah berhasil disubmit nilainya oleh siswa
        const completedAttemptsCount =
          await courseRepo.countUserAttemptsBySubChapter(userId, sub.id);

        // Jalankan Rumus Persentase Dinamis: (Total Selesai / Total Master Ujian) * 100
        progressValue = Math.min(
          Math.round((completedAttemptsCount / totalAssessmentsInSub) * 100),
          100,
        );
      } else {
        // Jika admin belum menginput kuis di sub-bab ini,
        // tapi status belajarnya sudah 'done', kita anggap progresnya sudah 100%
        progressValue = userProgress.status === "done" ? 100 : 0;
      }
    }

    // Kembalikan struktur payload yang serasi dan dinamis ke Frontend
    transformedSubChapters.push({
      id: sub.id,
      chapter_id: sub.chapter_id,
      name: sub.name,
      content: sub.content,
      progress: progressValue,
    });
  }

  return transformedSubChapters;
};

export const enrollToChapterService = async (userId, chapterId) => {
  const isAlreadyEnrolled = await courseRepo.findChapterTaken(
    userId,
    chapterId,
  );
  if (isAlreadyEnrolled) {
    throw new Error("You have already enrolled in this chapter!");
  }

  const subChapters = await courseRepo.findSubChaptersByChapterId(chapterId);
  if (!subChapters.length) {
    throw new Error(
      "This chapter has no sub-chapters initialized yet by admin.",
    );
  }

  const chapterTakenId =
    "CHT-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  const progressPayload = subChapters.map((sub) => ({
    id: "PRG-" + Math.random().toString(36).substring(2, 12).toUpperCase(),
    user_id: userId,
    sub_chapter_id: sub.id,
    chapter_taken_id: chapterTakenId,
    current_level: "beginner",
    status: "in_progres",
  }));

  return await courseRepo.createEnrollmentTransaction(
    userId,
    chapterId,
    chapterTakenId,
    progressPayload,
  );
};
