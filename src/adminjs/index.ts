import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import AdminJSExpress from '@adminjs/express'
import { adminjsResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize)
export const adminjs= new AdminJS({databases:[sequelize],rootPath:'/admin',
resources:adminjsResources,
branding:{companyName:'ESA LTDA',logo:'/esa.webp',
theme:{colors:{primary100:'#f50',primary80:"#f40",primary60:"#f30",primary40:'#f20',primary20:"#f10"
,grey100:'#151515',grey80:"#333333",grey60:'#4d4d4d',grey40:"#666666",grey20:'#dddddd',
filterBg:'#333333',accent:'#151515',hoverBg:'#151515'}}}}) 
export const adminjsRouter=AdminJSExpress.buildRouter(adminjs)