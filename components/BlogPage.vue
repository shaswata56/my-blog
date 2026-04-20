<template>
  <section class="blog-posts" id="blog-posts">
    <p class="section-label">Posts</p>
    <div class="post-list">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="`/posts${post.path}`"
        class="post-item"
      >
        <span class="margin-date">{{ formatDate(post.date) }}</span>
        <h3 class="title">{{ post.title }}</h3>
        <p class="timeframe">{{ formatDate(post.date) }} · {{ useReadingTime(post.body) }} min read</p>
        <p class="description">
          {{ getExcerpt(post.body) || '' }}
        </p>
      </NuxtLink>
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
  const path = page === 1 ? '/' : `/page/${page}`;
  router.push(path);
};

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const getExcerpt = (body) => {
  if (!body || body.type !== 'minimal' || !Array.isArray(body.value)) return '';

  const paragraphs = body.value
    .filter((node) => node[0] === 'p' && typeof node[2] === 'string')
    .map((node) => node[2])
    .join(' ');

  const excerpt = paragraphs.length > 300 ? paragraphs.slice(0, 300) + '...' : paragraphs;
  return excerpt;
};
</script>


<style scoped>
.blog-posts {
  margin-bottom: 2rem;
}

.section-label {
  font-size: 0.7rem;
  font-family: "ui-sans-serif", system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-text-color);
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.post-item {
  display: block;
  position: relative;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border-color);
  color: inherit;
  transition: background-color 0.15s ease;
  border-radius: 2px;
}

.margin-date {
  display: none;
  position: absolute;
  right: calc(100% + 1.5rem);
  top: 1.3rem;
  font-size: 0.7rem;
  font-family: "ui-sans-serif", system-ui, sans-serif;
  color: var(--accent-text-color);
  opacity: 0.6;
  white-space: nowrap;
  letter-spacing: 0.04em;
}

@media (min-width: 1100px) {
  .margin-date {
    display: block;
  }
  .timeframe {
    display: none;
  }
}

.post-item:hover {
  color: inherit;
}

.post-item:hover .title {
  color: var(--link-color-hover);
}

.title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
  color: var(--text-color);
  transition: color 0.2s ease;
  line-height: 1.4;
}

.timeframe {
  font-size: 0.75rem;
  font-family: "ui-sans-serif", system-ui, sans-serif;
  color: var(--accent-text-color);
  opacity: 0.75;
  margin: 0 0 0.4rem;
}

.description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.6;
  margin: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.pagination button {
  padding: 0.4rem 0.9rem;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
  background-color: transparent;
  color: var(--accent-text-color);
  cursor: pointer;
  border-radius: 3px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.pagination button.active {
  color: var(--link-color-hover);
  border-color: var(--link-color-hover);
  font-weight: bold;
}

.pagination button:hover {
  color: var(--link-color-hover);
  border-color: var(--link-color-hover);
  background-color: transparent;
}
</style>