// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { PAGES } from './src/config/pages.ts';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://princesswinnie1122.github.io',
  base: '/',
  integrations: [sitemap({
    filter: (page) => {
      const route = new URL(page).pathname.split('/').filter(Boolean)[0] || 'home';
      return PAGES[route]?.isActive === true;
    },
  })],
});