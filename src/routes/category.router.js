const express = require('express');
const { categoryController } = require('../controllers');
const tokenValidationMiddleware = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidationMiddleware, categoryController.createNewCategory);

module.exports = router;