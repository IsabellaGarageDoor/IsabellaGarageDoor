import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://isabellagaragedoor.com',
  output: 'static',
  legacy: {
    collections: true,
  },
  integrations: [tailwind(), sitemap(), react(), alpinejs()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
    remarkPlugins: [],
    rehypePlugins: [],
    smartypants: false,
  },
});