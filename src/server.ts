import express from 'express'
import { sequelize } from './database'
import { adminjs, adminjsRouter } from './adminjs'
import { router } from './routes'

const app=express()
app.use(express.static('/public'))
app.use(express.json())
app.use(adminjs.options.rootPath, adminjsRouter)
app.use(router)

const PORT= process.env.PORT||3000
app.listen(PORT,()=>{
sequelize.authenticate().then(()=>{console.log('DB connected successfullty')})    
console.log(`Server started sucessfully at port ${PORT}`)})