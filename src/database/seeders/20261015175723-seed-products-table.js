'use strict';
/** @type {import('sequelize-cli').Migration} */
export default{
  async up (queryInterface, Sequelize) {
const [categories]=await queryInterface.sequelize.query('SELECT id FROM categories;')
   await queryInterface.bulkInsert('products',[
  {
        id: 1,
        name: 'Smartphone X',
        slug: 'smartphone-x',
        sku: 'ELEC-SMART-001',
        description: 'Smartphone with a 6.5-inch OLED screen, 128GB of storage, and a dual camera.',
        price: 250000,
        stock_quantity: 15,
        category_id: 1,
        thumbnail: 'https://via.placeholder.com/150',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Notebook Pro 14',
        slug: 'notebook-pro-14',
        sku: 'COMP-NOTE-002',
        description: 'High-performance laptop with an octa-core processor, 16GB of RAM, and a 512GB SSD.',
        price: 550000, 
        stock_quantity: 8,
        category_id: 2,
        thumbnail: 'https://via.placeholder.com/150',
        created_at: new Date(),
        updated_at: new Date()
      }
   ],{})
  },
  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('products',null,{})
  }
};
