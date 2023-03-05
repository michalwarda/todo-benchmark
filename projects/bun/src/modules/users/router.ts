import {t} from "../../server/server.js";
import {z} from "zod";
import {CreateUserSchema, UserSchema} from "./schemas.js";

export const usersRouter = t.router({
  getUserById: t.procedure
    .input(z.number())
    .output(UserSchema)
    .query(async ({ input, ctx: { container } }) => {
      return container.usersRepository.getUserById(input);
    }),
  getUsers: t.procedure
    .input(z.void())
    .output(z.array(UserSchema))
    .query(async ({ ctx: { container } }) => {
      return await container.usersRepository.getUsers();
    }),
  createUser: t.procedure
    .input(CreateUserSchema)
    .output(UserSchema)
    .mutation(async ({ input, ctx: { container } }) => {
      return await container.usersRepository.createUser(input);
    }),
});
