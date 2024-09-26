const adminAuth = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next(); // หากเป็น Admin ให้ดำเนินการต่อ
    } else {
      res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  
  module.exports = adminAuth;
  