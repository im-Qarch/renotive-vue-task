<script setup lang="ts">
import { ALL_LANGUAGES } from '@/utils'
import logo from '@/assets/images/logo.png'
import { loadLanguageAsync } from '@/plugins/i18n.plugin'

/**
 * ? Variables
 */
const { t } = useI18n()
const bgHeader = `bg-${import.meta.env.VITE_HEADER_BG}`

/**
 * ? Methods
 */
function updateLanguage(language: string | number) {
  useAppStore().language = language
  loadLanguageAsync(useAppStore().language || 'en')
}
</script>

<template>
  <header class="relative rounded-b-lg bg-gray-300 dark:bg-gray-700">
    <div
      class="h-10 flex items-center justify-center px-4 text-sm text-white font-medium"
      :class="bgHeader"
    >
      <p>{{ t('header_test_text') }}</p>

      <!-- Theme -->
      <Icon :icon="isDark ? 'solar:moon-broken' : 'solar:sun-broken'" class="ml-auto cursor-pointer text-lg" @click="toggleDark()" />
    </div>

    <nav aria-label="Top" class="mx-auto max-w-7xl px-4">
      <div class="border-b border-gray-200">
        <div class="h-16 flex items-center">
          <!-- Logo -->
          <div class="flex">
            <img class="h-10 w-auto rounded-lg" :src="logo" alt="logo">
          </div>

          <div class="ml-auto flex items-center">
            <!-- TODO: implement on Cart task -->
            <!-- Cart -->
            <div class="ml-4 flow-root lg:ml-6">
              <button
                type="button"
                class="inline-flex items-center gap-x-2 rounded-md bg-primary-600 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 focus-visible:outline"
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
      </div>
    </nav>
  </header>
</template>
