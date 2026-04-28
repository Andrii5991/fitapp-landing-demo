# FitApp — Marketing landing page specification

## Purpose

Single-page marketing site that explains what FitApp does, builds trust, and drives installs (App Store / Google Play) or waitlist signups. Structure and narrative rhythm are informed by category-leading fitness landing patterns (see reference: [Hevy](https://www.hevyapp.com/))—hero promise, proof, feature depth, platforms, and repeated CTAs—without copying competitor copy or trademarks.

## Audience

- Primary: people who lift or train regularly and want simple logging, routines, and progress visibility.
- Secondary: coaches or training partners evaluating whether the product fits their workflow (optional future section).

## Goals & success metrics (adjust to your launch)

| Goal | Example metric |
|------|----------------|
| Install / signup | Click-through on store buttons or primary CTA |
| Understanding | Time on page, scroll depth to mid-page |
| Trust | Clicks to reviews, press, or social proof |

## Information architecture (page order)

1. **Header** — Logo, primary nav (Product, Community, Support—placeholder anchors), Log in (optional), **Get the app** CTA.
2. **Hero** — Headline stack (three short pillars), supporting line, primary + secondary actions (Download / Watch demo if you add video later), rating/social proof strip.
3. **Trust / “Featured on”** — Logo strip (placeholders until you have real logos).
4. **Feature band: Train** — Logging, routines, set types, rest timers, notes (bullets).
5. **Feature band: Progress** — Charts, PRs, history, 1RM (bullets).
6. **Feature band: Together** — Social/follow/compare if applicable; otherwise “stay accountable” framing.
7. **Platforms** — Phone + watch + web/desktop summary (three columns).
8. **Stats / community scale** — Large numbers + store ratings (replace with real data when available).
9. **Final CTA** — Repeat download + short reassurance line.
10. **Footer** — Product, company, legal, social placeholders.

## Content principles

- **Headlines:** outcome-first (“Train smarter,” “See the trend,” “Stay consistent”)—tune to your real positioning.
- **Bullets:** one idea per line; avoid jargon unless your audience expects it (e.g. RPE, 1RM).
- **Proof:** use real App Store / Play ratings and counts when you ship; until then, use neutral placeholder text clearly marked in copy or replace in `index.html`.
- **Legal:** replace footer links with your real Terms, Privacy, and entity name before production.

## Technical delivery

- **Stack:** [Astro](https://astro.build/) 4 + TypeScript. Static output is a folder of HTML/CSS/JS—deploy anywhere (Netlify, Vercel, Cloudflare Pages, S3, etc.).
- **Entry:** `src/pages/index.astro` (route `/`). Shared chrome lives in `src/layouts/BaseLayout.astro`; global tokens and styles in `src/styles/global.css`.
- **Assets:** No external images required for v1; hero uses CSS and abstract “device” frame. Swap in screenshots when ready (`public/` + `<Image />` or `<img>`).
- **i18n:** Copy is English-only; structure uses semantic sections for future localization.

## Out of scope (v1)

- Blog/guides CMS, authentication, analytics scripts (add your provider when ready).
- Cookie banner (add when you run tracking in EU/UK).

## Next steps for you

1. Replace **FitApp** naming if your app has a final name.
2. Set real **store URLs** on all download buttons.
3. Add **screenshots** or a short **looping video** in the hero or feature bands.
4. Fill **Featured on** logos and **footer** links.
5. Run `npm run build` and deploy the `dist/` folder (`astro build` output).
