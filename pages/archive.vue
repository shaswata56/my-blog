<template>
    <section class="archive-section">
        <p class="section-label">Archive</p>
        <!-- Render paginated posts grouped by year -->
        <div v-for="(posts, year) in paginatedGroupedPosts" :key="year" class="year-group">
            <div class="year-row" v-for="(post, idx) in posts" :key="post._id">
                <span class="year-marker" v-if="idx === 0">{{ year }}</span>
                <span class="year-marker" v-else></span>
                <div class="post-entry">
                    <NuxtLink v-if="post.path" :to="`/posts${post.path}`">
                        <span class="entry-date">{{ formatDate(post.date) }}</span>
                        <span class="entry-title">{{ post.title }}</span>
                    </NuxtLink>
                    <span v-else class="entry-plain">
                        <span class="entry-date">{{ formatDate(post.date) }}</span>
                        <span class="entry-title">{{ post.title }}</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination">
            <button v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"
                @click="goToPage(page)">
                {{ page }}
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const postsPerPage = 4;

const { data: posts, error } = await useAsyncData('posts-archive', async () => {
    const all = await queryCollection('blog').all();
    const filtered = all.filter(post => {
        const validDate = typeof post?.date === 'string' && !isNaN(new Date(post.date).getTime());
        const isPublished = post?.published !== false;
        return validDate && isPublished;
    });
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

if (error.value) {
    console.error('❌ Failed to fetch posts (archive):', error.value);
}

useHead({
    title: 'Blog Archive',
    meta: [
        { name: 'description', content: 'Archive of blog posts by Shaswata Das' },
        { name: 'author', content: 'Shaswata Das' }
    ]
});

const groupedPosts = computed(() => {
    return (posts.value || []).reduce((groups, post) => {
        const year = new Date(post.date).getFullYear();
        if (!groups[year]) groups[year] = [];
        groups[year].push(post);
        return groups;
    }, {} as Record<string, typeof posts.value>);
});

const currentPage = ref(1);
const totalPages = computed(() =>
    Math.ceil(Object.keys(groupedPosts.value).length / postsPerPage)
);

const paginatedGroupedPosts = computed(() => {
    const years = Object.keys(groupedPosts.value).sort((a, b) => +b - +a);
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedYears = years.slice(start, end);
    return paginatedYears.reduce((result, year) => {
        result[year] = groupedPosts.value[year];
        return result;
    }, {} as Record<string, typeof posts.value>);
});

const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const formatDate = (date: string) => {
    const options = { day: '2-digit', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
};
</script>

<style scoped>
.section-label {
    font-size: 0.7rem;
    font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent-text-color);
    margin-bottom: 0.75rem;
    margin-top: 0;
}

.year-group {
    margin-bottom: 0;
}

.year-row {
    display: grid;
    grid-template-columns: 3.5rem 1fr;
    gap: 0 1.5rem;
    align-items: baseline;
    border-bottom: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 0 0.5rem;
    margin: 0 -0.5rem;
    transition: background 0.2s ease;
}

.year-row:hover {
    background: var(--accent-color);
}

.year-marker {
    font-size: 0.65rem;
    font-family: "Fira Mono", "Courier New", monospace;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-text-color);
    opacity: 0.6;
    padding-top: 0.85rem;
    align-self: start;
}

.post-entry {
    padding: 0.75rem 0;
}

.post-entry a,
.entry-plain {
    display: flex;
    gap: 0.75rem;
    align-items: baseline;
}

.entry-date {
    font-size: 0.72rem;
    font-family: "Fira Mono", "Courier New", monospace;
    color: var(--accent-text-color);
    opacity: 0.7;
    white-space: nowrap;
    flex-shrink: 0;
}

.entry-title {
    font-family: "Merriweather", serif;
    font-size: 0.92rem;
    color: var(--text-color);
    line-height: 1.5;
}

.post-entry a {
    transition: transform 0.15s ease;
}

.post-entry a:hover {
    transform: translateX(2px);
}

.post-entry a:hover .entry-title {
    color: var(--link-color-hover);
}

@media (max-width: 600px) {
    .year-row {
        grid-template-columns: 2.5rem 1fr;
        gap: 0 0.75rem;
    }

    .year-marker {
        font-size: 0.6rem;
    }
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
    border-radius: 4px;
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
