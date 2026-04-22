<template>
  <div class="progress-bar" :style="{ transform: `scaleX(${progress})` }" />
</template>

<script setup lang="ts">
const progress = ref(0)
let ticking = false
const update = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const el = document.documentElement
    const scrollable = el.scrollHeight - el.clientHeight
    progress.value = scrollable > 0 ? el.scrollTop / scrollable : 0
    ticking = false
  })
}
onMounted(() => window.addEventListener('scroll', update, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--link-color);
  transform-origin: left;
  z-index: 9999;
  pointer-events: none;
  will-change: transform;
}
</style>
