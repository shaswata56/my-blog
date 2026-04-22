<template>
    <header>
        <h2 class="text-3xl font-bold name">Shaswata's Blog</h2>
        <div class="mini-content">
        <p class="text-base">Things came to my mind, which I write here (sometimes).</p>
      </div>
      <div class="social-links">
        <NuxtLink
          to="/"
          class="social-link"
        >
          <font-awesome-icon icon="fa-solid fa-home" title="Home" titleId="home-icon-title"/>
        </NuxtLink>
        <NuxtLink
          to="/archive"
          class="social-link"
        >
          <font-awesome-icon icon="fa-solid fa-box-archive" title="Archive" titleId="archive-icon-title"/>
        </NuxtLink>
      </div>
    </header>
</template>

<script>
</script>

<style scoped>
.name {
  font-family: "Merriweather", serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.mini-content {
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
}

.mini-content p {
  font-size: 0.85rem;
  font-family: "Fira Mono", "Courier New", monospace;
  color: var(--accent-text-color);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.social-links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
}

.social-link {
  font-size: 1.1rem;
  background-color: transparent;
  color: var(--accent-text-color);
  margin: 0 0.75rem 0 0;
  border-radius: 0;
  min-height: unset;
  min-width: unset;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--link-color-hover);
  transform: translateY(-3px);
  box-shadow: none;
  background-color: transparent;
}

.social-link.router-link-active {
  color: var(--link-color);
}
</style>