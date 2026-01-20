/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProductController from '../controllers/product.controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/api/products', [ProductController, 'getProducts'])
