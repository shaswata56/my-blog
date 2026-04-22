<template>
  <div class="home">
    <ScrollProgress />
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
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "Shaswata's Blog RSS Feed",
      href: "/feed.xml",
    },
  ],
  meta: [
    {
      "http-equiv": "Content-Security-Policy",
      content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' data: https:; connect-src 'self' ws: wss: https://api.netlify.com https://api.github.com;",
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
  ogImage: "https://blog.shaswata.me/profile_picture.jpg",
  ogUrl: "blog.shaswata.me",
  twitterCard: "summary_large_image",
  twitterTitle: "Shaswata's Blog'",
  twitterDescription: "Blog of Shaswata Das",
  twitterImage: "https://blog.shaswata.me/profile_picture.jpg",
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&display=swap');
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css");

@import 'prismjs/themes/prism.css';
@import 'prismjs/themes/prism-okaidia.css';


:root {
  --background-color: #1a1917;
  --accent-color: #242220;
  --border-color: #4a4440;
  --link-color: #c4a67a;
  --text-color: #d4c9bb;
  --accent-text-color: #7a6a5a;
  --text-color-secondary: #7a6a5a;
  --link-color-hover: #d9bc94;
  --box-shadow: none;
  --transition-duration: 0.2s;
}

[data-theme="light"] {
  --background-color: #faf9f7;
  --accent-color: #f0ece6;
  --border-color: #d6cfc8;
  --link-color: #a07840;
  --text-color: #2a2420;
  --accent-text-color: #7a6a5a;
  --text-color-secondary: #7a6a5a;
  --link-color-hover: #c4891e;
  --box-shadow: none;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: clip;
  font-family: "Merriweather", "SolaimanLipi", "NikoshBAN", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
  background-color: var(--background-color);
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
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-weight: 500;
}

h1,
h2,
h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  color: var(--text-color);
  line-height: 1.8;
  font-size: 1rem;
  margin: 0 0 1rem;
  text-align: start;
}

section {
  margin-bottom: 2rem;
}

h3 {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
}

.home {
  max-width: 680px;
  margin: 0 auto;
  padding: 4rem 2rem;
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
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
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
  font-size: inherit;
}

.rendered h1 {
  color: var(--text-color);
  font-size: 1.8rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.rendered h2 {
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 1.3;
}

.rendered h3 {
  font-size: 1.3rem;
  line-height: 1.3;
}

.rendered h4 {
  font-size: 1.1rem;
  color: var(--link-color-hover);
  padding: 0.25rem 0;
}

.rendered p {
  line-height: 1.8;
  font-size: 1.15rem;
  margin-bottom: 1.4rem;
}

.rendered p * {
  justify-content: center;
}

.rendered h2,
.rendered h3 {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
}

.rendered h2::before {
  content: '·';
  color: var(--link-color);
  margin-right: 0.4rem;
  font-weight: 400;
}

.rendered hr {
  color: var(--border-color) !important;
  padding: 1rem 0;
}

.rendered li {
  list-style: disc;
  font-size: 1.1rem;
  line-height: 1.7;
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

.rendered blockquote {
  margin: 1.5rem 0;
  padding: 0 0 0 1.25rem;
  border-left: 2px solid var(--border-color);
  color: var(--accent-text-color);
  font-style: italic;
}

.rendered blockquote p {
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 0;
}

@media (min-width: 1100px) {
  .rendered blockquote {
    position: relative;
    border-left: none;
    padding: 0;
    margin: 2rem 0;
  }

  .rendered blockquote::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 0.3rem;
    bottom: 0.3rem;
    width: 2px;
    background-color: var(--border-color);
  }
}

@media (max-width: 768px) {
  .home {
    padding: 3rem 1.25rem;
  }

  .content-wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  header {
    margin-bottom: 2rem;
  }

  pre {
    font-size: 0.85rem;
  }

  .rendered p {
    font-size: 1.05rem;
  }

  .rendered img {
    max-width: 100%;
  }
}

.post-item {
  opacity: 0;
  transform: translateY(6px);
  animation: postReveal 0.35s ease forwards;
}

.post-item:nth-child(1) { animation-delay: 0.05s; }
.post-item:nth-child(2) { animation-delay: 0.10s; }
.post-item:nth-child(3) { animation-delay: 0.15s; }
.post-item:nth-child(4) { animation-delay: 0.20s; }
.post-item:nth-child(5) { animation-delay: 0.25s; }

@keyframes postReveal {
  to { opacity: 1; transform: none; }
}

.tag {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-size: 0.62rem;
  color: var(--accent-text-color);
  background: var(--accent-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  padding: 0.15rem 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.tag:hover {
  border-color: var(--link-color);
  color: var(--link-color);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
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
