import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Robert'),
    category: z.enum(['leadership', 'best-practices', 'career', 'ai']),
    tags: z.array(z.string()),
    draft: z.boolean().default(true),
    sources: z
      .array(
        z.object({
          book: z.string(),
          author: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
