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

// En sida per princip: src/content/principer/<namn>.md (t.ex. privacy.md -> /principles/privacy).
// Själva user stories hämtas från startsidan, så att texten bara finns på ett ställe.
const principer = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/principer' }),
  schema: z.object({
    nr: z.number(),
    beskrivning: z.string(),
  }),
});

export const collections = { sidor, principer };
