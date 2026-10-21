import { Request, Response } from "express";
import { userService } from "../services/userService";
import { jwtService } from "../services/jwtService";

export const userController={
register:async(req:Request,res:Response)=>{
const {name,email,password}=req.body
try {
const userExist=await userService.findByEmail(email)
if(userExist) throw new Error('Este e-mail já está cadastrado.')
const user=await userService.create({name,email,password,role:'user'})
return res.status(201).json(user)    
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message})
}
},
login:async(req:Request,res:Response)=>{
const {email,password}=req.body
try {
const user=await userService.findByEmail(email)
if(!user)return res.status(404).json({message:"E-mail não cadastrado"})
user.checkPassword(password,async(error,isSame)=>{
if(error)return res.status(400).json({message:error.message})
if(!isSame) return res.status(401).json({message:"Senha inválida"})
const payload={id:user.id,name:user.name,email:user.email}
const token=await jwtService.signToken(payload,'1d')
return res.json({authenticated:true,...payload,token})
})
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message})
}
}
}