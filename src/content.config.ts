import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const archiv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archiv' }),
  schema: z.object({
    titel: z.string(),
    datum: z.string(),
    medium: z.string(),
    kategorie: z.enum(['Sport', 'Persönlichkeiten', 'Kultur', 'Musik', 'Schweiz', 'Politik']),
    tags: z.array(z.string()),
    highlight: z.boolean().default(false),
    typ: z.enum(['audio', 'video', 'bild', 'pdf', 'link']),
    datei: z.string().optional(),
    vorschaubild: z.string().optional(),
  }),
});

export const collections = { archiv };
