<template>
  <ul
    class="m-0 w-full list-none divide-y divide-gray-200 overflow-hidden rounded-xl bg-white p-0 dark:divide-gray-700 dark:bg-gray-900 [&>li>*]:rounded-none"
    :class="{
      'border border-gray-200 dark:border-gray-700': border,
      'border-0': !border,
    }"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
interface Props {
  border?: boolean;
}

const { border = false } = defineProps<Props>();
</script>
