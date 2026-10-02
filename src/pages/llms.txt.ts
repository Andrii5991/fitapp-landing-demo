import type { APIRoute } from 'astro';
import { articleHeading, getPublishedArticles, sectionForType } from '../lib/articles';
import { APP_SUPPORT } from '../lib/app-support';

export const prerender = true;

export const GET: APIRoute = async () => {
  const articles = await getPublishedArticles();
  const byType = {
    guide: articles.filter((entry) => entry.data.type === 'guide'),
    compare: articles.filter((entry) => entry.data.type === 'compare'),
    blog: articles.filter((entry) => entry.data.type === 'blog'),
  };

  const articleLines = [
    ...byType.blog.map((entry) => `- /${entry.data.lang}/${sectionForType(entry.data.type)}/${entry.slug.split('/').pop()}/ : ${articleHeading(entry)}`),
    ...byType.guide.map((entry) => `- /${entry.data.lang}/${sectionForType(entry.data.type)}/${entry.slug.split('/').pop()}/ : ${articleHeading(entry)}`),
    ...byType.compare.map((entry) => `- /${entry.data.lang}/${sectionForType(entry.data.type)}/${entry.slug.split('/').pop()}/ : ${articleHeading(entry)}`),
  ];

  const body = `# PushLab

PushLab is a workout tracking app by ${APP_SUPPORT.company} for people who want consistent training data and visible progress.

## Core message
Train anything. Track everything.

## Entity
- Product: PushLab
- Developer: ${APP_SUPPORT.company}
- Bundle ID: ${APP_SUPPORT.bundleId}
- Support: ${APP_SUPPORT.supportEmail}
- Site: https://pushlab.app

## What PushLab helps with
- Log workouts across strength, cardio, yoga, Pilates, and stretching
- Track weekly volume, consistency, and personal best trends
- Save training templates and program structure
- Log offline and sync when online

## Current pricing
- The current release is free
- No active in-app subscriptions; Fit Pro billing is disabled in this version

## Key pages
- /en/ : English product overview and feature highlights
- /es/ : Spanish product overview and feature highlights
- /pt-br/ : Portuguese (Brazil) product overview and feature highlights
- /de/ : German product overview and feature highlights
- /fr/ : French product overview and feature highlights
- /en/what-is-pushlab/ : Product definition
- /en/blog/ : Blog index
- /en/guides/ : Guides index
- /en/compare/ : Comparisons
${articleLines.join('\n')}
- /en/changelog/ : Product updates
- /en/#product : Core workout logging and tracking features
- /en/#progress : Progress insights and trend-focused workflows
- /en/#platforms : Supported platforms and devices
- /en/#faq : Common questions and direct answers
- ${APP_SUPPORT.supportPath} : App support and FAQ
- ${APP_SUPPORT.privacyPath} : Privacy policy
- ${APP_SUPPORT.termsPath} : Terms of use
- /pricing.md : Machine-readable pricing for AI assistants and buyers

## Important facts
- PushLab does not read from or write to Apple Health / HealthKit
- Workout data is entered manually in the app
- Offline logs sync when the device reconnects

## Sources and references
- WHO physical activity guidance: https://www.who.int/news-room/fact-sheets/detail/physical-activity
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
