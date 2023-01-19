'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  //create an arr of all my item ids and populate  

    let arr = []
    let i = 1 
    while(i <= 20){
        arr.push({item_id: i})
        i++
    }

   await queryInterface.bulkInsert('items', arr)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
