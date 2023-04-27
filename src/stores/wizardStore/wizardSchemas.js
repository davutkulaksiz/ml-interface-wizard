import { z } from "zod";

export const ConfigSchema = z.object({
  presentation: z.object({
    title: z.string(),
    subtitle: z.string(),
    help_text: z.string().optional(),
  }),
  model: z.object({
    name: z.string(),
    description: z.string(),
    type: z.string(),
    in_transformer: z.boolean(),
    out_transformer: z.boolean(),
  }),
  target: z.object({
    name: z.string(),
    description: z.string(),
    type: z.string(),
  }),
  features: z.any().array().nonempty(),
});
