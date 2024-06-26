/**
 * This file is not a real Vue plugin, instead its a plugin that registers other Vue plugins :)
 * Use the app instance to register any custom plugins inside the 'install' method.
 */
import type { App } from 'vue'
import { createHead } from '@unhead/vue'
import i18n from './i18n.plugin'
import StorePlugin from './store.plugin'
import RouterPlugin from './router.plugin'
import IconPlugin from './icon.plugin'

const head = createHead()

export default {
  install(app: App): void {
    app.use(RouterPlugin)
    app.use(StorePlugin)
    app.use(i18n)
    app.use(head)
    app.component('Icon', IconPlugin)
  },
}
