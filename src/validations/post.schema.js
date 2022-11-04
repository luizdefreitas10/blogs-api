const joi = require('joi');

const REQUIRED_FIELDS = 'Some required fields are missing';
const NOT_FOUND = 'one or more "categoryIds" not found';

const postSchemaValidation = joi.object({
  title: joi.string().min(2).required(),
  content: joi.string().min(5).required(),
  categoryIds: joi.array().items(joi.number()).min(1).required()
    .messages({ 'array.min': NOT_FOUND }),
}).messages({
  'any.required': REQUIRED_FIELDS,
  'string.empty': REQUIRED_FIELDS,
});

module.exports = postSchemaValidation;