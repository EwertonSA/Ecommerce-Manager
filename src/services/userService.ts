import { User } from "../models"
import { UserCreationAttributes } from "../models/Users"

export const userService={
findByEmail:async(email:string)=>{
const user= await User.findOne({where:{email}})
return user
},
create:async(attributes:UserCreationAttributes)=>{
 const user=await User.create(attributes)
 return user  
},
update:async(id:number, attributes:{name:string, email:string})=>{
const [rows,updated]=await User.update(attributes,{where:{id},returning:true})
return updated[0]
},
updatePassword:async(id:number,password:string)=>{
const[rows,updated]=await User.update({password},{where:{id},individualHooks:true,returning:true})
return updated[0]
}
}