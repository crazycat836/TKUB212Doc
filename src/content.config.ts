import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    group: z.enum(['general', 'printer', 'repair', 'copy', 'other']),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { docs };
