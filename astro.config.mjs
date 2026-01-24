import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tajemniktv.github.io',
  base: '/', // Update base to repo name if deploying under /REPO/ e.g. '/my-repo'
  integrations: [tailwind()]
});
