<template>
    <div>
        <h2 class="text-2xl font-bold name">Blog Archive</h2>
        <!-- Render paginated posts grouped by year -->
        <div v-for="(posts, year) in paginatedGroupedPosts" :key="year" class="mb-8">
            <h3 class="text-2xl font-semibold">{{ year }}</h3>
            <ul>
                <li v-for="post in posts" :key="post._path">
                    <NuxtLink :to="post._path">
                        {{ formatDate(post.date) }} - {{ post.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination">
            <button
                v-for="page in totalPages"
                :key="page"
                :class="{ active: page === currentPage }"
                @click="goToPage(page)"
            >
                {{ page }}
            </button>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue';

// Fetch posts data
const { data: postsRef } = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);

useHead({
    title: 'Blog Archive',
    meta: [
        { name: 'description', content: 'Archive of blog posts by Shaswata Das' },
        { name: 'author', content: 'Shaswata Das' }
    ]
});

// Safely extract the value from the ref
const posts = computed(() => postsRef.value || []);

// Group posts by year
const groupedPosts = computed(() => {
    return posts.value.reduce((groups, post) => {
        const year = new Date(post.date).getFullYear();
        if (!groups[year]) {
            groups[year] = [];
        }
        groups[year].push(post);
        return groups;
    }, {});
});

// Pagination setup
const postsPerPage = 4; // Number of years per page
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(Object.keys(groupedPosts.value).length / postsPerPage));

// Paginated posts grouped by year
const paginatedGroupedPosts = computed(() => {
    const years = Object.keys(groupedPosts.value).sort((a, b) => b - a);
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedYears = years.slice(start, end);

    return paginatedYears.reduce((result, year) => {
        result[year] = groupedPosts.value[year];
        return result;
    }, {});
});

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Format date as "04 October"
const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
};
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

a {
    font-size: 1.2rem;
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