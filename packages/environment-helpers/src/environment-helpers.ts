import type { AnyZodObject } from "zod";

import 'dotenv/config';

import { z as instance } from "zod";

const ZodEnvironment = instance.object({
  NODE_ENV: instance
    .enum(['development', 'production', 'test'])
    .default('development'),
});

const createEnvironment = <T extends AnyZodObject>(handler: (z: typeof instance) => T) => {
  const ZodMerged = ZodEnvironment.merge(handler(instance));

  return (overwrite?: (envionment: instance.infer<typeof ZodEnvironment>['NODE_ENV']) => Partial<instance.infer<T>>) => {
    const parsed = ZodMerged.parse(process.env);

    if (overwrite === undefined) return parsed;

    const overridden = overwrite(parsed.NODE_ENV);

    return {
      ...parsed,
      ...overridden,
    }
  }
}

export { createEnvironment };