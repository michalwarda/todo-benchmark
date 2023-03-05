import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  bio: z.string().max(142).nullable().optional(),
});

export const CreateUserSchema = z.object({
  name: z.string().min(3),
  bio: z.string().max(142).optional(),
});
