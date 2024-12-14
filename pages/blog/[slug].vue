<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <article v-html="post.body"></article>
    </div>
</template>

<script setup>
const { params } = useRoute();
const { data: post } = await useAsyncData(() =>
    queryContent(`/blog/${params.slug}`).findOne()
);
</script>