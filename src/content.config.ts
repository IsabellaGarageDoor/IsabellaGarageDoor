import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts can contain {{price:…}} tokens that are filled in from src/data/pricing.ts
// while the markdown is rendered. Astro caches rendered posts, and that cache only
// notices changes to the post files themselves, so this wrapper clears the cache
// whenever pricing.ts changes. That way a price edit always reaches the blog.
const posts = glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/blog' });

const blogLoader = {
  ...posts,
  name: 'blog-with-prices',
  async load(context: Parameters<typeof posts.load>[0]) {
    const pricingHash = createHash('sha1').update(readFileSync('./src/data/pricing.ts')).digest('hex');
    if (context.meta.get('pricing-hash') !== pricingHash) {
      context.store.clear();
      context.meta.set('pricing-hash', pricingHash);
    }
    return posts.load(context);
  },
};

const blog = defineCollection({
  // Posts whose file name starts with "_" are drafts and are not published
  loader: blogLoader,
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.string().optional(),
    slug: z.string().optional(), // If set, this becomes the post's id (URL)
    author: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { blog };
