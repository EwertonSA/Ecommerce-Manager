'use strict';

/** @type {import('sequelize-cli').Migration} */
export default{
async up (queryInterface, Sequelize) {
await queryInterface.createTable('address',{
id:{allowNull:false,autoIncrement:true,primaryKey:true,type:Sequelize.DataTypes.INTEGER},
customer_id:{allowNull:false,references:{model:'customers',key:'id'},onUpdate:'CASCADE',onDelete:"RESTRICT",
type:Sequelize.DataTypes.INTEGER},
street:{allowNull:false,type:Sequelize.DataTypes.STRING},
number:{allowNull:false,type:Sequelize.DataTypes.INTEGER},
complement:{allowNull:true,type:Sequelize.DataTypes.STRING},
neighborhood:{allowNull:false,type:Sequelize.DataTypes.STRING},
city:{allowNull:false,type:Sequelize.DataTypes.STRING},
state:{allowNull:false,type:Sequelize.DataTypes.STRING},
zip_code:{allowNull:false,type:Sequelize.DataTypes.STRING},
country:{allowNull:false,type:Sequelize.DataTypes.STRING},
is_default:{allowNull:false,type:Sequelize.DataTypes.BOOLEAN},
created_at:{allowNull:false,type:Sequelize.DataTypes.DATE},
updated_at:{allowNull:false,type:Sequelize.DataTypes.DATE}
})
},
async down (queryInterface, Sequelize) {
await queryInterface.dropTable('address')
}
};
