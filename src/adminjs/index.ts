import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import AdminJSExpress from '@adminjs/express'
import { adminjsResources } from "./resources";
import { componentLoader } from "../helpers/componentLoader";
import { Address, Category, Customer, Order, Product, User } from "../models";
import bcrypt from 'bcrypt'
import { locale } from "./locale";
import { OrderItems } from "../models/OrderItems";
AdminJS.registerAdapter(AdminJSSequelize)
export const adminjs= new AdminJS({databases:[sequelize],rootPath:'/admin',
resources:adminjsResources,
componentLoader,
branding:{companyName:'ESA LTDA',logo:'/esa.webp',
theme:{colors:{primary100:'#f50',primary80:"#f40",primary60:"#f30",primary40:'#f20',primary20:"#f10"
,grey100:'#151515',grey80:"#333333",grey60:'#4d4d4d',grey40:"#666666",grey20:'#dddddd',
filterBg:'#333333',accent:'#151515',hoverBg:'#151515'}}},
locale:locale,
dashboard:{component:componentLoader.add('Dashboard', './Components/Dashboard'),
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
}) 
adminjs.watch()
//export const adminjsRouter=AdminJSExpress.buildRouter(adminjs)
export const adminjsRouter=AdminJSExpress.buildAuthenticatedRouter(adminjs,{
authenticate:async(email,password)=>{
const user=await User.findOne({where:{email}})
if(user&&user.role==='admin'){
const matched=await bcrypt.compare(password,user.password)
if(matched) return user
}
return false
},cookiePassword:'password'},null,{resave:false, saveUninitialized:false})
