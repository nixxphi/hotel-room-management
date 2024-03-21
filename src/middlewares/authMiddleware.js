import jwt from 'jsonwebtoken.js';
import User from '../models/user.js';

const authMiddleware = async (req, res, next) => {
  try {
    // To get token from request header
    const token = req.headers.authorization.split(' ')[1];
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Checking if user exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    // Attaching user object to request
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

const adminAuthMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' + 'Dey your dey'});
  }
  next();
};

export default { authMiddleware, adminAuthMiddleware };
