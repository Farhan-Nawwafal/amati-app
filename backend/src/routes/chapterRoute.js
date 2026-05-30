import express from "express";
import { handleCreateChapter } from "../controllers/chapterController.js";

// Import middleware punya kamu
import { verifyToken } from "../middlewares/authMiddleware.js";
import validateMiddleware from "../middlewares/validateMiddleware.js";

// Import schema validasi
import { createChapterSchema } from "../validations/chapterValidation.js";

const router = express.Router();

router.use(verifyToken);
router.post(
  "/chapters",
  validateMiddleware(createChapterSchema), 
  handleCreateChapter,
);

export default router;
