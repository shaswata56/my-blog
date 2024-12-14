<template>
    <div class="home">
        <Theme />
        <div class="content-wrapper">
            <div class="main-content">
                <header>
                    <h2 class="text-3xl font-bold name">Shaswata's Blog</h2>
                </header>
                <div class="post-list">
                    <li v-for="post in posts" :key="post._path">
                        <div class="post-title">
                            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                        </div>
                        <div class="timeframe">
                            {{ post.date }}
                        </div>
                    </li>
                </div>
                <FooterSection />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData(() =>
    queryContent('/blog').sort({ date: -1 }).find()
);
</script>

<style scoped>
.home {
    max-width: 900px;
    margin: 0 auto;
    padding: 5rem;
}

.content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.main-content {
    flex: 1;
    position: relative;
    line-height: 1.3;
    font-size: 14px;
    margin: 0 0 10px;
    text-align: justify;
}

header {
    margin-bottom: 3rem;
}

li {
    margin-bottom: 1.5rem;
    display: flex;
}

.timeframe {
    text-align: right;
    flex-direction: flex-end;
}

@media (max-width: 768px) {
    .home {
        padding: 4rem 1.5rem;
    }

    .content-wrapper {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0 5%;
    }

    header {
        margin-bottom: 1rem;
    }
}
</style>
