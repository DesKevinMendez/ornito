<template>
  <component
    :is="clickable ? 'button' : 'div'"
    :id="id === undefined ? undefined : String(id)"
    :type="clickable ? 'button' : undefined"
    class="flex w-full items-center gap-3 rounded-lg bg-white px-4 py-3 text-left dark:bg-gray-900"
    :class="{
      'border border-gray-200 dark:border-gray-700': border,
      'border-0': !border,
      'transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800': clickable || hoverable,
      'cursor-pointer [font:inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500': clickable,
    }"
    @click="handleClick"
  >
    <span
      v-if="image || $slots.image"
      class="h-12 w-12 shrink-0 overflow-hidden rounded-full"
    >
      <slot name="image">
        <img :src="image" :alt="imageAlt" class="h-full w-full object-cover" />
      </slot>
    </span>

    <span class="min-w-0 flex-1">
      <span class="block break-words text-sm font-medium text-gray-900 dark:text-white">
        <slot name="title">{{ title }}</slot>
      </span>
      <span
        v-if="subtitle || $slots.subtitle"
        class="mt-0.5 block break-words text-sm text-gray-500 dark:text-gray-400"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </span>
    </span>

    <span
      v-if="icon || $slots.icon"
      class="flex shrink-0 items-center justify-center text-gray-400 dark:text-gray-500"
    >
      <slot name="icon">
        <component :is="icon" class="h-5 w-5" aria-hidden="true" focusable="false" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import type { ItemId } from '../types/Item';

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  icon?: Component;
  border?: boolean;
  hoverable?: boolean;
  clickable?: boolean;
  id?: ItemId;
}

const {
  title,
  subtitle,
  image,
  imageAlt = '',
  icon,
  border = false,
  hoverable = true,
  clickable = false,
  id,
} = defineProps<Props>();

const emit = defineEmits<{
  click: [id: ItemId | undefined];
}>();

const handleClick = () => {
  if (!clickable) return;

  emit('click', id);
};
</script>
