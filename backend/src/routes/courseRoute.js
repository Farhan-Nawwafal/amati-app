import { Router } from "express";
import {
  getCourses,
  handleEnrollChapter,
  getSubChapters,
  completeSubChapter,
} from "../controllers/courseController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

// Rute untuk mengambil semua katalog bab utama
router.use(verifyToken);
router.get("/all", getCourses);
router.get("/sub-chapters/:chapterId", getSubChapters);
router.post("/enroll", handleEnrollChapter);
router.put("/sub-chapters/:subChapterId/complete", completeSubChapter);

export default router;
