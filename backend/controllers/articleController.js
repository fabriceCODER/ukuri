const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const prisma = new PrismaClient();

// Set up multer storage and file naming
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../public/uploads");
        // Make sure the upload directory exists
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

exports.createArticle = async (req, res) => {
    // Use multer middleware to handle file upload in the route (not here in the controller)
    // Attach the image file to the req object as req.file

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

exports.getArticles = async (req, res) => {
    try {
        const articles = await prisma.article.findMany({ include: { author: true } });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
};

exports.getArticleById = async (req, res) => {
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

exports.updateArticle = async (req, res) => {
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

exports.deleteArticle = async (req, res) => {
    try {
        await prisma.article.delete({ where: { id: req.params.id } });
        res.json({ message: "Article deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete article" });
    }
};

