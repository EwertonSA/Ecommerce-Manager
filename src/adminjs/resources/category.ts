import { ResourceOptions } from "adminjs";

export const CategoryResourceOptions: ResourceOptions={
navigation:'Catálogo',
editProperties:['name','slug','position'],
filterProperties:['name','slug','position','createdAt','updatedAt'],
listProperties:['id','name','slug','position'],
showProperties:['id','name','slug','position','createdAt','updatedAt'],
}