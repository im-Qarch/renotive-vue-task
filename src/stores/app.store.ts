// Pinia Store
import type { App } from '@/types/app'
import type { Product } from '@/types/product'

export const useAppStore = defineStore({
  id: 'app',
  // you can convert this to a function
  state: (): typeof App => ({
    language: 'en' as null | string,
    selected_products: [] as typeof Product[],
  }),

  getters: {
    totalCount: state => state.selected_products.reduce((accumulator: number, product: typeof Product) => {
      return accumulator + +product.quantity || 0
    }, 0) || 0,
    totalPrice: state => state.selected_products.reduce((accumulator: number, product: typeof Product) => {
      return accumulator + (+product.price * +product.quantity) || 0
    }, 0) || 0,
  },

  actions: {
    addProduct(product: typeof Product) {
      /**
       * check if product already exist just add 1 to quantity else add product to store
       */
      if (this.selected_products.some((p: typeof Product) => p?.id === product?.id)) {
        // add +1 to quantity
        this.selected_products = this.selected_products.map((p: typeof Product) => {
          if (p?.id === product.id)
            return { ...p, ...{ quantity: +p?.quantity + 1 } }
          else return p
        })
      }
      // add new to store
      else {
        this.selected_products.push({ ...product, ...{ quantity: 1 } })
      }
    },
    removeProduct(product: typeof Product) {
      // minus -1 from quantity
      this.selected_products = this.selected_products.map((p: typeof Product) => {
        if (p?.id === product.id)
          return { ...p, ...{ quantity: +p?.quantity - 1 } }
        else return p
      // check if quantity 0 remove from list
      }).filter((p: typeof Product) => !!p?.quantity)
    },
    clearAll() {
      this.$reset()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
