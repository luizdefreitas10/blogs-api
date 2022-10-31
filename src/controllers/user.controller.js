const { userService } = require('../services');

const createNewUser = async (req, res) => {
  try {
    const token = await userService.createNewUser(req.body);
    console.log(token);
    res.status(201).json({ token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { createNewUser };