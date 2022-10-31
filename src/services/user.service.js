const userSchemaValidation = require('../validations/user.schema');
const { createToken } = require('../utils/jwt');
const erroHandler = require('../utils/errorHandler');
const { User } = require('../models');

const ALREADY_REGISTERED = 'User already registered';

const createNewUser = async (body) => {
  const { error } = userSchemaValidation.validate(body);
  if (error) throw erroHandler(400, error.message);

  const findOneUser = await User.findOne({ where: { email: body.email } });
  if (findOneUser) throw erroHandler(409, ALREADY_REGISTERED);

  const { displayName, email, password, image = '' } = body;

  User.create({ displayName, email, password, image });

  return createToken({ displayName, email, image });
};

module.exports = { createNewUser };