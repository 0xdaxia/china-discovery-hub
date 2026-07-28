import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://chinahub.cc',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Keep noindex pages (tag/search) out of the sitemap to avoid
      // conflicting signals in Google Search Console.
      filter: (page) => !page.includes('/tag/') && !page.includes('/search'),
    }),
    mdx(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
