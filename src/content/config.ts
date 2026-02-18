import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.string().optional(),
    slug: z.string().optional(), // Make slug optional
    author: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { blog };

