// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domain updated to healingwithhandwriting.in per deployment request
  // (2026-07-23) — was handwriting-speaks.com.
  site: 'https://healingwithhandwriting.in',
  // Static output — deploys as plain files to GoDaddy / Hostinger / Netlify / Vercel.
  output: 'static',
  compressHTML: true,
  // NOTE: @astrojs/sitemap 3.7.3 crashes against this Astro 4.16.19 patch
  // (internal `_routes` shape mismatch in its astro:build:done hook — not
  // this project's code). With only 5 fixed pages and no dynamic routes,
  // a hand-written public/sitemap-index.xml (kept in sync with NAV_LINKS)
  // is simpler and more robust than fighting a broken integration.
});
