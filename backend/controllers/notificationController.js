import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Get all notifications for the authenticated user
 */
export const getUserNotifications = async (req, res) => {
  const userId = req.user.id;

  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

/**
 * Create a new notification for the authenticated user
 */
export const createNotification = async (req, res) => {
  const userId = req.user.id;
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const notification = await prisma.notification.create({
      data: {
        message,
        userId,
      },
    });
    res.status(201).json(notification);
  } catch (error) {
    console.error('Failed to create notification:', error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
};

export const getUnreadCount = async (req, res) => {
     const userId = req.user.id;
   
     try {
       const count = await prisma.notification.count({
         where: {
           userId,
           isRead: false,
         },
       });
       res.status(200).json({ unreadCount: count });
     } catch (error) {
       console.error('Failed to get unread count:', error);
       res.status(500).json({ error: 'Failed to get unread count' });
     }
   };
   

export const deleteNotification = async (req, res) => {
     const userId = req.user.id;
     const isAdmin = req.user.role === 'admin';
     const { id } = req.params;
   
     try {
       const notification = await prisma.notification.findUnique({ where: { id } });
   
       if (!notification) {
         return res.status(404).json({ error: 'Notification not found' });
       }
   
       if (!isAdmin && notification.userId !== userId) {
         return res.status(403).json({ error: 'Not authorized to delete this notification' });
       }
   
       await prisma.notification.delete({ where: { id } });
       res.status(200).json({ message: 'Notification deleted successfully' });
     } catch (error) {
       console.error('Delete failed:', error);
       res.status(500).json({ error: 'Failed to delete notification' });
     }
   };
   
/**
 * Mark a specific notification as read
 */
export const markAsRead = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  try {
    const notification = await prisma.notification.updateMany({
      where: {
        id,
        userId,
      },
      data: {
        isRead: true,
      },
    });

    if (notification.count === 0) {
      return res.status(404).json({ error: 'Notification not found or unauthorized' });
    }

    res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error('Failed to mark notification as read:', error);
    res.status(500).json({ error: 'Failed to update notification' });
  }
};
