'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("user_items","quantity",{
      type:Sequelize.DataTypes.INTEGER
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.remove("user_items","quantity")
  }
};
