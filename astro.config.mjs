import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

const site = process.env.SITE_URL ?? 'https://pushlab.app';

export default defineConfig({
  site,
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    sitemap({
      filter: (page) =>
        !page.includes('/keystatic') &&
        !page.includes('/api/keystatic') &&
        !page.includes('/reset-password') &&
        !page.includes('/verify-email') &&
        !page.includes('/auth/'),
    }),
  ],
  redirects: {
    '/': '/en/',
  },
});
