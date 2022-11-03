const joi = require('joi');

const categorySchemaValidation = joi.object({
  name: joi.string().min(2).required(),
});

module.exports = categorySchemaValidation;