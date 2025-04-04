<script lang="ts" setup>
const route = useRoute()

// Remove the `/posts` prefix from the path
const slugPath = route.path.replace(/^\/posts/, '')

const { data: post, error } = await useAsyncData(slugPath, () => {
    return queryCollection('blog').path(slugPath).first()
})

if (error.value) {
    console.error('❌ Failed to load post:', error.value)
}

useHead({
    title: post.value?.title || 'Post Not Found',
    meta: [{ name: 'author', content: 'Shaswata Das' }]
})
</script>

<template>
    <template v-if="post">
        <div class="rendered">
            <h1>{{ post.title }}</h1>
            <ContentRenderer :value="post" />
        </div>
    </template>

    <template v-else>
        <div class="text-center text-red-600 my-10">
            <h1>404 - Post Not Found</h1>
            <p v-if="error">An error occurred while fetching the post.</p>
            <p v-else>The post you're looking for does not exist.</p>
        </div>
    </template>
</template>

<style scoped></style>
