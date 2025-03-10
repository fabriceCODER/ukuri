import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const likeArticle = async (req, res) => {
    try {
        const { articleId } = req.params;
        const userId = req.user.userId;

        // Check if article exists
        const article = await prisma.article.findUnique({
            where: { id: articleId }
        });

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        const existingLike = await prisma.like.findFirst({
            where: { userId, articleId }
        });

        if (existingLike) {
            return res.status(400).json({ error: "Already liked" });
        }

        const like = await prisma.like.create({
            data: { userId, articleId }
        });

        res.status(201).json(like);
    } catch (error) {
        console.error("Error liking article:", error);
        res.status(500).json({ error: "Failed to like article" });
    }
};

export const unlikeArticle = async (req, res) => {
    try {
        const { articleId } = req.params;
        const userId = req.user.userId;

        const existingLike = await prisma.like.findFirst({
            where: { userId, articleId }
        });

        if (!existingLike) {
            return res.status(404).json({ error: "Like not found" });
        }

        await prisma.like.delete({
            where: { id: existingLike.id }
        });

        res.json({ message: "Unliked article" });
    } catch (error) {
        console.error("Error unliking article:", error);
        res.status(500).json({ error: "Failed to unlike article" });
    }
};

export const getLikesCount = async (req, res) => {
    try {
        const { articleId } = req.params;

        const article = await prisma.article.findUnique({
            where: { id: articleId }
        });

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        const count = await prisma.like.count({
            where: { articleId }
        });

        res.json({ count });
    } catch (error) {
        console.error("Error getting likes count:", error);
        res.status(500).json({ error: "Failed to get likes count" });
    }
};
