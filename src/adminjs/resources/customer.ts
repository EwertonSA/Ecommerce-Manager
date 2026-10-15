import { ResourceOptions } from "adminjs";

export const CustomerResourceOptions:ResourceOptions={
navigation:'Catálogo',
editProperties:['name','email','password','phone'],
showProperties:['id','name','email','password','phone','createdAt','updatedAt'],
filterProperties:['id','name','email','password','phone','createdAt','updatedAt'],
listProperties:['name','email','password','phone'],
}