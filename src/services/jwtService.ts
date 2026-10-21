import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
export const jwtService={
signToken:async(payload:string|object|Buffer, expiration:string)=>{
const secret= process.env.JWT_SECRET!
return jwt.sign(payload,secret,{expiresIn:expiration as any})
}
}