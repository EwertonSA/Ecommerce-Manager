import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { productController } from './controllers/productController'
export const router= express.Router()
//Categories
router.get('/categories',categoriesController.index)
router.get('/categories/:id',categoriesController.show)
//products
router.get('/products',productController.index)
router.get('/products/:id',productController.show)