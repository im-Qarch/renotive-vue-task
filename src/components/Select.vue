<script lang="ts" setup>
import type { PropType } from 'vue'

interface Option {
  label: string
  value: string | number
}

/**
 * ? Props
 */
const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
})

/**
 * ? Events
 */
const emit = defineEmits<{
  (e: 'update:modelValue', Value: string | number): void
}>()

/**
 * ? Computed
 */
const model = computed({
  get(): string | number {
    return props.modelValue
  },
  set(newValue: string | number) {
    emit('update:modelValue', newValue)
  },
})
</script>

<template>
  <div class="relative">
    <select
      v-model="model"
      class="block w-max border-gray-300 rounded-md py-2 pl-3 pr-4 text-base focus:border-blue-300 sm:text-sm focus:outline-none focus:ring"
      @select="model = $event as unknown as string | number"
    >
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
