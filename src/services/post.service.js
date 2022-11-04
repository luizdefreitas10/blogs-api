const Sequelize = require('sequelize');
const config = require('../config/config');

const { BlogPost, User, Category, PostCategory } = require('../models');
const errorHandler = require('../utils/errorHandler');

const postSchemaValidation = require('../validations/post.schema');

const POST_ID = 'post_id';
const CATEGORY_ID = 'category_id';
const NOT_FOUND = 'one or more "categoryIds" not found';
const SERVER_ERROR = 'Internal server error';

  const createNewPost = async (body, userId) => {
    console.log(userId);
    const { error } = postSchemaValidation.validate(body);
    if (error) throw errorHandler(400, error.message);

    const categories = await Category.findAll({ where: { id: body.categoryIds } });

    if (categories.length !== body.categoryIds.length) {
      throw errorHandler(400, NOT_FOUND);
    }

    const sequelize = new Sequelize(config.development);
    const transaction = await sequelize.transaction();

    try {
      const newPost = await BlogPost.create({ ...body, userId }, { transaction });

      await PostCategory.bulkCreate(
        body.categoryIds.map((categoryId) => (
          { [CATEGORY_ID]: categoryId, [POST_ID]: newPost.id })), { transaction },
      );

      await transaction.commit(); return newPost;
    } catch (error) {
      console.log(error.message);
      await transaction.rollback(); throw errorHandler(500, error.message);
    }
  };

const getAllPosts = async () => BlogPost
  .findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

module.exports = { createNewPost, getAllPosts };