import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { appRouter, AppRouter } from "../src/modules/app/index.js";
import * as trpcExpress from "@trpc/server/adapters/express";
import * as express from "express";
import * as http from "http";
import { MaybePromise } from "@trpc/server";
import { afterEach, beforeEach } from "vitest";
import { prepareCreateContext } from "../src/server/context.js";
import { setupContainer } from "../src/container.js";

export function createServer(container: ReturnType<typeof setupContainer>) {
  const app = express.default();
  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: prepareCreateContext(container),
    })
  );

  return new Promise<http.Server>((resolve) => {
    const server = app.listen(0, () => {
      resolve(server);
    });
  });
}

export function createClient(server: http.Server) {
  return createTRPCProxyClient<AppRouter>({
    links: [
      //@ts-ignore
      httpBatchLink({ url: `http://localhost:${server.address().port}/trpc` }),
    ],
  });
}

export async function prepareTestClient(
  container: ReturnType<typeof setupContainer>
) {
  const server = await createServer(container);
  return createClient(server);
}

export function setupE2ETests() {
  const client = letItBe(() => {
    const container = setupContainer();
    return prepareTestClient(container);
  });
  return { client };
}

export function letItBe<T>(
  getter: () => T,
  cb?: (value: Awaited<T>) => MaybePromise<void>
): () => Awaited<T> {
  let value: Awaited<T> | undefined;
  beforeEach(async () => {
    value = await getter();
  });

  if (cb) {
    afterEach(() => {
      if (!value) throw new Error("Value is not defined");
      return cb(value);
    });
  }
  return () => {
    if (!value) throw new Error("Value is not defined");
    return value;
  };
}
