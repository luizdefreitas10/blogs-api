module.exports = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define(
    'PostCategory',
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },

      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories',
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      {
        foreignKey: 'category_id',
        otherKey: 'post_id',
        as: 'categories',
        through: PostCategory,
      },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      {
        foreignKey: 'post_id',
        otherKey: 'category_id',
        as: 'posts',
        through: PostCategory,
      },
    );
  };

  return PostCategory;
};