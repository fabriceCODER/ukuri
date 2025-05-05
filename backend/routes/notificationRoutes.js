import express from 'express';
import {
  getUserNotifications,
  createNotification,
  markAsRead,
  getAllNotifications,
  deleteNotification,
  getUnreadCount
} from '../controllers/notificationController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getUserNotifications);
router.post('/', verifyToken, createNotification);
router.patch('/:id/read', verifyToken, markAsRead);
router.get('/all', verifyToken, isAdmin, getAllNotifications);
router.get('/unread/count', verifyToken, getUnreadCount);
router.delete('/:id', verifyToken, deleteNotification);




export default router;
