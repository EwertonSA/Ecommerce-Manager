'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
async up (queryInterface, Sequelize) {
await queryInterface.createTable('products',{
id:{allowNull:false, autoIncrement:true, primaryKey:true,type:Sequelize.DataTypes.INTEGER},
name:{allowNull:false,type:Sequelize.DataTypes.STRING},
slug:{allowNull:false, unique:true, type:Sequelize.DataTypes.STRING},
sku:{allowNull:false, unique:true, type:Sequelize.DataTypes.STRING},
description:{allowNull:false,type:Sequelize.DataTypes.TEXT},
price:{allowNull:false, type:Sequelize.DataTypes.INTEGER},
stock_quantity:{allowNull:false,type:Sequelize.DataTypes.INTEGER},
category_id:{allowNull:false, type:Sequelize.DataTypes.INTEGER,
references:{model:'categories',key:'id'}, onUpdate:'CASCADE', onDelete:'RESTRICT'},
thumbnail:{allowNull:true,type:Sequelize.DataTypes.STRING},
created_at:{allowNull:false,type:Sequelize.DataTypes.DATE},
updated_at:{allowNull:false,type:Sequelize.DataTypes.DATE}})},

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('products')
  }
};
