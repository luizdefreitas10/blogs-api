const { tokenValidation } = require('../utils/jwt');

const INVALID_TOKEN = 'Expired or invalid token';
const TOKEN_NOT_FOUND = 'Token not found';

const tokenValidationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: TOKEN_NOT_FOUND });
  }

  try {
    console.log(tokenValidation(authorization));
    tokenValidation(authorization);
  } catch (_error) {
    return res.status(401).json({ message: INVALID_TOKEN });
}

  next();
};

module.exports = tokenValidationMiddleware;