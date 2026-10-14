import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface CategoryAttributes{
id:number
name:string
slug:string
position:number
}
export interface CategoryCreationAttributes extends Optional<CategoryAttributes,'id'>{}
export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>,CategoryAttributes{}
export const Category=sequelize.define<CategoryInstance,CategoryAttributes>('Category',{
id:{allowNull:false,autoIncrement:true,primaryKey:true,type:DataTypes.INTEGER},
    name:{allowNull:false,type:DataTypes.STRING},
    slug:{allowNull:false,type:DataTypes.STRING},
    position:{allowNull:false,type:DataTypes.INTEGER}})