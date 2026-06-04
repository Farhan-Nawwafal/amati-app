import { Router } from "express";
import { userRegister, userLogin, getUserProfile, updateUserProfile } from "../controllers/userController.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { registerSchema, loginSchema } from "../validations/userValidation.js";

const router = Router();

router.post("/register", validateMiddleware(registerSchema), userRegister);
router.post("/login", validateMiddleware(loginSchema), userLogin);

router.get("/profile", verifyToken, getUserProfile);
router.put("/profile", verifyToken, updateUserProfile);

export default router;
