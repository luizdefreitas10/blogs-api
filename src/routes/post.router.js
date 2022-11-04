const express = require('express');
const { postController } = require('../controllers');
const tokenValidationMiddleware = require('../middlewares/tokenValidation');

const router = express.Router();

router.get('/', tokenValidationMiddleware, postController.getAllPosts);
router.post('/', tokenValidationMiddleware, postController.createNewPost);

module.exports = router;