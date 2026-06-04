import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { 
  getAssessmentQuestions, 
  submitAssessment, 
  checkPlacementStatus,
  getUserAiReports 
} from "../controllers/assessmentController.js";

const router = Router();

router.use(verifyToken)
router.get("/status-placement", checkPlacementStatus);
router.get("/:assessmentId/questions", getAssessmentQuestions);
router.post("/:assessmentId/submit", submitAssessment);

// Rute GET untuk mengambil laporan AI milik siswa
router.get("/ai-reports/:userId", getUserAiReports); 
// Catatan: Saya tambahkan 'verifyToken' di atas agar rutenya aman digembok jwt, sama seperti rute lainnya.

export default router;