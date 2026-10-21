import { DataTypes, Model, ModelStatic, Optional } from "sequelize"
import { sequelize } from "../database"
import bcrypt from 'bcrypt'
import { error } from "node:console"
export interface UserAttributes{
id:number
name:string
email:string
password:string
role:'admin'|'user'
}
export interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}
export interface UserInstance extends Model<UserAttributes,UserCreationAttributes>,UserAttributes
{checkPassword(password: string, callbackfn: (error: Error | undefined, isSame: boolean) => void):void}
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
})as ModelStatic<UserInstance>&{prototype:UserInstance&UserInstance}
User.prototype.checkPassword = function(this:UserInstance,password: string, callbackfn: (error: Error | undefined, isSame: boolean) => void) {
bcrypt.compare(password, this.password, (error, isSame) => {
if (error) {
callbackfn(error, false);
} else {
callbackfn(undefined, isSame);
}
});
};