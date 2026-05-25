import { Router } from "express";
import {
    getCountChaptersTakenByUserId,
    getCountChaptersInProgress,
    getCountChaptersDone,
} from '../controllers/dashboardController.js';

const router = Router();

router.get('/countChaptersTaken', getCountChaptersTakenByUserId);
router.get('/countChaptersInProgress', getCountChaptersInProgress);
router.get('/countChaptersDone', getCountChaptersDone);

export default router;