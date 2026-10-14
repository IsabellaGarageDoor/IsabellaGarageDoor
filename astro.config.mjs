import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { satteri } from '@astrojs/markdown-satteri';
import { articleTitlePlugin } from './src/lib/markdown-article-title.mjs';

export default defineConfig({
  site: 'https://isabellagaragedoor.com',
  // Fully static site: every page is pre-built HTML (Netlify settings live in netlify.toml)
  output: 'static',
  // Build /about/our-story as about/our-story.html so URLs keep their current
  // no-trailing-slash form (matches existing links and canonical tags)
  build: { format: 'file' },
  integrations: [sitemap(), react()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes
      theme: 'github-light',
    },
    processor: satteri({
      // Keep quotes/dashes exactly as written in the posts (no smart punctuation)
      features: { smartPunctuation: false },
      // Blog posts: move the "# Heading" into the article header (BlogLayout)
      hastPlugins: [articleTitlePlugin],
    }),
  },
});