require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const {register, login} = require("./controllers/authController");
// const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(cors());
app.use(helmet());

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);
// app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the News API");
});
app.post("/register", authRoutes);
app.post("/login", authRoutes);
app.get("/api/articles", articleRoutes);
app.get("/api/articles:{id}}", articleRoutes);

module.exports = app;

