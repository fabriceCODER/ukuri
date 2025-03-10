import express from "express";
import { likeArticle, unlikeArticle, getLikesCount } from "../controllers/likeController";
import authenticate from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/:articleId", authenticate, likeArticle);
router.delete("/:articleId", authenticate, unlikeArticle);
router.get("/:articleId/count", getLikesCount);

export default router;
