import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./modules/app/index.js";
import { prepareCreateContext } from "./server/context.js";
import { setupContainer } from "./container.js";

export default {
  port: 4000,
  async fetch(request: Request): Promise<Response> {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req: request,
      router: appRouter,
      createContext: prepareCreateContext(setupContainer()),
    });
  },
};
