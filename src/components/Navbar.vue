<script setup lang="ts">
import { LANGUAGE } from '@/utils'

/**
 * ? Variables
 */
const current_language = $computed(() => LANGUAGE[useAppStore().language])
const language = $ref(useAppStore().language)
</script>

<template>
  <div>
    Navbar
    {{ language }}
    {{ current_language }}
  </div>
</template>
