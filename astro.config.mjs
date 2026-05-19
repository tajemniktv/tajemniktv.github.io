import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tajemniktv.github.io',
  base: '/', // Update base to repo name if deploying under /REPO/ e.g. '/my-repo'
  vite: {
    plugins: [tailwindcss()]
  }
});
