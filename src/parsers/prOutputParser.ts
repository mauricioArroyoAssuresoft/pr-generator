import { z } from 'zod';

export const prReponseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  testing: z.string(),
  risks: z.string(),
  notes: z.string(),
});

export type PRResponse = z.infer<typeof prReponseSchema>;
