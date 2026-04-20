<template>
  <nav class="toc" v-if="toc && toc.links && toc.links.length > 0">
    <p class="toc-label">Contents</p>
    <ul>
      <li
        v-for="link in toc.links"
        :key="link.id"
        :class="{ active: activeId === link.id, 'depth-3': link.depth === 3 }"
      >
        <a :href="`#${link.id}`" @click.prevent="scrollTo(link.id)">{{ link.text }}</a>
        <ul v-if="link.children && link.children.length">
          <li
            v-for="child in link.children"
            :key="child.id"
            :class="{ active: activeId === child.id, 'depth-3': true }"
          >
            <a :href="`#${child.id}`" @click.prevent="scrollTo(child.id)">{{ child.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{ toc?: { links: Array<{ id: string; text: string; depth: number; children?: Array<{ id: string; text: string; depth: number }> }> } }>()

const activeId = ref('')

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  if (!props.toc?.links?.length) return
  const allIds = props.toc.links.flatMap(l => [l.id, ...(l.children?.map(c => c.id) ?? [])])
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter(e => e.isIntersecting)
      if (visible.length) activeId.value = visible[0].target.id
    },
    { rootMargin: '-10% 0px -80% 0px' }
  )
  allIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.toc {
  position: fixed;
  left: calc(50% + 360px);
  top: 4rem;
  width: 180px;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
}

.toc-label {
  font-size: 0.65rem;
  font-family: "ui-sans-serif", system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-text-color);
  margin: 0 0 0.6rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 0.3rem;
}

li.depth-3 {
  padding-left: 0.75rem;
}

a {
  font-size: 0.75rem;
  font-family: "ui-sans-serif", system-ui, sans-serif;
  color: var(--accent-text-color);
  line-height: 1.5;
  display: block;
  opacity: 0.7;
  transition: color 0.15s ease, opacity 0.15s ease;
}

a:hover,
li.active > a {
  color: var(--link-color-hover);
  opacity: 1;
}

@media (max-width: 1200px) {
  .toc {
    display: none;
  }
}
</style>
