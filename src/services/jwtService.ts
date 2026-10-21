import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
const secret= process.env.JWT_SECRET!
export const jwtService={
signToken:async(payload:string|object|Buffer, expiration:string)=>{
return jwt.sign(payload,secret,{expiresIn:expiration as any})
},
verifyToken:async(token:string,callbackfn:jwt.VerifyCallback)=>{
jwt.verify(token,secret,callbackfn)
}
}