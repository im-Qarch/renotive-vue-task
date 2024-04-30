/**
 * ?Vite Configuration File
 *
 * This file serves as the configuration file for Vite, our build tool for modern web development. Vite
 * is used to optimize and bundle our project's assets, providing a fast and efficient development
 * experience with features such as hot module replacement (HMR) and native ES module support.
 *
 * Why Use Vite:
 * - Vite is Next Generation Frontend Tooling
 *   offers lightning-fast build times and near-instantaneous hot module replacement (HMR) for
 *   an improved development workflow, especially for large-scale applications.
 * - It provides native ES module support, allowing us to write modern JavaScript code without the need
 *   for transpilation or complex build configurations.
 * - Vite's plugin-based architecture makes it highly extensible and customizable, enabling us to
 *   tailor the build process to our project's specific requirements.
 *
 * Resources:
 * - @link [Vite Documentation](https://vitejs.dev/)
 * - @link [Project GitHub Repository](https://github.com/vitejs/vite)
 *
 * Author: [Qarch]
 * Date: [30.04.2024]
 */

import path from 'node:path'
import { defineConfig } from 'vite'

// import plugins
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  /**
   * Build Options
   * @link https://vitejs.dev/config/build-options.html
   */
  build: {
    chunkSizeWarningLimit: 30000,
    manifest: true,
    minify: 'esbuild',
  },
  /**
   * Aliasing to file system paths
   * @link https://vitejs.dev/config/shared-options.html#resolve-alias
   */
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    /**
     * Explore and extend more macros and syntax sugar to Vue.
     * [Doc](https://vue-macros.dev/)
     */
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),
    /**
     * Auto import APIs on-demand for Vite
     * [Doc](https://github.com/antfu/unplugin-auto-import)
     */
    AutoImport({
      // specified all lib or module need be auto imported
      imports: [
        'vue',
        'vue-i18n',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      // auto generated file path
      dts: 'src/types/auto-imports.d.ts',
      // allow auto import under this dirs
      dirs: [
        'src/composables',
        'src/stores',
        'src/views',
      ],
      vueTemplate: true,
    }),

    /**
     * On-demand components auto importing for Vue.
     * [Doc](https://github.com/antfu/unplugin-vue-components)
     */
    Components({
      // allow auto load components under `./src/components/`
      extensions: ['vue'],
      // allow auto import and register components
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/types/components.d.ts',
      resolvers: [],
    }),

    // https://github.com/antfu/unocss
    // see [config file](./uno.config.ts)
    Unocss(),

    // I18n config for localization
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    // VueDevTools(),
  ],
})
