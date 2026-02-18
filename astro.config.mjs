import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';


export default defineConfig({
  site: 'http://localhost:4321',
  output: 'server', // Keep this for development
  integrations: [tailwind(), sitemap(), react(), alpinejs()],
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