<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
    :class="{ 'overflow-hidden flex flex-col': noPadding }"
  >
    <div v-if="showHeader" class="px-6 pt-5">
      <div
        class="flex items-start justify-between gap-4 pb-4 border-b border-gray-300 dark:border-gray-600"
        :class="{ 'flex-col gap-3 sm:flex-row sm:items-start': colInMobile }"
      >
        <div class="flex-1 min-w-0">
          <h3
            v-if="title"
            class="text-base font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ title }}
          </h3>
          <p
            v-if="subtitle"
            class="mt-0.5 text-sm text-gray-500 dark:text-gray-400"
          >
            {{ subtitle }}
          </p>
        </div>
        <div
          v-if="$slots.headerButtons"
          class="flex items-center gap-2 shrink-0"
        >
          <slot name="headerButtons" />
        </div>
      </div>
    </div>
    <div :class="noPadding ? 'flex-1 flex flex-col' : 'p-4'">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  colInMobile?: boolean;
  noPadding?: boolean;
}

const { title, subtitle, colInMobile = false, noPadding = false } = defineProps<Props>();
const slots = useSlots();

const showHeader = computed(() => {
  return title || subtitle || slots.headerButtons;
});
</script>
