import { Router } from "express";
import {
    getCountChaptersTakenByUserId,
    getCountChaptersInProgress,
    getCountChaptersDone,
    getCountSubChaptersTaken,
    getCountSubChaptersInProgress,
} from '../controllers/dashboardController.js';

const router = Router();

router.get('/countChaptersTaken', getCountChaptersTakenByUserId);
router.get('/countChaptersInProgress', getCountChaptersInProgress);
router.get('/countChaptersDone', getCountChaptersDone);
router.get('/countSubChaptersTaken', getCountSubChaptersTaken);
router.get('/countSubChaptersInProgress', getCountSubChaptersInProgress);

export default router;