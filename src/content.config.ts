import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// En .md-fil per sida i src/content/sidor. Filnamnet blir adressen (start.md = startsidan).
const sidor = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sidor' }),
  schema: z.object({
    sidtitel: z.string(),
    beskrivning: z.string().optional(),
    delningsbild: z.string().optional(),
  }),
});

export const collections = { sidor };
