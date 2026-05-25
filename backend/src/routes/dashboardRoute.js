import { Router } from "express";
import {
    getCountChaptersTakenByUserId,
    getCountChaptersInProgress,
    getCountChaptersDone,
    getCountSubChaptersTaken,
} from '../controllers/dashboardController.js';

const router = Router();

router.get('/countChaptersTaken', getCountChaptersTakenByUserId);
router.get('/countChaptersInProgress', getCountChaptersInProgress);
router.get('/countChaptersDone', getCountChaptersDone);
router.get('/countSubChaptersTaken', getCountSubChaptersTaken);

export default router;