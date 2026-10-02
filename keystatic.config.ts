import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'PushLab' },
  },
  collections: {
    authors: collection({
      label: 'Authors',
      slugField: 'name',
      path: 'src/content/authors/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
      },
    }),
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/en/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { length: { max: 65 } },
          },
        }),
        description: fields.text({
          label: 'Summary',
          description: '1–2 sentences for Google and the blog card (50–160 characters).',
          multiline: true,
          validation: { length: { min: 50, max: 160 } },
        }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Blog', value: 'blog' },
            { label: 'Guide', value: 'guide' },
            { label: 'Compare', value: 'compare' },
          ],
          defaultValue: 'blog',
        }),
        publishedAt: fields.date({ label: 'Published', validation: { isRequired: true } }),
        draft: fields.checkbox({ label: 'Draft (hide from site)', defaultValue: true }),
        faq: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          {
            label: 'FAQ',
            description: 'Optional. Add 2–4 questions people actually search.',
            itemLabel: (props) => props.fields.question.value || 'Question',
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          options: {
            formatting: true,
            dividers: true,
            links: true,
            tables: true,
          },
        }),
      },
    }),
  },
});
