import { ResourceOptions } from "adminjs";

export const UserResourceOptions:ResourceOptions={
navigation:'Administrative',
properties:{password:{type:'password'},
role:{availableValues:[{value:'admin',label:'Administrative'},{value:'user', label:'user'}]}},
editProperties:['name','email','password','role'],
listProperties:['name','email','password','role'],
showProperties:['id','name','email','password','role','createdAt','updatedAt'],
filterProperties:['id','name','email','password','role','createdAt','updatedAt']   
}