<script setup lang="ts">
import { ALL_LANGUAGES, ROUTES_NAME } from '@/utils'
import logo from '@/assets/images/logo.png'
import { loadLanguageAsync } from '@/plugins/i18n.plugin'

/**
 * ? Variables
 */
const { t } = useI18n()
const router = useRouter()
const bgHeader = import.meta.env.VITE_HEADER_BG

/**
 * ? Methods
 */
function updateLanguage(language: string | number) {
  useAppStore().language = language
  loadLanguageAsync(useAppStore().language || 'en')
}
</script>

<template>
  <header class="relative border-x border-b border-gray-200 bg-white dark:border-gray-500 dark:bg-gray-700">
    <div
      class="h-10 flex items-center justify-between p-8 text-white font-medium md:p-4"
      :style="{
        backgroundColor: `#${bgHeader}`,
      }"
    >
      <p class="text-sm">
        {{ t('header_test_text') }}
      </p>

      <!-- Theme -->
      <Icon :icon="isDark ? 'solar:moon-broken' : 'solar:sun-broken'" class="h-6 w-6 cursor-pointer" @click="toggleDark()" />
    </div>

    <nav aria-label="Top" class="mx-auto px-4">
      <div class="h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex">
          <img
            class="h-10 w-10 cursor-pointer rounded-lg"
            :src="logo"
            alt="logo"
            @click="router.push({ name: ROUTES_NAME.PRODUCT_LIST })"
          >
        </div>

        <div class="flex items-center">
          <!-- Cart -->
          <div class="ml-4 flow-root lg:ml-6">
            <button
              type="button"
              class="inline-flex items-center gap-x-2 rounded-md bg-primary-600 px-3.5 py-1.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 focus-visible:outline"
              @click="router.push({ name: ROUTES_NAME.SHOPPING_CART })"
            >
              <Icon icon="solar:bag-3-line-duotone" class="h-6 w-6 -ml-0.5" />
              <span v-if="useAppStore().selected_products?.length" class="w-8 truncate md:w-max sm:w-36 xs:w-16">
                {{ useAppStore().totalCount }} {{ t('product') }} -
                {{ t('total_cost') }} : {{ `${(useAppStore().totalPrice).toLocaleString('en-GB')} $` }}
              </span>
            </button>
          </div>

          <!-- Language -->
          <div class="ml-4 flex">
            <Select
              :options="ALL_LANGUAGES"
              :model-value="useAppStore().language"
              @update:model-value="updateLanguage"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
