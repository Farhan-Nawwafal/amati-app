import { Router } from "express";
import {
    getCountChaptersTakenByUserId
} from '../controllers/dashboardController.js';

const router = Router();

router.get('/countChaptersTaken', getCountChaptersTakenByUserId);

export default router;