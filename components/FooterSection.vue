<template>
  <footer>
    <div class="footer">
      Made by
      <a
        href="https://shaswata.me"
        target="_blank"
        rel="noopener noreferrer"
        class="name-link"
      >
        <b>Shaswata Das</b>
      </a>
      with Nuxt 3 and
      <img :src="heartSrc" alt="heart" class="heart" width="20" height="20" />
    </div>
  </footer>
</template>

<script setup>
const heartSrc = '/RedHeart.png'
</script>

<style scoped>
.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  color: var(--accent-text-color);
  gap: 0.35rem;
}

.footer b,
.footer a {
  color: var(--accent-text-color);
  margin: 0 0.1rem;
}

.name-link:hover b {
  color: var(--link-color-hover);
  text-shadow: 0 0 12px color-mix(in srgb, var(--link-color-hover) 50%, transparent);
}

.heart {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 2px;
  animation: heartbeat 1.2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.25); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.18); }
  56%  { transform: scale(1); }
  100% { transform: scale(1); }
}
</style>
