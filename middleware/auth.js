const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token)
    return res.status(401).json({ mgs: 'No token, authorization denied' });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ mdg: 'token is not valid' });
  }
};
