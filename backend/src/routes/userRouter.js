import { Router } from "express";
import { userRegister } from '../controllers/userController.js';
// import validateMiddleware from '../middleware/validateMiddleware.js';
// import { registerSchema } from '../validations/userValidation.js';

const router = Router();

router.post('/register', userRegister);


export default router;