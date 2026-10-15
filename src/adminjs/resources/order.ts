import { ResourceOptions } from "adminjs";

export const OrderResourceOptions:ResourceOptions={
navigation:'Catálogo',
editProperties:['customerId','addressId','status','totalAmount','shippingFee'],
listProperties:['customerId','addressId','status','totalAmount','shippingFee'],
filterProperties:['id','customerId','addressId','status','totalAmount','shippingFee','createdAt','updatedAt'],
showProperties:['id','customerId','addressId','status','totalAmount','shippingFee','createdAt','updatedAt']
}