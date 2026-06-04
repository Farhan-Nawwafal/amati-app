import { Router } from "express";
import { getStudentQuizList } from "../controllers/quizController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

router.use(verifyToken);
router.get("/student-list", getStudentQuizList);

export default router;
