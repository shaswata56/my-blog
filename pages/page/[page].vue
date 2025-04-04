<template>
    <BlogPage :posts="paginatedPosts" :current-page="currentPage" :total-pages="totalPages" />
</template>

<script setup lang="ts">
import BlogPage from '~/components/BlogPage.vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const currentPage = parseInt(route.params.page as string, 10) || 1;
const postsPerPage = 5;

const { data: posts, error } = await useAsyncData(`page-${currentPage}`, async () => {
    const all = await queryCollection('blog').all();

    const filtered = all.filter(post => {
        const validDate = typeof post?.date === 'string' && !isNaN(new Date(post.date).getTime());
        const isPublished = post?.published !== false;
        return validDate && isPublished;
    });

    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

if (error.value) {
    console.error('❌ Failed to fetch paginated posts:', error.value);
}

const totalPages = computed(() =>
    posts.value?.length ? Math.ceil(posts.value.length / postsPerPage) : 0
);

const paginatedPosts = computed(() => {
    if (!posts.value) return [];
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.value.slice(start, end);
});

// Redirect if invalid page
watchEffect(() => {
  if (
    isNaN(currentPage) ||
    currentPage <= 1 ||
    (posts.value && posts.value.length && currentPage > totalPages.value)
  ) {
    router.push('/');
  }
});

useHead({
    title: `Page ${currentPage} - Shaswata's Blog`,
    meta: [
        { name: 'description', content: "Shaswata's blog with articles on various topics." },
        { name: 'author', content: 'Shaswata Das' }
    ]
});
</script>

<style scoped></style>