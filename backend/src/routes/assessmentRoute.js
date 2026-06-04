import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  getAssessmentQuestions,
  submitAssessment,
  checkPlacementStatus,
  getUserAiReports,
  fetchChapterMaterial,
} from "../controllers/assessmentController.js";

const router = Router();

router.use(verifyToken);
router.get("/status-placement", checkPlacementStatus);
router.get("/materi/:chapterId", fetchChapterMaterial);
router.get("/ai-reports/:userId", getUserAiReports);

router.get("/:assessmentId/questions", getAssessmentQuestions);
router.post("/:assessmentId/submit", submitAssessment);


export default router;
