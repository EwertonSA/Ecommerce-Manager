import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { productController } from './controllers/productController'
import { userController } from './controllers/userController'
export const router= express.Router()
//Categories
router.get('/categories',categoriesController.index)
router.get('/categories/:id',categoriesController.show)
//products
router.get('/products',productController.index)
router.get('/products/selled',productController.bestSelling)
router.get('/products/newest',productController.newest)
router.get('/products/search',productController.search)
router.get('/products/:id',productController.show)

router.post('/auth/register',userController.register)