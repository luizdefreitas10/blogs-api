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
        field: 'post_id',
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        field: 'category_id',
      },
    },
    {
      underscored: true,
      timestamps: false,
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      {
        foreignKey: 'category_id',
        through: PostCategory,
      },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      {
        foreignKey: 'post_id',
        through: PostCategory,
      },
    );
  };

  return PostCategory;
};