import rss from '@astrojs/rss';
import { articleUrl, getPublishedArticles } from '../../../lib/articles';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const articles = await getPublishedArticles('en');
  const site = context.site ?? new URL('https://pushlab.app');

  return rss({
    title: 'PushLab blog',
    description:
      'Workout logging, progress tracking, and how PushLab compares with notes and spreadsheets.',
    site,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.updatedAt ?? entry.data.publishedAt,
      link: articleUrl(entry),
    })),
    trailingSlash: true,
  });
}

export const prerender = true;
