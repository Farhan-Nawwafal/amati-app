import { Router } from "express";
import {
  getCountChaptersTakenByUserId,
  getCountChaptersInProgress,
  getCountChaptersDone,
  getCountSubChaptersTaken,
  getCountSubChaptersInProgress,
  getCountSubChaptersDone,
  getDashboardSummary,
} from "../controllers/dashboardController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

router.use(verifyToken);
router.get("/countChaptersTaken", getCountChaptersTakenByUserId);
router.get("/countChaptersInProgress", getCountChaptersInProgress);
router.get("/countChaptersDone", getCountChaptersDone);
router.get("/countSubChaptersTaken", getCountSubChaptersTaken);
router.get("/countSubChaptersInProgress", getCountSubChaptersInProgress);
router.get("/countSubChaptersDone", getCountSubChaptersDone);
router.get("/summary", getDashboardSummary);

export default router;
