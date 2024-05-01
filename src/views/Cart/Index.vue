<script setup lang="ts">
import { ROUTES_NAME } from '@/utils'

/**
 * ? Variables
 */
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="mx-auto my-4 border border-gray-200 bg-white shadow-lg dark:border-gray-500 dark:bg-gray-700">
    <div class="mx-auto max-w-2xl px-4 py-8 lg:px-0 sm:px-6 sm:pb-24">
      <h1 class="text-center text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl dark:text-white">
        {{ t('shopping_Cart') }}
      </h1>
      <div class="mt-12">
        <section aria-labelledby="cart-heading">
          <!-- List -->
          <ul role="list" class="border-b border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-500 dark:divide-gray-500">
            <li v-for="product in useAppStore().selected_products" :key="product.id" class="flex py-6">
              <!-- Detail -->
              <div class="flex-shrink-0">
                <img :src="product.thumbnail" :alt="product.description" class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32">
              </div>
              <div class="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div class="flex justify-between">
                    <h4 class="text-sm">
                      <span class="text-gray-700 font-medium dark:!text-white">{{ product.title }}</span>
                    </h4>
                    <p class="ml-4 text-base text-gray-900 dark:text-white">
                      {{ `${(+product.price * product?.quantity).toLocaleString('en-GB')} $` }}
                    </p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {{ product.brand }}
                  </p>
                </div>

                <div class="mt-4 flex flex-1 items-end justify-between">
                  <!-- Actions -->
                  <p class="flex items-center text-sm text-gray-700 space-x-2">
                    <!-- Add -->
                    <Icon
                      icon="solar:add-square-linear"
                      class="h-5 w-5 flex-shrink-0 cursor-pointer text-primary hover:text-primary-600"
                      @click="useAppStore().addProduct(product)"
                    />
                    <!-- Quantity -->
                    <span class="text-gray-900 dark:text-white">{{ product?.quantity }}</span>
                    <!-- Remove -->
                    <Icon
                      v-if="product?.quantity"
                      icon="solar:minus-square-linear"
                      class="h-5 w-5 flex-shrink-0 cursor-pointer text-red-400 hover:text-red-500"
                      @click="useAppStore().removeProduct(product)"
                    />
                  </p>
                  <!-- Delete All -->
                  <div class="ml-4">
                    <button
                      type="button"
                      class="rounded bg-red-100 px-1 py-0.5 text-sm text-red-600 font-medium hover:text-red-500"
                      @click="useAppStore().fullDeleteProduct(product)"
                    >
                      <span>{{ t('remove') }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section aria-labelledby="summary-heading" class="mt-10">
          <div v-if="!!useAppStore().selected_products?.length">
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-base text-gray-900 font-medium dark:text-white">
                  {{ t('subtotal') }}
                </dt>
                <dd class="ml-4 text-base text-gray-900 font-bold dark:text-white">
                  {{ `${(useAppStore().totalPrice).toLocaleString('en-GB')} $` }}
                </dd>
              </div>
            </dl>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
              {{ t('shipping_taxes_checkout') }}
            </p>
          </div>

          <div class="mt-10">
            <button
              type="button"
              class="w-full border border-transparent rounded-md bg-primary-600 px-4 py-3 text-base text-white font-medium shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-gray-50"
              @click="router.push({ name: ROUTES_NAME.PRODUCT_LIST })"
            >
              {{ t('continue_shopping') }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
