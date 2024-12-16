<template>
    <div class="rendered">
        <ContentDoc :path="`/${params.slug}`" />
    </div>
</template>

<script setup>
const { params } = useRoute();
const { data: post } = await useAsyncData(() =>
    queryContent(`/${params.slug}`).findOne()
);
</script>

<style scoped>
h3 {
    margin-top: 1rem;
}

ul {
    list-style: inside;
    padding: 0 0 0 3rem;
}

li {
    margin-bottom: 0.5rem;
}

.rendered div h2 {
    color: var(--link-color-hover);
}

pre {
  background-color: var(--code-bg, #f5f5f5); /* Light theme default */
  color: var(--code-color, #333333); /* Text color */
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto; /* Allow horizontal scrolling */
  white-space: pre; /* Preserve whitespace and line breaks */
  max-width: 100%; /* Ensure it doesn't exceed the container width */
  font-family: 'Fira Code', monospace, 'Courier New', monospace;
  line-height: 1.5;
}

code {
  font-family: inherit; /* Match the pre's font */
  font-size: 0.9rem;
  display: block;
  white-space: pre-wrap; /* Wrap long lines */
}

@media (max-width: 768px) {
  pre {
    font-size: 0.85rem; /* Adjust font size for smaller screens */
  }
}
</style>
