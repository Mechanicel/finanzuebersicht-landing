import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://finanzuebersicht-landing.vercel.app',
  compressHTML: true,
  devToolbar: { enabled: false },
  build: {
    inlineStylesheets: 'auto',
  },
});
