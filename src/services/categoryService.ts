import { Category } from "../models"

export const categoryService={
findAllPaginated:  async(page:number,perPage:number)=>{   

const offset=(page-1)*perPage
 const {rows,count}=await Category.findAndCountAll({attributes:['id','name','position'],
order:[['position','ASC']],limit:perPage,offset})
return{categories:rows,page:page,perPage:perPage,total:count}
},
findById:async(id:string)=>{
const category=await Category.findByPk(id,{
attributes:['id','name'], include:{association:'products',
attributes:['id','name','price',['stock_quantity','stockQuantity'],'description','thumbnail']}   
})
return category
}
}