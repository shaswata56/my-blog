<template>
    <BlogPage :posts="posts" />
</template>

<script setup>
import BlogPage from '~/components/BlogPage.vue';
import BlogHeader from "~/components/BlogHeader.vue";
import FooterSection from '~/components/FooterSection.vue';

const { data: posts } = await useAsyncData(() =>
    queryContent('/').sort({ date: -1 }).find()
);
</script>

<style scoped></style>
