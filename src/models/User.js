const User = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
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
    underscored: true,
    timestamps: false,
    tableName: 'users',
  },
  );

  return UserModel;
};

module.exports = User;