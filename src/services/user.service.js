const Sequelize = require('sequelize');
const config = require('../config/config');

const userSchemaValidation = require('../validations/user.schema');
const { createToken } = require('../utils/jwt');
const errorHandler = require('../utils/errorHandler');
const { User } = require('../models');

const sequelize = new Sequelize(config.test);

const ALREADY_REGISTERED = 'User already registered';
const INTERNAL_ERROR = 'Internal server error';

const createNewUser = async (body) => {
  const { displayName, email, password, image = null } = body;
  const { error } = userSchemaValidation.validate(body);
  if (error) throw errorHandler(400, error.message);

  const findOneUser = await User.findOne({ where: { email } });
  if (findOneUser) throw errorHandler(409, ALREADY_REGISTERED);

  const transaction = await sequelize.transaction();

  try {
    await User.create({ displayName, email, password, image }, { transaction });
    await transaction.commit();
    return createToken({ displayName, email, image });
  } catch (_error) {
    await transaction.rollback();
    throw errorHandler(500, INTERNAL_ERROR);
  }
};

const getAllUsers = async () => User
  .findAll({ attributes: ['id', 'displayName', 'email', 'image'] });

module.exports = { createNewUser, getAllUsers };