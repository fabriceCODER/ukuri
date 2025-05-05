import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";  // Admin middleware
import {
  createNotification,
  getNotifications,
  getAllNotifications,
  deleteNotification,
  getUnreadCount,
} from "../controllers/notificationController.js";

const router = express.Router();

// Route for creating a notification (accessible by the user)
router.post("/", verifyToken, createNotification);

// Route for getting a user's notifications (accessible by the user)
router.get("/", verifyToken, getNotifications);

// Admin route for getting all notifications
router.get("/all", verifyToken, isAdmin, getAllNotifications);

// Route for deleting a notification (accessible by user or admin)
router.delete("/:id", verifyToken, deleteNotification);

// Route for getting unread notification count (accessible by user)
router.get("/unread/count", verifyToken, getUnreadCount);

export default router;
