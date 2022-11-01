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

  return categoryModel;
};

module.exports = Category;