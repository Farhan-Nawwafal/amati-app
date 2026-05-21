import { Router } from "express";
import {
    getCountChaptersTakenByUserId,
    getCountChaptersInProgress,
} from '../controllers/dashboardController.js';

const router = Router();

router.get('/countChaptersTaken', getCountChaptersTakenByUserId);
router.get('/countChaptersInProgress', getCountChaptersInProgress);

export default router;