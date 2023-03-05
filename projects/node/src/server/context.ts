import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { setupContainer } from "../container.js";

export function prepareCreateContext(
  container: ReturnType<typeof setupContainer>
) {
  return ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
    return { req, res, container };
  };
}

export type Context = inferAsyncReturnType<
  ReturnType<typeof prepareCreateContext>
>;
