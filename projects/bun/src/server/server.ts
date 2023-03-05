import { initTRPC } from "@trpc/server";
import { Context } from "./context.js";

export const t = initTRPC.context<Context>().create();
