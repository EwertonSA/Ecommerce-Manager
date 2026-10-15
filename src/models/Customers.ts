import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface CustomerAttributes{
id:number
name:string
email:string
password:string
phone:string
}
export interface CustomersCreationAttributes extends Optional<CustomerAttributes,'id'>{}
export interface CustomerInstance extends Model<CustomerAttributes,CustomersCreationAttributes>,CustomerAttributes{}
export const Customer=sequelize.define<CustomerInstance,CustomerAttributes>('Customer',{
id:{allowNull:false,autoIncrement:true,primaryKey:true,type:DataTypes.INTEGER},
name:{allowNull:false,type:DataTypes.STRING},
email:{allowNull:false,unique:true,type:DataTypes.STRING},
password:{allowNull:false,type:DataTypes.STRING},
phone:{allowNull:false,type:DataTypes.STRING},
})