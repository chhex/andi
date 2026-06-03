import { defineCollection, z } from 'astro:content';

const archiv = defineCollection({
  type: 'content',
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
