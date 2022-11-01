const jwt = require('jsonwebtoken');

require('dotenv/config');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const tokenValidation = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { createToken, tokenValidation };