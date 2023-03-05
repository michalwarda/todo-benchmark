import { t } from "../../server/server.js";
import { usersRouter } from "../users/router.js";

export const appRouter = t.router({ users: usersRouter });

export type AppRouter = typeof appRouter;
