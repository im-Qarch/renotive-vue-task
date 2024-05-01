/**
 * The way we import components using dynamic imports, help us to code-split bundles based on routes.
 * So it's important to always use dynamic imports when referencing components in routes.
 *
 */
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { ROUTES_NAME } from '@/utils'

const routes: Array<RouteRecordRaw> = [
  /**
   * Default routes
   */
  {
    name: ROUTES_NAME.DEFAULT,
    path: '/',
    redirect: '/product-list',
    component: () => import('@/layouts/Default.vue'),
    children: [
      /**
       * Product list
       */
      {
        name: ROUTES_NAME.PRODUCT_LIST,
        path: '/product-list',
        component: () => import('@/views/Product/Index.vue'),
      },
    ],
  },
  /**
   * Error Pages :)
   */
  // 404
  {
    name: ROUTES_NAME.NOTFOUND,
    path: '/:pathMatch(.*)*',
    component: () => import('@/layouts/404.vue'),
    meta: {
      auth: true,
    } as RouteMeta,
  },
]

export default routes
