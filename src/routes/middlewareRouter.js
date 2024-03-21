import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import authorizationMiddleware from './authorizationMiddleware.js'; // Import the authorizationMiddleware
import createValidationMiddleware from './validationMiddleware.js'; // Import the refactored validationMiddleware

const router = express.Router();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

const adminAuthMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};
router.use(authMiddleware);
router.use('/admin', adminAuthMiddleware);

router.use('/admin/some-route', authorizationMiddleware); // Attach authorizationMiddleware to a specific route

// Room validation schema
const roomTypeValidationSchema = {
  name: {
    type: 'string',
    required: true
  },
  description: 'string',
  price: 'number',
  amenities: 'string',
  image: 'string',
  isAvailable: 'boolean'
};

const validateRoomType = createValidationMiddleware(roomTypeValidationSchema);

router.post('/api/v1/room-types', validateRoomType, asyncHandler(roomTypeController.createRoomType));

export default router;
