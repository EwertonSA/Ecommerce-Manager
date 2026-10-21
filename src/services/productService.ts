import { fn, col, Sequelize } from "sequelize"
import { Product } from "../models"

export const productService={
getProducts:async()=>{
const product=await Product.findAll()
return product    
},
findById:async(id:number)=>{
const product=await Product.findByPk(id,{attributes:['id','name','description','price',['stock_quantity','stockQuantity'],'thumbnail']})
return product
},
getSelling:async()=>{
const products = await Product.findAll({
attributes:['id','name','description','price',['stock_quantity','stockQuantity'],'thumbnail',
[fn('COALESCE',fn("SUM", col('orderItems.quantity')),0),'totalSold']],
include:[{association:'orderItems', attributes:[]}], group:['Product.id'], 
order:[[fn("COALESCE", fn('SUM', col('orderItems.quantity')),0),'DESC']],
limit:5, subQuery: false
})
return products
},
getnewest:async()=>{
const products= await Product.findAll({limit:10,order:[['createdAt','DESC']]})
return products
} 
}
