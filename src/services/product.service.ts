import type { AxiosRequestConfig } from 'axios'
import service from './service'

class ProductService {
  /**
   * @description get product list
   */
  public getProducts(params: AxiosRequestConfig = {}) {
    return (
      service({
        url: '/products',
        method: 'GET',
        params,
      }) ?? null
    )
  }
}

export default new ProductService()
