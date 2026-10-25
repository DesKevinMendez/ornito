<template>
  <div
    class="bg-card-bg-light dark:bg-card-bg-dark rounded-xl border border-card-light dark:border-card-dark shadow-sm"
    :class="{ 'overflow-hidden flex flex-col': noPadding }"
  >
    <div v-if="showHeader" class="px-6 pt-5">
      <div
        class="flex items-start justify-between gap-4 pb-4 border-b border-strong-light dark:border-strong-dark"
        :class="{ 'flex-col gap-3 sm:flex-row sm:items-start': colInMobile }"
      >
        <div class="flex-1 min-w-0">
          <h3
            v-if="title"
            class="text-base font-semibold tracking-tight text-card-title-text-light dark:text-card-title-text-dark"
          >
            {{ title }}
          </h3>
          <p
            v-if="subtitle"
            class="mt-0.5 text-sm text-card-subtitle-text-light dark:text-card-subtitle-text-dark"
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
