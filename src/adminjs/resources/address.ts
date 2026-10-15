import { ResourceOptions } from "adminjs";

export const addressResourceOptions:ResourceOptions={
navigation:"Catálogo",
editProperties:['customerId','street','number','complement','neighborhood','city','state','zipCode','country','isDefault'],
listProperties:['customerId','street','number','complement','neighborhood','city','state','zipCode','country','isDefault'],
filterProperties:['id','street','number','complement','neighborhood','city','state','zipCode','country','isDefault','createdAt','updatedAt'],
showProperties:['id','street','number','complement','neighborhood','city','state','zipCode','country','isDefault','createdAt','updatedAt']}