import { ResourceOptions } from "adminjs";

export const ProductResourceOptions:ResourceOptions={
navigation:"Catálogo",
editProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','uploadThumbnail'],
filterProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','thumbnail','updatedAt', 'createdAt'],
listProperties:['name', 'description', 'price', 'stockQuantity','thumbnail'],
showProperties:['name','slug','sku', 'description', 'price', 'stockQuantity','categoryId','thumbnail','updatedAt', 'createdAt']  
}