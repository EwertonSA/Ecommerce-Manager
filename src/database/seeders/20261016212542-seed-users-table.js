'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('users',[
{id:1, name:'owner',email:'owner@email.com',password:'12345', role:'admin',created_at:new Date(),updated_at:new Date()}
])
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete("users")
  }
};
