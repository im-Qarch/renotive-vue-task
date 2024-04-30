<script setup lang="ts">
import { loadLanguageAsync } from '@/plugins/i18n.plugin'

const { t } = useI18n()

onBeforeMount(() => {
  loadLanguageAsync(useAppStore().language || 'en')
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
useHead({
  title: 'Renotive | VueJS Mini Assignment',
  meta: [
    {
      name: 'description',
      content: 'Renotive | VueJS Mini Assignment',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? 'bg-primary' : 'bg-white',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: () => '/favicon.png',
    },
  ],
  htmlAttrs: {
    dir: ['ar', 'fa'].includes(useAppStore().language) ? 'rtl' : 'ltr',
    lang: (useAppStore().language as string) || 'en',
  },
})
</script>

<template>
  <div class="main_container">
    {{ t('hi') }}
  </div>
</template>

<style lang="postcss" scoped>
.main_container {
  @apply h-screen w-full text-2xl font-bold p-16 text-white bg-primary;
}
</style>
