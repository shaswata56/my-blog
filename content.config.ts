// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: '*.md', // files are directly in content/
            schema: z.object({
                title: z.string().optional(),
                date: z.string().optional(),
                published: z.boolean().optional()
            }),
            path: '/posts/:slug' // 🔥 this makes post.path = /posts/slug
        })
    }
});
