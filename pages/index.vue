<template>
    <BlogPage :posts="paginatedPosts" :current-page="1" :total-pages="totalPages" />
</template>

<script setup lang="ts">
import BlogPage from '~/components/BlogPage.vue';
import { computed } from 'vue';

const postsPerPage = 5;

const { data: posts, error } = await useAsyncData('posts', async () => {
    const all = await queryCollection('blog').all();

    const filtered = all.filter(post => {
        const validDate = typeof post?.date === 'string' && !isNaN(new Date(post.date).getTime());
        const isPublished = post?.published !== false;
        return validDate && isPublished;
    });

    return filtered.sort((a, b) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return bTime - aTime;
    });
});

if (error.value) {
    console.error('❌ Failed to fetch posts:', error.value);
}

const totalPages = computed(() =>
    posts.value?.length ? Math.ceil(posts.value.length / postsPerPage) : 0
);

const paginatedPosts = computed(() =>
    posts.value?.length ? posts.value.slice(0, postsPerPage) : []
);

useHead({
    title: "Shaswata's Blog",
    meta: [
        { name: 'description', content: "Shaswata's blog with articles on various topics." },
        { name: 'author', content: 'Shaswata Das' }
    ]
});
</script>
