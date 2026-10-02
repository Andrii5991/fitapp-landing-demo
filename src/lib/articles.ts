import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;
export type ArticleType = ArticleEntry['data']['type'];
export type ArticleSection = 'guides' | 'compare' | 'blog';

const SECTION_BY_TYPE: Record<ArticleType, ArticleSection> = {
  guide: 'guides',
  compare: 'compare',
  blog: 'blog',
};

export const TYPE_BY_SECTION: Record<ArticleSection, ArticleType> = {
  guides: 'guide',
  compare: 'compare',
  blog: 'blog',
};

export const SECTION_LABEL: Record<ArticleSection, string> = {
  guides: 'Guides',
  compare: 'Compare',
  blog: 'Blog',
};

export function sectionForType(type: ArticleType): ArticleSection {
  return SECTION_BY_TYPE[type];
}

export function articleHeading(entry: ArticleEntry): string {
  return entry.data.heading ?? entry.data.title;
}

export function articleSlug(entry: ArticleEntry): string {
  const parts = entry.slug.split('/');
  return parts[parts.length - 1] ?? entry.slug;
}

export function articleUrl(entry: ArticleEntry): string {
  const lang = entry.data.lang;
  const section = sectionForType(entry.data.type);
  return `/${lang}/${section}/${articleSlug(entry)}/`;
}

export async function getPublishedArticles(lang?: ArticleEntry['data']['lang']): Promise<ArticleEntry[]> {
  const all = await getCollection('articles', (entry) => {
    if (entry.data.draft) return false;
    if (lang && entry.data.lang !== lang) return false;
    return true;
  });

  return all.sort((a, b) => {
    const aDate = (a.data.updatedAt ?? a.data.publishedAt).getTime();
    const bDate = (b.data.updatedAt ?? b.data.publishedAt).getTime();
    return bDate - aDate;
  });
}

export async function getRelatedArticles(entry: ArticleEntry, n = 3): Promise<ArticleEntry[]> {
  const all = await getPublishedArticles(entry.data.lang);
  const tags = new Set(entry.data.tags);

  const scored = all
    .filter((item) => item.id !== entry.id)
    .map((item) => {
      let score = 0;
      if (item.data.type === entry.data.type) score += 4;
      for (const tag of item.data.tags) {
        if (tags.has(tag)) score += 2;
      }
      return { item, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const aDate = (a.item.data.updatedAt ?? a.item.data.publishedAt).getTime();
      const bDate = (b.item.data.updatedAt ?? b.item.data.publishedAt).getTime();
      return bDate - aDate;
    });

  return scored.slice(0, n).map((row) => row.item);
}

export async function getAuthor(id: string) {
  return getEntry('authors', id);
}

export function readingMinutes(html: string): number {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatArticleDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
