import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./modules/app/index.js";
import { prepareCreateContext } from "./server/context.js";
import { setupContainer } from "./container.js";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: prepareCreateContext(setupContainer()),
  })
);

app.listen(4000);
