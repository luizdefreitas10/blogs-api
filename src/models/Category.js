module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define(
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

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, { foreignKey: 'category_id', as: 'categories' });
  };

  return Category;
};