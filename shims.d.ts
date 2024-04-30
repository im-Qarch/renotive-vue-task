/**
 * ?Shims File
 * This file use for adding Typescript to a Vue project,
 *
 * Why Use Vite:
 * - You need to do a bit of extra work to make Single File Components load properly into the type system.
 *
 * Resources:
 * - @link [Explain](https://www.jacobparis.com/content/vue-shim-typescript)
 *
 * Author: [Qarch]
 * Date: [30.04.2024]
 */

declare module '*.vue' {
  import type { defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}
