import { Product } from "../models"

export const productService={
getProducts:async()=>{
const product=await Product.findAll()
return product    
},
findById:async(id:number)=>{
const product=await Product.findByPk(id,{attributes:['id','name','description','price',['stock_quantity','stockQuantity'],'thumbnail']})
return product
}
}