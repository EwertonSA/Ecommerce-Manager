import { ResourceOptions } from "adminjs";

export const orderItemsResourceOptions:ResourceOptions={
navigation:'Catálogo',
editProperties:['orderId','productId','quantity','unitPrice'],
listProperties:['orderId','productId','quantity','unitPrice'],
filterProperties:['id','orderId','productId','quantity','unitPrice','updateAt','createdAt'],
showProperties:['id','orderId','productId','quantity','unitPrice','updateAt','createdAt']   
}