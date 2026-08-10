<template>
  <div class="flex -space-x-2">
    <div
      v-for="(user, index) in users"
      :key="index"
      class="relative"
    >
      <div
        class="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-medium border-2 border-white"
        :style="{ zIndex: users.length - index }"
      >
        {{ user.initials }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  initials: string;
  name: string;
}

interface Props {
  users: User[];
}

defineProps<Props>();
</script>
