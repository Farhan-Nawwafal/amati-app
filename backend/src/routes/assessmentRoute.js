import { Router } from "express";
import { getAssessmentQuestions, submitAssessment } from "../controllers/assessmentController.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // Sesuaikan jika nama foldernya 'middlewares'

const router = Router();

// Rute untuk mengambil soal kuis (Bisa dipakai untuk Pre-test, Quiz, & Exam)
router.get("/:assessmentId/questions", verifyToken, getAssessmentQuestions);

// Rute Baru: Mengirimkan lembar jawaban siswa (POST)
router.post("/:assessmentId/submit", verifyToken, submitAssessment);

export default router;