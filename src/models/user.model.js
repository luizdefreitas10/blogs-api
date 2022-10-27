module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    image: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  },
  );

  return User;
};