const authorizationMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. You are not authorized to perform this action. Come back when you\'re an admin.' });
  }
  next();
};

module.exports = authorizationMiddleware;
