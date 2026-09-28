# Blog & CMS for pushlab.app — design

Date: 2026-09-28
Status: approved design, pending implementation plan

## Context

pushlab.app is the Astro 4 marketing site for PushLab (workout tracking app by DOARBO). The app launches on iOS and Android in roughly 1–2 months. The site already has baseline SEO/GEO: AI crawlers allowed in `robots.txt`, sitemap, `llms.txt`, `pricing.md`, JSON-LD, and hreflang for the five landing locales.

Articles today are hand-built `.astro` pages with hand-written JSON-LD and a hardcoded "Related" list in `ContentGuideLayout.astro`. This does not scale, and every download CTA on the site points nowhere (`#` / `/#`).

This spec covers the first of three sub-projects:

1. **Blog & CMS** (this spec)
2. SEO/GEO content strategy and new articles (separate spec)
3. Marketing playbook: Reddit, ASO, launch channels, AI-visibility monitoring (separate doc)

## Goals

- Publish an article by adding one Markdown file and pushing to git.
- Every article gets correct SEO/GEO metadata (JSON-LD, author, dates, breadcrumbs, FAQ/HowTo) generated from front-matter, not hand-written.
- Pre-launch, every CTA collects waitlist signups.
- Existing article URLs keep working unchanged.
- English only now; adding a translation later requires no URL or schema changes.

## Non-goals

- Writing new articles (sub-project 2).
- Translating articles.
- A visual/hosted CMS, comments, search, pagination, newsletters.
- Storing waitlist emails ourselves (a form tool does this).

## Decisions

| Decision | Choice |
|---|---|
| Authoring | Markdown files in the repo (Astro content collections); git push to publish |
| Structure | One `articles` collection; URL section derived from `type` |
| Languages | English now; `lang` + `translationKey` fields reserved for later |
| Waitlist | External simple form tool (Tally or Google Forms), linked by URL |
| Download CTAs | Point to the waitlist while pre-launch |

## 1. Content model

Uses classic Astro 4 content collections in `src/content/config.ts`.

### `articles` collection

Files: `src/content/articles/<lang>/<slug>.md`. The slug is the filename.

Front-matter (validated with zod; invalid or missing fields fail the build):

| Field | Type | Notes |
|---|---|---|
| `title` | string, ≤ 65 chars | `<title>` / search-result title |
| `heading` | string | Page H1 |
| `description` | string, 50–160 chars | Meta description, OG, RSS, cards |
| `type` | `guide` \| `compare` \| `blog` | Decides the URL section |
| `lang` | `en` (enum of supported locales), default `en` | |
| `translationKey` | string, optional | Same value across translations of one article |
| `publishedAt` | date | |
| `updatedAt` | date, optional | Shown as "Last updated"; defaults to `publishedAt` |
| `author` | reference to `authors` | |
| `tags` | string[], default `[]` | Used for related articles |
| `faq` | `{ question, answer }[]`, optional | Rendered and emitted as `FAQPage` |
| `steps` | `{ name, text }[]`, optional | Emitted as `HowTo`; the body still contains the readable steps |
| `ogImage` | string, optional | Path under `public/`; defaults to `/og-image.png` |
| `draft` | boolean, default `false` | Excluded from production builds, RSS, sitemap, `llms.txt` |

The body is plain Markdown (GFM tables supported). No MDX in this scope. The first paragraph should be a direct 40–60 word answer; this is a writing guideline, not enforced.

### `authors` collection

Files: `src/content/authors/<id>.json`, with fields `name`, `role`, `bio`, optional `avatar`, and optional `links` (`{ label, url }[]`). Initial entry: one DOARBO founder/team author (content supplied by the user during implementation; placeholder text allowed until then).

## 2. Routing

A shared helper `src/lib/articles.ts` owns:

- `sectionForType`: `guide → guides`, `compare → compare`, `blog → blog`
- `articleUrl(entry)`: `/${lang}/${section}/${slug}/`
- `getPublishedArticles(lang?)`: filters out drafts when `import.meta.env.PROD`, then sorts newest first by `updatedAt ?? publishedAt`
- `getRelatedArticles(entry, n = 3)`: same type or shared tags first, then most recent

Pages:

| Route | File | Content |
|---|---|---|
| `/en/{guides,compare,blog}/<slug>/` | `src/pages/[locale]/[section]/[slug].astro` | Article; `getStaticPaths` only emits valid section/type pairs |
| `/en/blog/` | `src/pages/[locale]/blog/index.astro` | All articles, all types |
| `/en/guides/`, `/en/compare/` | `src/pages/[locale]/[section]/index.astro` | Articles of that type |
| `/en/authors/<id>/` | `src/pages/[locale]/authors/[id].astro` | Author bio and their articles |
| `/en/blog/rss.xml` | `src/pages/[locale]/blog/rss.xml.ts` | RSS via `@astrojs/rss` |

Index and author pages are generated only for locales that have at least one published article (currently `en` only).

### Migration of existing pages

| Current file | Result |
|---|---|
| `src/pages/en/guides/how-to-log-workouts.astro` | → `articles/en/how-to-log-workouts.md` (`type: guide`, with `steps` and `faq`) |
| `src/pages/en/guides/track-workout-progress.astro` | → `articles/en/track-workout-progress.md` (`type: guide`) |
| `src/pages/en/compare/workout-log-vs-notes.astro` | → `articles/en/workout-log-vs-notes.md` (`type: compare`) |
| `src/pages/en/what-is-pushlab.astro` | Stays `.astro` (product definition page); switches to `ArticleLayout` |
| `src/pages/en/changelog.astro` | Unchanged |
| `src/layouts/ContentGuideLayout.astro` | Deleted after migration |

URLs are identical before and after, so no redirects are needed. Copy is moved verbatim, including lines that are now stale (such as "Named competitor pages can follow later"); content edits belong to sub-project 2.

## 3. Article layout

`src/layouts/ArticleLayout.astro` wraps `BaseLayout` with `ogType="article"` and reuses the existing `guide-page` / `legal-article` styles. Top to bottom:

1. `SiteHeader` / `SkipLink`
2. Breadcrumbs: Home › Guides|Compare|Blog › Title
3. Eyebrow (type label), H1 (`heading`)
4. Meta line: author link · Published date · Updated date (when it differs) · reading time (words / 200, rounded up)
5. Rendered Markdown body
6. `WaitlistCta` block
7. FAQ (when `faq` is present)
8. Related articles (3 cards)
9. Author box (name, role, bio, link to author page)
10. `SiteFooter`

`ArticleLayout` accepts props (title, heading, description, dates, author, faq, steps, type), so the `.astro`-based "What is PushLab" page uses it too. The article route maps the collection entry to these props.

Index pages use a simple card list: type label, heading, description, and date.

## 4. SEO/GEO generated from front-matter

`src/lib/article-schema.ts` builds JSON-LD from the article props:

- `BlogPosting` for `type: blog`, `Article` for `guide` and `compare`: headline, description, `datePublished`, `dateModified`, `author` (`Person` with author page URL), `publisher` (reference to the site `Organization` `@id` `https://pushlab.app/#organization`), `image`, `mainEntityOfPage`, `inLanguage`
- `BreadcrumbList`
- `FAQPage` when `faq` is present
- `HowTo` when `steps` is present
- Author pages: `ProfilePage` with a `Person`

Other outputs:

- **hreflang:** for articles that share a `translationKey`, emit `alternates` for each available `lang` plus `x-default` (English). With English only, no alternates are emitted.
- **RSS:** `<link rel="alternate" type="application/rss+xml">` on blog pages.
- **`llms.txt`:** replace `public/llms.txt` with the endpoint `src/pages/llms.txt.ts`. It keeps the current static sections verbatim and generates the "Key pages" list from published articles (grouped by type), plus the fixed landing, support and legal pages.
- **Sitemap:** already automatic via `@astrojs/sitemap`; drafts are never built, so they never appear.

## 5. Navigation

- Add `nav.blog` to all five locales in `src/lib/i18n.ts` (the label is translated, but the link always goes to `/en/blog/` until translated articles exist).
- Header: add the Blog link to the desktop and mobile nav in `SiteHeader.astro`.
- Footer: add Blog, Guides, and Compare links in `SiteFooter.astro`.

## 6. Waitlist and download CTAs

New config `src/lib/launch.ts`:

```ts
export const LAUNCH = {
  status: 'prelaunch', // 'prelaunch' | 'live'
  waitlistUrl: '',     // Tally / Google Forms URL, supplied by the user
  appStoreUrl: '',
  playStoreUrl: '',
} as const;
```

While `status === 'prelaunch'`:

- The hero primary CTA (`Hero.astro`), the CTA band button (`CtaBand.astro`) and the header "Get the app" dialog all lead to `waitlistUrl`, opened in a new tab with `rel="noopener"`.
- The header dialog replaces the two store buttons and the QR placeholder with a "Join the waitlist" button and a one-line pre-launch explanation.
- `WaitlistCta` (the article block) shows a heading, one sentence, and a button to `waitlistUrl`.
- New i18n keys for the waitlist copy in all five locales (`waitlist.title`, `waitlist.sub`, `waitlist.button`, `waitlist.dialogNote`), including the `data-i18n` attributes the client-side language switcher uses.
- If `waitlistUrl` is empty, buttons fall back to `/fitness-tracker/support` and the build prints a warning, so a missing URL is visible but never produces a dead link.

When `status === 'live'`, CTAs use the store URLs and the dialog shows the store buttons again. The QR image remains a placeholder (out of scope).

## 7. Verification

- `npx astro check` and `npm run build` pass.
- `scripts/verify-build.mjs` (run with `npm run verify` after build) asserts against `dist/`:
  - these pages exist: `/en/guides/how-to-log-workouts/`, `/en/guides/track-workout-progress/`, `/en/compare/workout-log-vs-notes/`, `/en/what-is-pushlab/`, `/en/blog/`, `/en/blog/rss.xml`, `/llms.txt`
  - every article page has at least one `application/ld+json` block, each parses as JSON, and one has `@type` `Article` or `BlogPosting`
  - no page contains `href="#"` or `href="/#"` on a CTA (the hero, CTA band and dialog buttons)
  - an example draft article kept in the repo (`articles/en/example-draft.md`, `draft: true`, doubles as a writing template) is absent from `dist/`, the RSS feed and `llms.txt`
- Manual check in the dev server: an article page, the blog index, the header dialog, and the language switch on the landing page.

## Open inputs from the user (not blockers)

- Waitlist form URL (Tally or Google Forms).
- Author name, role, and short bio.
