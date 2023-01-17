'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("Users", 'password_digest',{
      type:Sequelize.DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'password_digest')
  }
};
