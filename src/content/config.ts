import { defineCollection, z } from 'astro:content';

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const stepSchema = z.object({
  name: z.string(),
  text: z.string(),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.object({
    layout: z.enum(['grid-3', 'grid-2', 'featured']).default('grid-3'),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(65),
    heading: z.string().optional(),
    description: z.string().min(50).max(160),
    type: z.enum(['guide', 'compare', 'blog']),
    lang: z.enum(['en', 'es', 'pt-br', 'de', 'fr']).default('en'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('doarbo'),
    tags: z.array(z.string()).default([]),
    faq: z.array(faqSchema).default([]),
    steps: z.array(stepSchema).default([]),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { authors, articles, settings };
