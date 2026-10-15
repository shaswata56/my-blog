# Shaswata's Blog

Personal blog of Shaswata Das, live at <https://blog.shaswata.me>.

## Stack

- [Nuxt 4](https://nuxt.com) (SSR, statically generated)
- [@nuxt/content 3](https://content.nuxt.com) — file-based markdown content, Shiki syntax highlighting (`github-dark`)
- Tailwind CSS 4 (via `@tailwindcss/vite`, CSS-first config in `assets/css/main.css`)
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/nuxtjs.yml`)

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run generate   # static build into .output/public (what CI deploys)
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # eslint
```

## Content

Posts are markdown files in `content/` (`YYYY-MM-DD-slug.md`), routed to `/posts/:slug` via `content.config.ts`. Frontmatter supports `title`, `date`, `published`, `description`, and `tags`.

Posts can also be edited through [Sveltia CMS](https://github.com/sveltia/sveltia-cms) at `/admin` (config in `public/admin/`).

## Feeds

`server/routes/feed.xml.ts` (RSS) and `server/routes/sitemap.xml.ts` are prerendered at build time and linked from `public/robots.txt`.
