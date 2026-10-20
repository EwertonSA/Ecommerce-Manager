import AdminJS from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import AdminJSExpress from '@adminjs/express'
import { adminjsResources } from "./resources";
import { componentLoader } from "../helpers/componentLoader";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";
AdminJS.registerAdapter(AdminJSSequelize)
export const adminjs= new AdminJS({databases:[sequelize],rootPath:'/admin',
resources:adminjsResources,
componentLoader,
branding:brandingOptions,
locale:locale,
dashboard:dashboardOptions
}) 
adminjs.watch()
//export const adminjsRouter=AdminJSExpress.buildRouter(adminjs)
export const adminjsRouter=AdminJSExpress.buildAuthenticatedRouter(adminjs,authenticationOptions,null,
{resave:false, saveUninitialized:false})
