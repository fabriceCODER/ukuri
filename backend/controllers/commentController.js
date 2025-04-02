import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add Comment
export const addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const articleId = req.params.articleId;
        const authorId = req.user.userId;

        const comment = await prisma.comment.create({
            data: {
                content,
                articleId,
                authorId
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            }
        });

        res.status(201).json(comment);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Failed to add comment" });
    }
};

// Get Comments
export const getComments = async (req, res) => {
    try {
        const articleId = req.params.articleId;

        const comments = await prisma.comment.findMany({
            where: { articleId },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Failed to fetch comments" });
    }
};

// Update Comment
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const userId = req.user.userId;

        const comment = await prisma.comment.findUnique({ where: { id } });

        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        if (comment.authorId !== userId) {
            return res.status(403).json({ error: "Not authorized to update this comment" });
        }

        const updatedComment = await prisma.comment.update({
            where: { id },
            data: { content }
        });

        res.json(updatedComment);
    } catch (error) {
        console.error("Error updating comment:", error);
        res.status(500).json({ error: "Failed to update comment" });
    }
};

// Delete Comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.userId;

        const comment = await prisma.comment.findUnique({ where: { id } });

        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        if (comment.authorId !== userId) {
            return res.status(403).json({ error: "Not authorized to delete this comment" });
        }

        await prisma.comment.delete({ where: { id } });

        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ error: "Failed to delete comment" });
    }
};
