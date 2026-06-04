import * as quizRepo from "../repositories/quizRepository.js";

export const getStudentQuizListService = async (userId) => {
  // Ambil semua progress sub-bab yang sudah diambil siswa
  const progresses =
    await quizRepo.getEnrolledSubChaptersWithAssessments(userId);

  const quizListResponse = [];

  for (const prog of progresses) {
    const subChapter = prog.sub_chapter;
    if (!subChapter) continue;

    const chapter = subChapter.chapter;
    const assessments = subChapter.assessments || [];

    // Amankan bentuk data menjadi array (jaga-jaga jika relasi Prisma diset 1-to-1)
    const assessmentsArray = Array.isArray(assessments)
      ? assessments
      : [assessments];

    for (const quiz of assessmentsArray) {
      if (!quiz) continue; // Lewati jika sub-bab belum dipasangi kuis oleh admin

      // Cek ke tabel user_attempts, apakah siswa sudah pernah klik submit di kuis ini?
      const attempt = await quizRepo.findUserAttemptByQuiz(userId, quiz.id);

      quizListResponse.push({
        id: quiz.id,
        chapterTitle: `Quiz ${chapter?.name || "Matematika"}`,
        subChapterTitle: subChapter.name,
        dueDate: "Dec 31, 2026", // Bisa diubah jadi dinamis jika tabel assessment punya kolom due_date
        points: 100, // Skala nilai maksimal UI
        isCompleted: !!attempt, // Bernilai true jika data attempt ditemukan
        score: attempt ? `${attempt.score}/100` : null, // Format pecahan untuk UI
      });
    }
  }

  return quizListResponse;
};
