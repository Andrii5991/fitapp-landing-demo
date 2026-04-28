import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
const site = process.env.SITE_URL ?? 'https://pushlab.app';

export default defineConfig({
  site,
  integrations: [sitemap()],
});
