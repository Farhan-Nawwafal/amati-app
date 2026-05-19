import { Router } from "express";
import { allUsers } from '../controllers/userController.js';

const router = Router();

router.get('/users', allUsers);

export default router;