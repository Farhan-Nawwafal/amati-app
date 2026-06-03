import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { 
  getAssessmentQuestions, 
  submitAssessment, 
  checkPlacementStatus,
  getUserAiReports 
} from "../controllers/assessmentController.js";

const router = Router();

router.get("/status-placement", verifyToken, checkPlacementStatus);
router.get("/:assessmentId/questions", verifyToken, getAssessmentQuestions);
router.post("/:assessmentId/submit", verifyToken, submitAssessment);

// Rute GET untuk mengambil laporan AI milik siswa
router.get("/ai-reports/:userId", verifyToken, getUserAiReports); 
// Catatan: Saya tambahkan 'verifyToken' di atas agar rutenya aman digembok jwt, sama seperti rute lainnya.

export default router;