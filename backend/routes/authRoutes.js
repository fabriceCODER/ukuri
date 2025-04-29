import express from "express";
import { register, login, getUserProfile } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getUserProfile);
// router.get("/profile", authMiddleware, getUserProfile);

export default router;
