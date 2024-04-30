import type { Plugin } from 'vue'
import store from '@/stores/store'

const StorePlugin: Plugin = {
  install(app) {
    app.use(store)
  },
}

export default StorePlugin
