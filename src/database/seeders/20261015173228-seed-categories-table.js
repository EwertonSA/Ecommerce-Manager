'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
async up(queryInterface, Sequelize) {
await queryInterface.bulkInsert('categories', [
{ id: 1, name: "Eletronics", slug: 'eletronics', position: 1, created_at: new Date(), updated_at: new Date() },
{ id: 2, name: "Computing", slug: 'computing', position: 2, created_at: new Date(), updated_at: new Date() },
{ id: 3, name: 'Home', slug: 'home', position: 4, created_at: new Date(), updated_at: new Date() },
{ id: 4, name: 'Clothing', slug: 'clothing', position: 3, created_at: new Date(), updated_at: new Date() },
{ id: 5, name: 'Sports', slug: 'sports', position: 5, created_at: new Date(), updated_at: new Date() }
], {});
},
async down(queryInterface, Sequelize) {
await queryInterface.bulkDelete('categories', null, {});
}
};