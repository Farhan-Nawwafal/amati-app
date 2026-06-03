import express from "express";
import { handleCreateSubChapter, handleDecreaseSubChapter  } from "../controllers/subChapterController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, handleCreateSubChapter);
router.delete("/:id", verifyToken, handleDecreaseSubChapter);

export default router;
