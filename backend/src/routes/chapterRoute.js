import express from "express";
import { handleCreateChapter, getAllChapterController } from "../controllers/chapterController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
import { createChapterSchema } from "../validations/chapterValidation.js";

const router = express.Router();

router.use(verifyToken);
router.get(
  "/", 
  getAllChapterController,
);
router.post(
  "/",
  validateMiddleware(createChapterSchema), 
  handleCreateChapter,
);

export default router;
