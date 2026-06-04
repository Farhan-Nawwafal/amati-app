import * as examRepo from "../repositories/examRepository.js";

export const getStudentExamListService = async (userId) => {
  // Ambil semua bab yang sudah di-enroll siswa
  const enrollments = await examRepo.getEnrolledChaptersWithExams(userId);

  const examListResponse = [];

  for (const enrollment of enrollments) {
    const chapter = enrollment.chapter;
    if (!chapter) continue;

    const assessments = chapter.assessments || [];
    const examsArray = Array.isArray(assessments) ? assessments : [assessments];

    for (const exam of examsArray) {
      if (!exam) continue;

      // Cek apakah siswa sudah punya nilai untuk ujian ini
      const attempt = await examRepo.findUserAttemptByExam(userId, exam.id);

      examListResponse.push({
        id: exam.id,
        chapterTitle: chapter.name || "Matematika",
        examTitle: exam.title,
        dueDate: "Dec 31, 2026",
        points: 100,
        isCompleted: !!attempt, // true jika sudah dikerjakan
        score: attempt ? `${attempt.score}/100` : null,
      });
    }
  }

  return examListResponse;
};
