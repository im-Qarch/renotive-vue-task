<script setup lang="ts">
import { loadLanguageAsync } from '@/plugins/i18n.plugin'

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
    dir: 'ltr',
    lang: (useAppStore().language as string) || 'en',
  },
})
</script>

<template>
  <RouterView />
</template>
