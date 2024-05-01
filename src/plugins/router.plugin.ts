import type { Plugin } from 'vue'
import { router } from '@/router/router'

const RouterPlugin: Plugin = {
  install(app) {
    if (!app.config.globalProperties.$router)
      app.use(router)
  },
}

export default RouterPlugin
