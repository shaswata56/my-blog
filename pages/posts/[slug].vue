<script lang="ts" setup>
const route = useRoute()

const slugPath = route.path.replace(/^\/posts/, '')

const { data: post, error } = await useAsyncData(slugPath, () => {
    return queryCollection('blog').path(slugPath).first()
})

if (error.value) {
    console.error('❌ Failed to load post:', error.value)
}

const readingTime = computed(() => useReadingTime(post.value?.body))

const siteUrl = 'https://blog.shaswata.me'
const postUrl = `${siteUrl}/posts${slugPath}`

useSeoMeta({
    title: post.value?.title ?? 'Post Not Found',
    ogTitle: post.value?.title ?? 'Post Not Found',
    description: (post.value?.description as string | undefined) ?? "Blog of Shaswata Das.",
    ogDescription: (post.value?.description as string | undefined) ?? "Blog of Shaswata Das.",
    ogUrl: postUrl,
    ogType: 'article',
    ogImage: 'https://shaswata.me/assets/profile_picture.DNMGGUvM.jpg',
    twitterCard: 'summary',
    twitterTitle: post.value?.title ?? 'Post Not Found',
    twitterDescription: (post.value?.description as string | undefined) ?? "Blog of Shaswata Das.",
})

useHead({
    meta: [{ name: 'author', content: 'Shaswata Das' }]
})
</script>

<template>
    <template v-if="post">
        <TableOfContents :toc="post.body?.toc" />
        <div class="rendered">
            <h1>{{ post.title }}</h1>
            <p class="post-meta">
                <span v-if="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }) }}</span>
                <span class="reading-time"> · {{ readingTime }} min read</span>
            </p>
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

<style scoped>
.post-meta {
    font-size: 0.82rem;
    font-family: "ui-sans-serif", system-ui, sans-serif;
    color: var(--accent-text-color);
    opacity: 0.75;
    margin-top: 0.6rem;
    margin-bottom: 3rem;
    letter-spacing: 0.03em;
}
.reading-time {
    font-style: normal;
}
</style>
