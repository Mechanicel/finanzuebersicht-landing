import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://finanzuebersicht.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
