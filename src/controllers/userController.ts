import { Request, Response } from "express";
import { userService } from "../services/userService";

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
}
}