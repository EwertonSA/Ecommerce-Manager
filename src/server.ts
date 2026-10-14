import express from 'express'
import { sequelize } from './database'
import { adminjs, adminjsRouter } from './adminjs'

const app=express()
app.use(adminjs.options.rootPath, adminjsRouter)
app.use(express.static('/public'))
const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
sequelize.authenticate().then(()=>{console.log('DB connected successfullty')})    
console.log(`Server started sucessfully at port ${PORT}`)})