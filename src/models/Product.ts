import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface ProductAttributes{
id:number
name:string
slug:String
sku:string
description:Text
price:number
stockQuantity:number
categoryId:number
thumbnail:string    
}
export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'|'thumbnail'>{}
export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>,ProductAttributes{}
export const Product=sequelize.define<ProductInstance,ProductAttributes>('Product',{
id:{allowNull:false, autoIncrement:true, primaryKey:true,type:DataTypes.INTEGER},
name:{allowNull:false,type:DataTypes.STRING},
slug:{allowNull:false, unique:true, type:DataTypes.STRING},
sku:{allowNull:false, unique:true, type:DataTypes.STRING},
description:{allowNull:false,type:DataTypes.TEXT},
price:{allowNull:false, type:DataTypes.INTEGER},
stockQuantity:{allowNull:false,type:DataTypes.INTEGER},
categoryId:{allowNull:false, type:DataTypes.INTEGER,
references:{model:'categories',key:'id'}, onUpdate:'CASCADE', onDelete:'RESTRICT'},
thumbnail:{allowNull:true,type:DataTypes.STRING},
})