'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
async up (queryInterface, Sequelize) {
await queryInterface.createTable('order_items',{
id:{allowNull:false,primaryKey:true,autoIncrement:true,type:Sequelize.DataTypes.INTEGER},
order_id:{allowNull:false,references:{model:'orders',key:'id'},onUpdate:'CASCADE',onDelete:"RESTRICT",
type:Sequelize.DataTypes.INTEGER},
product_id:{allowNull:false,references:{model:'products',key:'id'},onUpdate:'CASCADE',onDelete:'RESTRICT',
type:Sequelize.DataTypes.INTEGER},
quantity:{allowNull:false,type:Sequelize.DataTypes.INTEGER},
unit_price:{allowNull:false,type:Sequelize.DataTypes.DECIMAL},
created_at:{allowNull:false,type:Sequelize.DataTypes.DATE},
updated_at:{allowNull:false,type:Sequelize.DataTypes.DATE}
})},

async down (queryInterface, Sequelize) {
await queryInterface.dropTable('order_items')}}
