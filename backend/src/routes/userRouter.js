import { Router } from "express";
import { userRegister, userLogin } from "../controllers/userController.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
import { registerSchema, loginSchema } from "../validations/userValidation.js";

const router = Router();

router.post("/register", validateMiddleware(registerSchema), userRegister);
router.post("/login", validateMiddleware(loginSchema), userLogin);

export default router;
