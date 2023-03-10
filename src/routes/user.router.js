const express = require('express');
const { userController } = require('../controllers');
const tokenValidationMiddleware = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', userController.createNewUser);
router.get('/', tokenValidationMiddleware, userController.getAllUsers);
router.get('/:id', tokenValidationMiddleware, userController.getUserById);

module.exports = router;