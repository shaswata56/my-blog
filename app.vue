<template>
  <div class="home">
    <Theme />
    <div class="content-wrapper">
      <div class="main-content">
        <BlogHeader />
        <NuxtPage />
        <FooterSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Shaswata's Blog",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    {
      name: "description",
      content:
        "Blog of Shaswata Das. Software Enginner, Developer, Hacker. Currently Software Engineer at Orbitax. B.Eng from Shahjalal University of Science and Technology, Sylhet, Bangladesh.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/icon",
      href: "/favicon.ico",
    },
  ],
});
useSeoMeta({
  title: "Shaswata's Blog",
  ogTitle: "Shaswata's Blog",
  description:
    "Blog of Shaswata Das. Software Enginner, Developer, Hacker. Currently Software Engineer at Orbitax. B.Eng from Shahjalal University of Science and Technology, Sylhet, Bangladesh.",
  ogDescription:
    "Blog of Shaswata Das. Software Enginner, Developer, Hacker. Currently Software Engineer at Orbitax. B.Eng from Shahjalal University of Science and Technology, Sylhet, Bangladesh.",
  ogImage: "https://shaswata.me/assets/profile_picture.DNMGGUvM.jpg",
  ogUrl: "blog.shaswata.me",
  twitterCard: "summary_large_image",
  twitterTitle: "Shaswata's Blog'",
  twitterDescription: "Blog of Shaswata Das",
  twitterImage:
    "https://blog.shaswata.me/assets/profile_picture.DNMGGUvM.jpg",
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css");

@import 'prismjs/themes/prism.css';
@import 'prismjs/themes/prism-okaidia.css';


:root {
  --background-color: #1c1b19;
  --accent-color: #3a3432;
  --border-color: #6d4f3a;
  --link-color: #9e8a6d;
  --text-color: #d3c8bd;
  --accent-text-color: #d3c8bd;
  --link-color-hover: #c4a67a;
  --box-shadow: 0 5px 10px rgba(210, 190, 170, 0.2);
  --transition-duration: 0.3s;
}

[data-theme="light"] {
  --background-color: #f7f9fb;
  --accent-color: #dce7f2;
  --border-color: #a5c3dc;
  --link-color: #7894ac;
  --text-color: #35475a;
  --accent-text-color: #5c7d99;
  --link-color-hover: #4685ac;
  --box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Merriweather", "SolaimanLipi", "NikoshBAN", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--text-color);
  background-color: var(--background-color);
  scroll-behavior: smooth;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

::-moz-selection {
  color: var(--background-color);
  background: var(--border-color);
}

::selection {
  color: var(--background-color);
  background: var(--border-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: color var(--transition-duration) ease;
}

a:hover {
  color: var(--link-color-hover);
  text-decoration: none;
}

ul li a {
  line-height: 1.5;
  font-size: 15px;
  font-family: "ui-sans-serif", "SolaimanLipi", "NikoshBAN", system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 500;
}

h1,
h2,
h3 {
  color: var(--link-color-hover);
  margin-bottom: 1rem;
  font-weight: 600;
}

h2 {
  color: #ffffff;
}

[data-theme="light"] h2 {
  color: #000000;
}

p {
  color: var(--text-color);
  line-height: 1.5;
  font-size: 14px;
  margin: 0 0 10px;
  text-align: start;
}

section {
  margin-bottom: 2rem;
}

.name,
h3 {
  font-family: "ui-sans-serif", "SolaimanLipi", "NikoshBAN", system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

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
  max-width: 100%;
}

header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

.rendered * {
  justify-content: center;
  max-width: 100%;
}

.rendered *,
.rendered *::before,
.rendered *::after {
  box-sizing: border-box;
}

.rendered img {
  max-width: 500px;
  max-height: 600px;
  padding: 1rem 0 1rem 0;
  justify-self: center;
}

.rendered strong {
  font-family: "ui-sans-serif", "SolaimanLipi", "NikoshBAN", system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1.3rem;
}

.rendered h1 {
  color: var(--link-color-hover);
  font-size: 1.6rem;
}

.rendered h2 {
  color: var(--link-color-hover);
  font-size: 1.5rem;
}

.rendered h3 {
  font-size: 1.4rem;
}

.rendered h4 {
  font-size: 1.3rem;
  color: var(--link-color-hover);
  padding: .5rem 0 .5rem 0;
}

.rendered p {
  line-height: 2;
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
}

.rendered p * {
  justify-content: center;
}

.rendered h1,
.rendered h2,
.rendered h3 {
  font-family: "ui-sans-serif", "SolaimanLipi", "NikoshBAN", system-ui, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.rendered hr {
  color: var(--border-color) !important;
  padding: 1rem 0 1rem 0;
}

.rendered li {
  list-style: disc;
  font-size: 1.2rem;
}

.rendered ol {
  list-style: upper-roman;
}

.rendered ul,
.rendered ol {
  padding: 0 0 0 1.2rem;
}

.rendered p code,
.rendered li code {
  color: var(--link-color-hover);
}

.rendered pre code {
  max-width: 100%;
  text-wrap: auto;
  text-wrap-mode: wrap;
  padding: 2rem 0 2rem 0;
}

.rendered .shiki code {
  text-wrap: nowrap;
  color: unset;
}

.rendered .shiki {
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  white-space: pre;
  max-width: 100%;
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

  pre {
    font-size: 0.85rem;
  }

  .rendered p {
    line-height: 2;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .rendered img {
    max-width: 320px;
  }
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 13px;
  background-color: var(--background-color);
}

::-webkit-scrollbar {
  width: 12px;
  background-color: var(--background-color);
}

::-webkit-scrollbar-thumb {
  border-radius: 13px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: var(--accent-text-color);
}
</style>
