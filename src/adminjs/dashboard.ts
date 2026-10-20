import { PageHandler } from "adminjs"
import { componentLoader } from "../helpers/componentLoader"
import { Address, Category, Customer, Order, Product, User } from "../models"
import { OrderItems } from "../models/OrderItems"


export const dashboardOptions:{
handler:PageHandler
component:string
}={
component:componentLoader.add('Dashboard', './Components/Dashboard'),
handler:async(req,res,context)=>{
const categories=await Category.count()
const products=await Product.count()
const customers=await Customer.count()
const address= await Address.count()
const orders= await Order.count()
const orderItems= await OrderItems.count()
const users=await User.count({where:{role:'user'}})
res.json({
'Produtos':products, 'Categorias':categories, 'Clientes':customers, 'Endereços':address, 'Pedidos':orders, 'Produtos pedidos':orderItems,
'Usuários':users
})
}    
} 
