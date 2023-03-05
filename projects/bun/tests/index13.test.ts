import { describe, expect, it } from "bun:test";
import { setupE2ETests } from "./test.helper.js";
import { createFixture } from "zod-fixture";
import { CreateUserSchema } from "../src/modules/users/schemas.js";

describe("e2e test", () => {
  const { client } = setupE2ETests();

  const userFixture = createFixture(CreateUserSchema);

  it("Should handle whole test 1", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 2", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 3", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 4", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 5", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 6", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 7", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 8", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 9", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });

  it("Should handle whole test 10", async () => {
    const user = await client().users.createUser.mutate(userFixture);
    const expectedUser = { ...userFixture, id: user.id };
    expect(user).toBeDefined();
    expect(user).toEqual(expectedUser);
    const savedUser = await client().users.getUserById.query(user.id);
    expect(savedUser).toBeDefined();
    expect(savedUser).toEqual(expectedUser);
    const savedUsers = await client().users.getUsers.query();
    expect(savedUsers).toBeDefined();
    expect(savedUsers).toEqual([expectedUser]);
  });
});
