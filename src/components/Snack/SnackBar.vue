<script setup lang="ts">
import useMessages from '../../composables/useMessages';

const { messages, shiftMessage } = useMessages();

defineProps({
  active: Boolean,
});

const expired = () => {
  shiftMessage();
};
</script>

<template>
  <div
    class="fixed top-0 right-0 flex flex-col-reverse p-4 overflow-hidden z-50 w-80"
  >
    <SnackBarItem
      v-for="message in messages"
      :key="message.ts"
      :active="true"
      :message="message"
      :error="message.error"
      @expired="expired"
    />
  </div>
</template>
