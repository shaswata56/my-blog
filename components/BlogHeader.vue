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
.mini-content {
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}

.location {
  font-size: 0.9rem;
  line-height: 1rem;
  vertical-align: middle;
}

.image-container {
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 150px;
  align-items: flex-end;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.social-link {
  font-size: 27px;
  background-color: var(--accent-color);
  color: var(--accent-text-color);
  margin: 0 4px 0 0;
  border-radius: 5px;
  display: flex;
  min-height: 36px;
  min-width: 36px;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-link:hover {
  transform: translateY(-1px);
  box-shadow: var(--box-shadow);
  background-color: var(--link-color-hover);
  color: var(--accent-color);
}

.social-links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .home {
    padding: 2rem;
  }

  .main-content {
    padding-right: 0;
  }

  .image-container {
    position: static;
    width: 150px;
    height: 150px;
    margin: 0 auto 2rem;
  }

  header {
    flex-direction: column;
    align-items: center;
  }

  .left-side {
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
  }

  .tech-buttons {
    justify-content: center;
  }

  .tech-list {
    justify-content: center;
  }
}
</style>