import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://isabellagaragedoor.com',
  output: 'server', // Keep this for development
  adapter: netlify(), 
  integrations: [ sitemap(), react(), alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
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