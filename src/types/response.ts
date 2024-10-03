import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof userSchema>;

export const stockSchema = z.object({
  id: z.string().uuid(),
  symbol: z.string(),
  name: z.string(),
  price: z.number(),
  change: z.number(),
  percentChange: z.number(),
});

export type Stock = z.infer<typeof stockSchema>;
