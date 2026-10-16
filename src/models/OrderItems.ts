import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface OrderItemsAttributes{
id:number
orderId:number
productId:number
quantity:number
unitPrice:number
}
export interface OrderItemsCreationAttributes extends Optional<OrderItemsAttributes,'id'>{}
export interface OrderInstance extends Model<OrderItemsAttributes,OrderItemsCreationAttributes>,OrderItemsAttributes{}
export const OrderItems=sequelize.define<OrderInstance,OrderItemsAttributes>('OrderItems',{
id:{allowNull:false,primaryKey:true,autoIncrement:true,type:DataTypes.INTEGER},
orderId:{allowNull:false,references:{model:'orders',key:'id'},onUpdate:'CASCADE',onDelete:"RESTRICT",
type:DataTypes.INTEGER},
productId:{allowNull:false,references:{model:'products',key:'id'},onUpdate:'CASCADE',onDelete:'RESTRICT',
type:DataTypes.INTEGER},
quantity:{allowNull:false,type:DataTypes.INTEGER},
unitPrice:{allowNull:false,type:DataTypes.DECIMAL}   
})