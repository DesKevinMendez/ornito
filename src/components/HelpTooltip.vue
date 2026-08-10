<script setup lang="ts">
const { tooltip } = defineProps<{ tooltip: string }>()

const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const offsetX = ref(0)

const recalc = () => {
  if (!triggerRef.value || !tooltipRef.value) return
  const trigger = triggerRef.value.getBoundingClientRect()
  const tipW = 192
  const centerX = trigger.left + trigger.width / 2
  const overflowRight = centerX + tipW / 2 - window.innerWidth + 8
  const overflowLeft = -(centerX - tipW / 2 - 8)
  if (overflowRight > 0) offsetX.value = -overflowRight
  else if (overflowLeft > 0) offsetX.value = overflowLeft
  else offsetX.value = 0
}
</script>

<template>
  <div ref="triggerRef" class="relative group" @mouseenter="recalc">
    <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold cursor-help leading-none">?</span>
    <div
      ref="tooltipRef"
      class="absolute bottom-full left-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 text-center z-50 pointer-events-none"
      :style="{ transform: `translateX(calc(-50% + ${offsetX}px))` }"
    >
      {{ tooltip }}
      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
    </div>
  </div>
</template>
