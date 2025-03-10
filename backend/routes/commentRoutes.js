import express from "express";
import { addComment, getComments } from "../controllers/commentController";
import authenticate from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/:articleId", authenticate, addComment);
router.get("/:articleId", getComments);

export default router;
