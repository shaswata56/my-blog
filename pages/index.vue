<template>
    <BlogPage :posts="posts" />
</template>

<script setup>
import BlogPage from '~/components/BlogPage.vue';

const { data: posts } = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);

useHead({
    title: "Shaswata's Blog",
    meta: [
        { name: 'description', content: "Shaswata's blog with articles on various topics." },
        { name: 'author', content: 'Shaswata Das' },
    ]
});
</script>

<style scoped></style>
