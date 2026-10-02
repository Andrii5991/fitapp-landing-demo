# How to use Keystatic (PushLab blog)

Keystatic is the article editor. It is not the public site. Readers never need this URL.

- **Local editor:** `http://127.0.0.1:4323/keystatic` (port can change; use the URL `npm run dev` prints)
- **Live editor (after Vercel env is set):** `https://YOUR-DOMAIN/keystatic`
- **Public blog:** `/en/blog/`
- **Public guides:** `/en/guides/`
- **Public compare:** `/en/compare/`

Do not share `/keystatic` in SEO, ads, or `llms.txt`. `robots.txt` already blocks it.

---

## After GitHub login (one-time)

You already created the GitHub App. Next:

1. Confirm `.env` in this repo has all of:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
   - `PUBLIC_KEYSTATIC_GITHUB_REPO=Andrii5991/fitapp-landing-demo`
2. In the GitHub App settings, set the callback to:
   - `http://127.0.0.1:4323/api/keystatic/github/done` (local)
   - `https://YOUR-VERCEL-DOMAIN/api/keystatic/github/done` (live)
3. Put the same four secrets + `PUBLIC_KEYSTATIC_GITHUB_REPO` on **Vercel → Project → Settings → Environment Variables**.
4. Redeploy Vercel.
5. Turn **Deployment Protection** off for the public demo, or `/keystatic` will show Vercel Login.
6. Give the content manager **write access** to `Andrii5991/fitapp-landing-demo`.

Until step 4, saving on Vercel will not work. Local `/keystatic` with GitHub mode writes commits to that repo.

---

## Daily use (content manager)

No clone, no terminal. Browser only.

1. Open `/keystatic` and click **Log in with GitHub**.
2. Open **Articles**.
3. **Create entry** (or open an existing one).
4. Fill the fields (see below).
5. Write the body in the big editor (headings, lists, links, tables).
6. Click **Save**. That creates (or updates) a GitHub commit. It does **not** publish to the live site by itself.
7. Wait for a Vercel deploy of that commit, **or** click **Redeploy** on Vercel if Git is disconnected.
8. Check the live URL (see “Where the article appears”).

To hide an article later: open it, check **Draft**, Save, wait for deploy.

---

## Fields (keep them short)

| Field | What to do |
| --- | --- |
| **Title** | Search title. Max ~65 characters. This also becomes the URL slug. |
| **Summary** | 50–160 characters. Google snippet + blog card. |
| **Type** | `Blog` → `/en/blog/…` · `Guide` → `/en/guides/…` · `Compare` → `/en/compare/…` |
| **Published** | Date shown on the page and in sitemap. |
| **Draft** | **On** = hidden from the site. **Off** = public after the next deploy. New articles start as draft. |
| **FAQ** | Optional. 2–4 real questions. Used for FAQ schema. |
| **Content** | The article. First paragraph should answer the title. Use `##` headings. |

Do not paste extra frontmatter into the content box. Title, summary, type, date, draft, and FAQ already live in the form.

**Authors** is a separate collection. Use it only when you add a writer. Articles currently live under `src/content/articles/en/` (English).

---

## Where the article appears

Slug comes from the title, for example:

- Title: `How to Track Gym Progress Without a Coach`
- Type: Blog
- URL: `/en/blog/how-to-track-gym-progress-without-a-coach/`

Drafts do not appear on `/en/blog/`, sitemap, or RSS.

---

## Local vs GitHub (developers)

```bash
npm run dev
```

- **Local files** if `PUBLIC_KEYSTATIC_GITHUB` is not `1` and you are not in a production build. Saves straight to disk. You still commit and push.
- **GitHub mode** when `PUBLIC_KEYSTATIC_GITHUB=1` (this demo’s `.env`) or on a production (`PROD`) build. Save = GitHub commit to `Andrii5991/fitapp-landing-demo`.

Do not commit `.env`. Copy keys from `.env.example` and fill them on the machine / Vercel only.

---

## Checklist before you uncheck Draft

- Title is a search query, not a slogan.
- Summary is 50–160 characters and matches the article.
- First paragraph answers the title.
- Type matches the URL you want (`blog` / `guide` / `compare`).
- FAQ answers are complete sentences, not one-word replies.
- No `href="#"` store buttons in the copy; link to `/fitness-tracker/support` until stores exist.
