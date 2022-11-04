const Category = (Sequelize, DataTypes) => {
  const categoryModel = Sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      underscored: true,
      timestamps: false,
    },
  );

  categoryModel.associate = (models) => {
    categoryModel.hasMany(models.PostCategory, { foreignKey: 'category_id', as: 'categories' });
  };

  return categoryModel;
};

module.exports = Category;