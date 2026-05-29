import { Router } from "express";
import { getCourses } from "../controllers/courseController.js";

const router = Router();

// Rute untuk mengambil semua katalog bab utama
router.get("/all", getCourses);

export default router;