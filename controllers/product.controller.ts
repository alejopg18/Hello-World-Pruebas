import type { HttpContext } from '@adonisjs/core/http'
import { getAllProducts } from '../services/product.service.js'

export default class ProductController {
  async getProducts({ response }: HttpContext) {
    const products = await getAllProducts()
    return response.ok(products)
  }
}
