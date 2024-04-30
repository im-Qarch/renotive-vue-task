// Pinia Store
import type { App } from '@/types/app'

export const useAppStore = defineStore({
  id: 'app',
  // you can convert this to a function
  state: (): typeof App => ({
    language: 'en' as null | string,
  }),
  actions: {
    clearAll() {
      this.$reset()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
