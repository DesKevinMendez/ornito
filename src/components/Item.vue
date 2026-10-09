<template>
  <div
    class="flex w-full items-center gap-3 rounded-lg bg-white px-4 py-3 dark:bg-gray-900"
    :class="{
      'border border-gray-200 dark:border-gray-700': border,
      'transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800': hoverable,
    }"
  >
    <div
      v-if="image || $slots.image"
      class="h-12 w-12 shrink-0 overflow-hidden rounded-full"
    >
      <slot name="image">
        <img :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
      </slot>
    </div>

    <div class="min-w-0 flex-1">
      <p class="break-words text-sm font-medium text-gray-900 dark:text-white">
        <slot name="title">{{ title }}</slot>
      </p>
      <p
        v-if="subtitle || $slots.subtitle"
        class="mt-0.5 break-words text-sm text-gray-500 dark:text-gray-400"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </p>
    </div>

    <div
      v-if="icon || $slots.icon"
      class="flex shrink-0 items-center justify-center text-gray-400 dark:text-gray-500"
    >
      <slot name="icon">
        <component :is="icon" class="h-5 w-5" aria-hidden="true" focusable="false" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  icon?: Component;
  border?: boolean;
  hoverable?: boolean;
}

const { title, subtitle, image, imageAlt = '', icon, border = false, hoverable = true } = defineProps<Props>();
</script>
