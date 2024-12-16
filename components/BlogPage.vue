<template>
  <section class="blog-posts" id="blog-posts">
    <h2 class="text-2xl font-bold name">Blog Posts</h2>
    <div class="post-list">
      <div v-for="post in posts" :key="post._path" class="post-item">
        <div class="post-header">
          <div class="left">
            <h3 class="title">
              <NuxtLink :to="`/posts${post._path}`">{{ post.title }}</NuxtLink>
            </h3>
          </div>
          <div class="right">
            <p class="timeframe">{{ formatDate(post.date) }}</p>
          </div>
        </div>
        <p class="description">{{ getExcerpt(post.body) }}</p>
      </div>
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="goToPage(page)">
        <b>{{ page }}</b>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 0
  }
});

const router = useRouter();

const goToPage = (page) => {
  const path = page === 1 ? '/' : `/${page}`;
  router.push(path);
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const getExcerpt = (body) => {
  if (!body || !Array.isArray(body.children)) return '';

  const paragraphs = body.children
    .filter((node) => node.tag === 'p')
    .map((node) =>
      node.children
        .filter((child) => child.type === 'text')
        .map((child) => child.value)
        .join(' ')
    )
    .join(' ');

  const excerpt = paragraphs.length > 300 ? paragraphs.substring(0, 300) + '...' : paragraphs;
  return excerpt;
};
</script>


<style scoped>
h3 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

.blog-posts {
  margin-bottom: 2rem;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-item {
  padding: 0.5rem 0;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.post-header .title,
.post-header .timeframe {
  color: var(--accent-text-color);
  font-family: "ui-sans-serif", system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.post-header .title {
  color: var(--link-color-hover);
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}

.timeframe {
  font-size: 1.25rem;
  text-align: right;
}

.description {
  line-height: 1.4;
  margin: 0.5rem 0 0;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--accent-color);
  background-color: var(--accent-color);
  color: var(--accent-text-color);
  cursor: pointer;
  border-radius: 4px;
}

.pagination button.active,
.pagination button.active:hover {
  background-color: transparent;
  color: var(--accent-color);
  font-weight: bold;
}

.pagination button:hover {
  background-color: var(--link-color-hover);
  color: var(--accent-color);
}
</style>