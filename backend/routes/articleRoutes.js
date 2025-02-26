const express = require("express");
const { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } = require("../controllers/articleController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticate, createArticle);
router.get("/", getArticles);
router.get("/:id", getArticleById);
router.put("/:id", authenticate, updateArticle);
router.delete("/:id", authenticate, deleteArticle);

module.exports = router;
