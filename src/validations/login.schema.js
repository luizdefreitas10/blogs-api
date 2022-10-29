const joi = require('joi');

const REQUIRED_FIELDS = 'Some required fields are missing';
const INVALID_FIELDS = 'Invalid fields';

const loginSchemaValidation = joi.object({
  email: joi.string().email().required().messages({
    'any.required': REQUIRED_FIELDS,
    'string.empty': REQUIRED_FIELDS,
    'string.email': INVALID_FIELDS,
  }),
  password: joi.string().required().messages({
    'any.required': REQUIRED_FIELDS,
    'string.empty': REQUIRED_FIELDS,
  }),
});

module.exports = loginSchemaValidation;