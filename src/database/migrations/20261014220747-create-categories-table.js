'use strict';
import { type } from 'node:os';
import { DataTypes } from 'sequelize';


/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('categories',{
    id:{allowNull:false,autoIncrement:true,primaryKey:true,type:Sequelize.DataTypes.INTEGER},
    name:{allowNull:false,type:Sequelize.DataTypes.STRING},
    slug:{allowNull:false,type:Sequelize.DataTypes.STRING},
    position:{allowNull:false,type:Sequelize.DataTypes.INTEGER},
    created_at:{allowNull:false,type:Sequelize.DataTypes.DATE},
    updated_at:{allowNull:false,type:Sequelize.DataTypes.DATE}
   })
  },

  async down (queryInterface, Sequelize) {
await queryInterface.dropTable('categories')
  }
};
