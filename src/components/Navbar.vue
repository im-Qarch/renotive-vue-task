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
      class="h-10 flex items-center justify-center px-4 text-sm text-white font-medium"
      :style="{
        backgroundColor: `#${bgHeader}`,
      }"
    >
      <p>{{ t('header_test_text') }}</p>

      <!-- Theme -->
      <Icon :icon="isDark ? 'solar:moon-broken' : 'solar:sun-broken'" class="ml-auto cursor-pointer text-lg" @click="toggleDark()" />
    </div>

    <nav aria-label="Top" class="mx-auto px-4">
      <div class="h-16 flex items-center">
        <!-- Logo -->
        <div class="flex">
          <img
            class="h-10 w-auto cursor-pointer rounded-lg"
            :src="logo"
            alt="logo"
            @click="router.push({ name: ROUTES_NAME.PRODUCT_LIST })"
          >
        </div>

        <div class="ml-auto flex items-center">
          <!-- TODO: implement on Cart task -->
          <!-- Cart -->
          <div class="ml-4 flow-root lg:ml-6">
            <button
              type="button"
              class="inline-flex items-center gap-x-2 rounded-md bg-primary-600 px-3.5 py-1.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 focus-visible:outline"
            >
              <Icon icon="solar:bag-3-line-duotone" class="h-6 w-6 -ml-0.5" />
              0
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
