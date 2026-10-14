import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

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
    remarkPlugins: [],
    rehypePlugins: [],
    // This setting allows proper encoding for extended characters
    smartypants: false,
  },
});