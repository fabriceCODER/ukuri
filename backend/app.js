import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/authRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";

const app = express();

// CORS configuration
app.use(cors({
     origin: process.env.FRONTEND_URL || 'http://localhost:3000',
     credentials: true,
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
     allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

app.get("/", (req, res) => res.send("News API is running!"));

// Error handling middleware
app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(err.status || 500).json({
          message: err.message || 'Internal server error',
          error: process.env.NODE_ENV === 'development' ? err : {}
     });
});

// 404 handler
app.use((req, res) => {
     res.status(404).json({ message: 'Route not found' });
});

export default app;
