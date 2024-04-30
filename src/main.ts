/**
 * !This File might remain like this after any development or even the end of project :)
 * Cause we provide:
 * - PluginsInstaller for import any script or dependency
 * - App.vue for ant basic head setup
 * - index.css for manage any styles
 */
import { createApp } from 'vue'
import App from './App.vue'
import PluginsInstaller from '@/plugins'
import './assets/styles/index.css'
import 'uno.css'

const VueApp = createApp(App)
VueApp.use(PluginsInstaller)
VueApp.mount('#app')
