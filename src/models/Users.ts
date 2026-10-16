import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"
import bcrypt from 'bcrypt'
export interface UserAttributes{
id:number
name:string
email:string
password:string
role:'admin'|'user'
}
export interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}
export interface UserInstance extends Model<UserAttributes,UserCreationAttributes>,UserAttributes{}
export const User=sequelize.define<UserInstance,UserAttributes>('User',{
id:{allowNull:false,primaryKey:true,autoIncrement:true,type:DataTypes.INTEGER},
name:{allowNull:false,type:DataTypes.STRING},
email:{allowNull:false,unique:true,type:DataTypes.STRING},
password:{allowNull:false,type:DataTypes.STRING},
role:{allowNull:false, type:DataTypes.STRING,validate:{isIn:[['admin','user']]}},
},{
hooks:{beforeSave:async(user)=>{if(user.isNewRecord||user.changed('password')){
user.password=await bcrypt.hash(user.password.toString(),10)
}}}
})