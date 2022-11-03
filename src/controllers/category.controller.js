const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
  try {
    const response = await categoryService.createNewCategory(req.body);
    return res.status(201).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const response = await categoryService.getAllCategories();
  return res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { createNewCategory, getAllCategories };