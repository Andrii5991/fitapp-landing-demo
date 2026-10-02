import { APP_SUPPORT } from './app-support';
import { articleUrl, isoDate, sectionForType, type ArticleEntry } from './articles';

const SITE = 'https://pushlab.app';
const ORG_ID = `${SITE}/#organization`;

type AuthorData = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export function articleJsonLd(entry: ArticleEntry, author: AuthorData, image: string) {
  const url = `${SITE}${articleUrl(entry)}`;
  const published = isoDate(entry.data.publishedAt);
  const modified = isoDate(entry.data.updatedAt ?? entry.data.publishedAt);
  const articleType = entry.data.type === 'blog' ? 'BlogPosting' : 'Article';
  const authorUrl = `${SITE}/${entry.data.lang}/authors/${author.id}/`;
  const section = sectionForType(entry.data.type);
  const sectionUrl = `${SITE}/${entry.data.lang}/${section}/`;

  const graph: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': articleType,
      headline: entry.data.heading ?? entry.data.title,
      name: entry.data.title,
      description: entry.data.description,
      datePublished: published,
      dateModified: modified,
      inLanguage: entry.data.lang,
      image,
      mainEntityOfPage: url,
      author: {
        '@type': 'Person',
        name: author.name,
        url: authorUrl,
        jobTitle: author.role,
      },
      publisher: {
        '@id': ORG_ID,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'PushLab', item: `${SITE}/en/` },
        { '@type': 'ListItem', position: 2, name: section[0].toUpperCase() + section.slice(1), item: sectionUrl },
        { '@type': 'ListItem', position: 3, name: entry.data.heading ?? entry.data.title, item: url },
      ],
    },
  ];

  if (entry.data.faq.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: entry.data.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  if (entry.data.steps.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: entry.data.heading ?? entry.data.title,
      description: entry.data.description,
      step: entry.data.steps.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    });
  }

  return graph;
}

export function authorJsonLd(author: AuthorData, lang: string) {
  const url = `${SITE}/${lang}/authors/${author.id}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: author.name,
    url,
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      worksFor: { '@id': ORG_ID, name: APP_SUPPORT.company },
      url,
    },
  };
}

export function collectionJsonLd(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
  };
}
