import {inferAsyncReturnType} from "@trpc/server";
import {setupContainer} from "../container.js";
import {FetchCreateContextFnOptions} from "@trpc/server/adapters/fetch";

export function prepareCreateContext(
  container: ReturnType<typeof setupContainer>
) {
  return ({ req, resHeaders }: FetchCreateContextFnOptions) => {
    return { req, resHeaders, container };
  };
}

export type Context = inferAsyncReturnType<
  ReturnType<typeof prepareCreateContext>
>;
