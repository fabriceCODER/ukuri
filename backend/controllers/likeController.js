const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.likeArticle = async (req, res) => {
    try {
        const { articleId } = req.params;
        const userId = req.user.userId;

        const existingLike = await prisma.like.findFirst({ where: { userId, articleId } });

        if (existingLike) return res.status(400).json({ error: "Already liked" });

        const like = await prisma.like.create({ data: { userId, articleId } });

        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ error: "Failed to like article" });
    }
};

exports.unlikeArticle = async (req, res) => {
    try {
        const { articleId } = req.params;
        const userId = req.user.userId;

        await prisma.like.deleteMany({ where: { userId, articleId } });

        res.json({ message: "Unliked article" });
    } catch (error) {
        res.status(500).json({ error: "Failed to unlike article" });
    }
};

exports.getLikesCount = async (req, res) => {
    try {
        const { articleId } = req.params;
        const count = await prisma.like.count({ where: { articleId } });

        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: "Failed to get likes count" });
    }
};
