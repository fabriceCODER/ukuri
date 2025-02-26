const express = require("express");
const { addComment, getComments } = require("../controllers/commentController");
const authenticate = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/:articleId", authenticate, addComment);
router.get("/:articleId", getComments);

module.exports = router;
