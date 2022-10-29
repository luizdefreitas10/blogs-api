const { loginService } = require('../services');

const loginValidation = async (req, res) => {
  try {
    const token = await loginService.loginValidation(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  loginValidation,
};