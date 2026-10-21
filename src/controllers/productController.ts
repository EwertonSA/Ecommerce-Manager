import { Request, Response } from "express";
import { productService } from "../services/productService";
import { Product } from "../models";

export const productController={
index:async(req:Request,res:Response)=>{
try {
const product=await productService.getProducts()
res.json(product)   
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message})    
}    
},
show:async(req:Request,res:Response)=>{
const {id}=req.params
try {
const productId=Number(id)
const product=await productService.findById(productId)
res.json(product)   
} catch (error) {
if(error instanceof Error)return res.status(400).json({message:error.message})  
}
},
bestSelling:async(req:Request,res:Response)=>{
try {
const products=await productService.getSelling()
return res.json(products)   
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message})
}    
},
newest:async(req:Request,res:Response)=>{
try {
const product= await productService.getnewest()
return res.json(product)
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message})    
}
}   
}