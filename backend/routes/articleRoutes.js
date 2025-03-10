import express from "express";
import multer from "multer";
import { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } from "../controllers/articleController";
import authenticate from "../middlewares/authMiddleware";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post("/", authenticate, createArticle);
router.get("/", getArticles);
router.get("/:id", getArticleById);
router.put("/:id", authenticate, updateArticle);
router.delete("/:id", authenticate, deleteArticle);

// Use multer middleware for handling file uploads
router.post("/articles", upload.single("image"), createArticle);

export default router;
