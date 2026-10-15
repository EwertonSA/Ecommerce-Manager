import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface OrderAttributes{
id:number
customerId:number
addressId:number
status:string
totalAmount:string
shippingFee:string    
}
export interface OrderCreationAttributes extends Optional<OrderAttributes,'id'>{}
export interface OrderInstance extends Model<OrderAttributes,OrderCreationAttributes>,OrderAttributes{}
export const Order=sequelize.define<OrderInstance,OrderAttributes>('Order',{
id:{allowNull:false,autoIncrement:true,primaryKey:true,type:DataTypes.INTEGER},
customerId:{allowNull:false,references:{model:'customers',key:'id'},onUpdate:"CASCADE",onDelete:'RESTRICT',
type:DataTypes.INTEGER},
addressId:{allowNull:false,references:{model:'address',key:'id'},onUpdate:'CASCADE',onDelete:'RESTRICT',
type:DataTypes.INTEGER},
status:{allowNull:false,type:DataTypes.STRING},
totalAmount:{allowNull:false,type:DataTypes.INTEGER},
shippingFee:{allowNull:false,type:DataTypes.INTEGER},    
})