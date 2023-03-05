import {createTRPCProxyClient, httpBatchLink} from "@trpc/client";
import {appRouter, AppRouter} from "../src/modules/app/index.js";
import {MaybePromise} from "@trpc/server";
import {afterEach, beforeEach} from "bun:test";
import {prepareCreateContext} from "../src/server/context.js";
import {setupContainer} from "../src/container.js";
import {Server} from "bun";
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";

export function createServer(container: ReturnType<typeof setupContainer>) {
  const app = {
    port: 3000,
    async fetch(request: Request): Promise<Response> {
      return fetchRequestHandler({
        endpoint: "/trpc",
        req: request,
        router: appRouter,
        createContext: prepareCreateContext(container),
      });
    },
  };
  return Bun.serve({...app, port: 0});
}

export function createClient(server: Server) {
  return createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({url: `http://localhost:${server.port}/trpc`})],
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
  return {client};
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
