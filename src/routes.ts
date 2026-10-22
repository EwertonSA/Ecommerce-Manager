import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { productController } from './controllers/productController'
import { userController } from './controllers/userController'
import { ensureAuth } from './middlewares/auth'
export const router= express.Router()
//Categories
router.get('/categories',categoriesController.index)
router.get('/categories/:id',categoriesController.show)
//products
router.get('/products',ensureAuth,productController.index)
router.get('/products/selled',ensureAuth,productController.bestSelling)
router.get('/products/newest',ensureAuth,productController.newest)
router.get('/products/search',ensureAuth,productController.search)
router.get('/products/:id',ensureAuth,productController.show)

router.get('/users/current',ensureAuth,userController.show)
router.put('/users/current',ensureAuth,userController.update)

router.post('/auth/register',userController.register)
router.post("/auth/login",userController.login)