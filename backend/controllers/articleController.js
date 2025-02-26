const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createArticle = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const authorId = req.user.userId;

        const article = await prisma.article.create({
            data: { title, content, category, authorId },
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
        const article = await prisma.article.findUnique({ where: { id: req.params.id }, include: { author: true } });
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
