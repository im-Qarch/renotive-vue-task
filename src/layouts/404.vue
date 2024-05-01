<script setup lang="ts">
import { ROUTES_NAME } from '@/utils'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="grid h-full min-h-full place-items-center bg-white px-6 py-24 dark:bg-gray-900 lg:px-8 sm:py-32">
    <div class="text-center">
      <p class="text-base text-primary-600 font-semibold">
        404
      </p>
      <h1 class="mt-4 text-3xl text-gray-900 font-bold tracking-tight sm:text-5xl dark:text-white">
        {{ t('page_not_found') }}
      </h1>
      <p class="mt-6 text-base text-gray-600 leading-7">
        {{ t('sorry_we_could_not_find_page') }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 focus-visible:outline"
          @click="router.push({ name: ROUTES_NAME.PRODUCT_LIST })"
        >
          {{ t('go_back_to_products') }}
        </button>
      </div>
    </div>
  </main>
</template>
