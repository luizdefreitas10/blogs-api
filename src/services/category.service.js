const Sequelize = require('sequelize');
const config = require('../config/config');

const categorySchemaValidation = require('../validations/category.schema');
const { Category } = require('../models');
const errorHandler = require('../utils/errorHandler');

const sequelize = new Sequelize(config.development);

const SERVER_ERROR = 'Internal server error';

const createNewCategory = async (body) => {
  const { error } = categorySchemaValidation.validate(body);
  if (error) throw errorHandler(400, error.message);

  const transaction = await sequelize.transaction();

  try {
    const response = await Category.create({ name: body.name }, { transaction });
    transaction.commit();
    return response;
  } catch (_error) {
    transaction.rollback();
    throw errorHandler(500, SERVER_ERROR);
  }
};

const getAllCategories = async () => Category.findAll();

module.exports = { createNewCategory, getAllCategories };

// https://sequelize.org/docs/v6/other-topics/transactions/