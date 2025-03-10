import express from "express";
import { likeArticle, unlikeArticle, getLikesCount } from "../controllers/likeController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/:articleId", authenticate, likeArticle);
router.delete("/:articleId", authenticate, unlikeArticle);
router.get("/:articleId/count", getLikesCount);

export default router;
