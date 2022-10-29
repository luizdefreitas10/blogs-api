const loginSchemaValidation = require('../validations/login.schema');
const { createToken } = require('../utils/jwt');
const errorHandler = require('../utils/errorHandler');
const { User } = require('../models');

const INVALID_FIELDS = 'Invalid fields';

const loginValidation = async ({ email, password }) => {
  const { error, value } = loginSchemaValidation.validate({ email, password });
  if (error) throw errorHandler(400, error.message);

  const findOneUser = await User.findOne({ where: { email, password } });
  if (findOneUser === null) throw errorHandler(400, INVALID_FIELDS);
  const { password: _, ...payload } = value;

  return createToken(payload);
};

module.exports = { loginValidation };