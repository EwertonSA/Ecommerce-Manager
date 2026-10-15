import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

export interface AddressAttributes{
id:number
customerId:number
street:string
number:number
complement:string
neighborhood:string
city:string
state:string
zipCode:string
country:string
isDefault:boolean    
}
export interface AddressCreationAttributes extends Optional<AddressAttributes,'id'>{}
export interface AddressInterface extends Model<AddressAttributes,AddressCreationAttributes>,AddressAttributes{}
export const Address=sequelize.define<AddressInterface,AddressAttributes>('Address',{
id:{allowNull:false,autoIncrement:true,primaryKey:true,type:DataTypes.INTEGER},
customerId:{allowNull:false,references:{model:'customers',key:'id'},onUpdate:'CASCADE',onDelete:"RESTRICT",
type:DataTypes.INTEGER},
street:{allowNull:false,type:DataTypes.STRING},
number:{allowNull:false,type:DataTypes.INTEGER},
complement:{allowNull:true,type:DataTypes.STRING},
neighborhood:{allowNull:false,type:DataTypes.STRING},
city:{allowNull:false,type:DataTypes.STRING},
state:{allowNull:false,type:DataTypes.STRING},
zipCode:{allowNull:false,type:DataTypes.STRING},
country:{allowNull:false,type:DataTypes.STRING},
isDefault:{allowNull:false,type:DataTypes.BOOLEAN}},
{tableName:'address'}
)