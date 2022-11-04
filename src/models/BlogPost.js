const BlogPost = (Sequelize, DataTypes) => {
  const BlogPostModel = Sequelize.define(
    'BlogPost',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
      timestamps: false,
    },
  );

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    BlogPostModel.hasMany(models.PostCategory, { foreignKey: 'post_id', as: 'posts' });
  };

  return BlogPostModel;
};

module.exports = BlogPost;