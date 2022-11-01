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

const getAllUsers = async (_req, res) => {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

module.exports = { createNewUser, getAllUsers };