<template>
    <BlogPage :posts="paginatedPosts" :current-page="1" :total-pages="totalPages" />
</template>

<script setup>
import BlogPage from '~/components/BlogPage.vue'
import { computed } from 'vue';

const postsPerPage = 4;
const { data: posts } = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);

const totalPages = computed(() =>
    posts.value && posts.value.length > 0
        ? Math.ceil(posts.value.length / postsPerPage)
        : 0
);

const paginatedPosts = computed(() =>
    posts.value && posts.value.length > 0
        ? posts.value.slice(0, postsPerPage)
        : []
);

useHead({
    title: "Shaswata's Blog",
    meta: [
        { name: 'description', content: "Shaswata's blog with articles on various topics." },
        { name: 'author', content: 'Shaswata Das' },
    ],
});
</script>


<style scoped></style>