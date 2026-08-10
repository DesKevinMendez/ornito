<template>
  <Transition
    name="collapse"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
function onEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = "0"
  element.style.overflow = "hidden"
  element.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out"
  element.style.opacity = "0"
  
  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = "1"
  })
}

function onAfterEnter(el: Element) {
  const element = el as HTMLElement
  element.style.height = ""
  element.style.overflow = ""
  element.style.transition = ""
  element.style.opacity = ""
}

function onLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  element.style.overflow = "hidden"
  element.style.transition = "height 0.3s ease-out, opacity 0.3s ease-out"
  element.style.opacity = "1"
  
  requestAnimationFrame(() => {
    element.style.height = "0"
    element.style.opacity = "0"
  })
}

function onAfterLeave(el: Element) {
  const element = el as HTMLElement
  element.style.height = ""
  element.style.overflow = ""
  element.style.transition = ""
  element.style.opacity = ""
}
</script>

