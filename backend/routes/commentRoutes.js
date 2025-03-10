import express from "express";
import { addComment, getComments, deleteComment } from "../controllers/commentController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:articleId", authenticate, addComment);
router.get("/:articleId", getComments);
router.delete("/:id", authenticate, deleteComment);

export default router;
