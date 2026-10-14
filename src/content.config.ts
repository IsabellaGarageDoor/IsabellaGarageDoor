import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Skip files starting with "_" (drafts), matching the old content collections behavior
  loader: glob({ pattern: ['**/*.{md,mdx}', '!**/_*'], base: './src/content/blog' }),
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
