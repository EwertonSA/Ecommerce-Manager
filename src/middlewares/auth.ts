import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { error } from "node:console";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/Users";
export interface authenticatedRequest extends Request{
user?:UserInstance|null
}

export const ensureAuth=(req:authenticatedRequest,res:Response,next:NextFunction)=>{
const authorizationHeader=req.headers.authorization
if(!authorizationHeader)return res.status(401).json({message:"Não Autorizado: Nenhum token encontrado!"})
const token=authorizationHeader.replace(/Bearer /, '')
jwtService.verifyToken(token,(error,decoded)=>{
if(error||typeof decoded=== undefined) return res.status(401).json({message:"Não Autorizado: Token Inválido"})
userService.findByEmail((decoded as JwtPayload).email).then(user=>{
req.user=user
next()
})
})
}