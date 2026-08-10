<template>
  <div :class="[sizeClass, 'rounded-full shrink-0 overflow-hidden']">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="name"
      class="w-full h-full object-cover"
    />
    <div
      v-else
      :class="[
        'w-full h-full flex items-center justify-center bg-linear-to-br from-primary-500 to-secondary-500 text-white font-semibold',
        textSizeClass,
      ]"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl?: string | null;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const { imageUrl = null, name, size = 'md' } = defineProps<Props>();

const initials = computed(() => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length >= 2) {
    return `${words[0].charAt(0)}${words[1].charAt(0)}`.toUpperCase();
  }
  return words[0].charAt(0).toUpperCase();
});

const sizeClass = computed(() => {
  switch (size) {
    case 'sm': return 'w-8 h-8';
    case 'lg': return 'w-12 h-12';
    case 'xl': return 'w-16 h-16';
    default: return 'w-10 h-10';
  }
});

const textSizeClass = computed(() => {
  switch (size) {
    case 'sm': return 'text-xs';
    case 'lg': return 'text-base';
    case 'xl': return 'text-lg';
    default: return 'text-sm';
  }
});
</script>
