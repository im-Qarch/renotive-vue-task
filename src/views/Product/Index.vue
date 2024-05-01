<script setup lang="ts">
import { ProductService } from '@/services'
import { ROUTES_NAME } from '@/utils'
import { Product } from '@/types/product'
import type { Response } from '@/types/app'

/**
 * ? Variables
 */
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
let loading = $ref(true)
let Products = $ref([]) as unknown as typeof Product[]
let pagination = $ref({
  skip: 1,
  limit: 16,
  total: 100,
})

const Queries = $computed(() => {
  return {
    skip: pagination?.skip ?? 1,
    limit: pagination?.limit ?? 16,
    select: 'id,thumbnail,description,title,brand,price',
  }
})

/**
 * ? Methods
 */
function updatePage(skip: number): void {
  pagination.skip = skip
  router.push({ query: { ...Queries } })
}

function fetchAll() {
  loading = true
  ProductService.getProducts({ ...Queries })
    .then((result: typeof Response) => {
      Products = result.products as typeof Product[]
      pagination = {
        skip: result.skip,
        limit: result.limit,
        total: result.total,
      }
    }).finally(() => loading = false)
}

/**
 * ? Watcher
 */
watch(
  () => route,
  () => {
    // called only when on the correct route
    if (route.name !== ROUTES_NAME.PRODUCT_LIST)
      return
    //
    pagination.skip = Number(route?.query?.skip) || 1
    pagination.limit = Number(route?.query?.limit) || 16
    // fetch data after any change
    fetchAll()
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <div class="mx-auto my-4 border-t border-gray-200 bg-white shadow-lg dark:border-gray-500 dark:bg-gray-700">
    <!-- Loading State -->
    <div v-if="loading" class="mx-auto w-full flex justify-center p-10 text-center">
      {{ t('loading') }}
    </div>

    <!-- Ready State -->
    <div v-else class="grid grid-cols-1 border-l border-gray-200 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 -mx-px sm:mx-0 dark:border-gray-500">
      <div v-for="product in Products" :key="product.id" class="group relative border-b border-r border-gray-200 p-4 dark:border-gray-500 sm:p-6">
        <!-- Details -->
        <div class="aspect-1 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:opacity-75">
          <img :src="product.thumbnail" :alt="product.description" class="h-full w-full object-cover object-center">
        </div>
        <div class="py-5 text-center">
          <h3 class="text-sm text-gray-900 font-semibold dark:text-white">
            {{ product.title }}
          </h3>
          <span class="text-xs text-gray-400">{{ product.brand }}</span>
          <p class="mt-4 text-base text-gray-900 font-bold dark:text-white">
            {{ `${(+product.price).toLocaleString('en-GB')} $` }}
          </p>
        </div>

        <!-- Actions -->
        <div class="w-full flex items-center justify-center gap-2">
          <!-- Add -->
          <button
            type="button"
            class="relative flex grow items-center justify-center border border-transparent rounded-md bg-gray-100 py-2 text-sm text-gray-900 font-medium dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-900"
            @click="useAppStore().addProduct(product)"
          >
            <Icon icon="solar:add-circle-line-duotone" class="mr-2 h-5 w-5" />
            {{ t('add_to_cart') }}
            <span class="ml-1.5 rounded bg-gray-300 px-1 font-bold dark:bg-gray-600">{{ useAppStore().selected_products.filter((p: typeof Product) => p.id === product.id)[0]?.quantity }}</span>
          </button>

          <!-- Remove -->
          <button
            v-if="useAppStore().selected_products.some((p: typeof Product) => p.id === product.id && !!p?.quantity)"
            type="button"
            class="relative flex items-center justify-center border border-transparent rounded-md bg-red-100 px-3 py-2 text-sm text-red-900 font-medium hover:bg-red-200"
            @click="useAppStore().removeProduct(product)"
          >
            <Icon icon="solar:minus-square-line-duotone" class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <nav class="flex items-center justify-center p-2">
      <span
        v-for="skip in Math.ceil(pagination?.total / pagination?.limit) || 1"
        :key="skip"
        :class="{ 'dark:bg-primary-400 bg-primary-400 !text-white hover:bg-primary-400': pagination.skip === skip }"
        class="inline-flex cursor-pointer items-center bg-gray-100 px-4 py-2 text-sm text-gray-500 font-medium dark:bg-gray-900 hover:bg-gray-200 hover:text-gray-700"
        @click="updatePage(skip)"
      >
        {{ skip }}
      </span>
    </nav>
  </div>
</template>
