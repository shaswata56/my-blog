<template>
    <BlogPage :posts="paginatedPosts" :current-page="currentPage" :total-pages="totalPages" />
</template>

<script setup>
import BlogPage from '~/components/BlogPage.vue'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const currentPage = parseInt(route.params.page, 10) || 1;
const postsPerPage = 4;

const { data: posts } = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);

const totalPages = computed(() =>
    posts.value && posts.value.length > 0
        ? Math.ceil(posts.value.length / postsPerPage)
        : 0
);

const paginatedPosts = computed(() => {
    if (!posts.value) return [];
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.value.slice(start, end);
});

// Redirect if invalid page
if (isNaN(currentPage) || currentPage <= 1 || (totalPages.value > 0 && currentPage > totalPages.value)) {
    router.push('/');
}

useHead({
    title: "Shaswata's Blog",
    meta: [
        { name: 'description', content: "Shaswata's blog with articles on various topics." },
        { name: 'author', content: 'Shaswata Das' },
    ],
});
</script>

<style scoped></style>
