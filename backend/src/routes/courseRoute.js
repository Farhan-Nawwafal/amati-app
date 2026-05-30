import { Router } from "express";
import { getCourses, getSubChapters } from "../controllers/courseController.js";

const router = Router();

// Rute untuk mengambil semua katalog bab utama
router.get("/all", getCourses);

// Rute untuk mengambil sub-bab berdasarkan ID bab
router.get("/sub-chapters/:chapterId", getSubChapters);

export default router;