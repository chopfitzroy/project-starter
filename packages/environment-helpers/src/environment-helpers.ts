import { z } from "zod"

const ZodEnvironment = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  SESSION_SECRET: z.string(),
});

const environment = () => ZodEnvironment.parse(process.env);

export { environment };