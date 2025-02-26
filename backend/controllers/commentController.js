const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const { articleId } = req.params;
        const userId = req.user.userId;

        const comment = await prisma.comment.create({
            data: {
                content,
                userId,
                articleId
            },
        });

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Failed to add comment" });
    }
};

exports.getComments = async (req, res) => {
    try {
        const { articleId } = req.params;
        const comments = await prisma.comment.findMany({
            where: { articleId },
            include: { user: true },
            orderBy: { createdAt: "desc" }
        });

        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
};
