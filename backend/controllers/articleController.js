import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import fs from "fs";
import router from "../routes/authRoutes.js";  // Assuming you still need to import this

const prisma = new PrismaClient();

// Set up multer storage and file naming for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const filename = `${Date.now()}${fileExtension}`;
        cb(null, filename);
    },
});

const upload = multer({ storage: storage });

// Create an article
export const createArticle = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const authorId = req.user.userId;

        // If image is provided, store the image path
        let imagePath = null;
        if (req.file) {
            imagePath = `/uploads/${req.file.filename}`;
        }

        const article = await prisma.article.create({
            data: { title, content, category, authorId, image: imagePath },
        });

        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: "Failed to create article" });
    }
};

// Get all articles
export const getArticles = async (req, res) => {
    try {
        const articles = await prisma.article.findMany({ include: { author: true } });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
};

// Get an article by ID
export const getArticleById = async (req, res) => {
    try {
        const article = await prisma.article.findUnique({
            where: { id: req.params.id },
            include: { author: true },
        });

        if (!article) return res.status(404).json({ error: "Article not found" });
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: "Error fetching article" });
    }
};

// Update an article
export const updateArticle = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const article = await prisma.article.update({
            where: { id: req.params.id },
            data: { title, content, category },
        });

        res.json(article);
    } catch (error) {
        res.status(500).json({ error: "Failed to update article" });
    }
};

// Delete an article
export const deleteArticle = async (req, res) => {
    try {
        await prisma.article.delete({ where: { id: req.params.id } });
        res.json({ message: "Article deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete article" });
    }
};

// Get statistics for articles
export const getArticleStats = async (req, res) => {
    try {
        // Count the total number of articles
        const totalArticles = await prisma.article.count();
        
        // Add more stats as needed (e.g., most viewed, articles per category, etc.)
        // Example: Get the most recent article
        const mostRecentArticle = await prisma.article.findFirst({
            orderBy: { createdAt: 'desc' },
        });

        const stats = {
            totalArticles,
            mostRecentArticle,
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch article statistics" });
    }
};

export default {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    getArticleStats,
};
