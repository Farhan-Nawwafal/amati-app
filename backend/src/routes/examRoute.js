import { Router } from "express";
import { getStudentExamList } from "../controllers/examController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

router.use(verifyToken);
router.get("/student-list", getStudentExamList);

export default router;
