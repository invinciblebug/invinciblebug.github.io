// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://invinciblebug.github.io',
  integrations: [sitemap(), markdoc()],

  vite: {
    plugins: [tailwindcss()]
  }
});