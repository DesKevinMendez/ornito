<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[110] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 sm:p-8"
        @click="emitClose"
      >
        <img
          v-if="src"
          :src="src"
          alt="Vista ampliada"
          class="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
  src: string | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

function emitClose(): void {
  emit('close');
}

function onKeydown(event: KeyboardEvent): void {
  if (props.open && event.key === 'Escape') {
    emitClose();
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-fade-enter-active img,
.lightbox-fade-leave-active img {
  transition: transform 0.25s cubic-bezier(0.2, 0, 0.2, 1);
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-from img,
.lightbox-fade-leave-to img {
  transform: scale(0.8);
}
</style>
