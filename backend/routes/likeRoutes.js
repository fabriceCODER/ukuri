const express = require("express");
const { likeArticle, unlikeArticle, getLikesCount } = require("../controllers/likeController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:articleId", authenticate, likeArticle);
router.delete("/:articleId", authenticate, unlikeArticle);
router.get("/:articleId/count", getLikesCount);

module.exports = router;
