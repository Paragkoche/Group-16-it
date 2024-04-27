import { z } from "zod";

export const CreateAndLoginUserBody = z.object({
  email: z.string().email(),
  password: z.string(),
});
