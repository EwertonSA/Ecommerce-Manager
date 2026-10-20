import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { getPagination } from "../helpers/getPagination";

export const categoriesController={
index: async(req:Request,res:Response)=>{
const [page,perPage]=getPagination(req.query)
try {
const paginatedCategories=await categoryService.findAllPaginated(page,perPage)  
return res.json(paginatedCategories)  
} catch (error) {
if(error instanceof Error) return res.status(400).json({message:error.message}) 
}
}}