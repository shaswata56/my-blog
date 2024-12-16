<template>
    <div class="rendered">
        <ContentDoc :path="`/${params.slug}`" />
    </div>
</template>

<script setup>
const { params } = useRoute();
const { data: post } = await useAsyncData(() =>
    queryContent(`/${params.slug}`).findOne()
);

useHead({
    title: post.value.title,
    meta: [
        { name: 'author', content: 'Shaswata Das' }
    ]
});
</script>

<style scoped>
</style>
