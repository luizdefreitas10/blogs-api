'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull:false,
        type: Sequelize.STRING(255),
        field: 'display_name',
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING(255),
      },
      image: {
        type: Sequelize.STRING(255),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
