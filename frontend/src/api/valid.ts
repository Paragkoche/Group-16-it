import { z } from "zod";

export const CreateAndLoginUserBody = z.object({
  email: z.string().email(),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  username: z.string().min(1),
  password: z.string(),
});
export const _CreateAndLoginUserBody = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const shareWithBody = z.object({
  mode: z.enum(["public", "onWith"]),
  shareWithUserId: z.array(z.object({ id: z.string() })).default([]),
  fileId: z.string(),
});
