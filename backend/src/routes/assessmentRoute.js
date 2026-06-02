import { Router } from "express";
import { getAssessmentQuestions, submitAssessment } from "../controllers/assessmentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { checkPlacementStatus } from "../controllers/assessmentController.js";


const router = Router();

router.get("/status-placement", verifyToken, checkPlacementStatus);
router.get("/:assessmentId/questions", verifyToken, getAssessmentQuestions);
router.post("/:assessmentId/submit", verifyToken, submitAssessment);

export default router;