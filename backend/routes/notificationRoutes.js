import express from 'express';
import {
  getUserNotifications,
  createNotification,
  markAsRead,
} from '../controllers/notificationController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getUserNotifications);
router.post('/', verifyToken, createNotification);
router.patch('/:id/read', verifyToken, markAsRead);

export default router;
