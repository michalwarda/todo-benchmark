import {Database} from "bun:sqlite";

export function UsersRepository(db: Database) {
  return {
    async getUserById(id: number) {
      return db.prepare(`SELECT * FROM "User" WHERE id = ?1;`).get(id) as any;
    },
    async getUsers() {
      return db.prepare(`SELECT * FROM "User"`).all() as any;
    },
    async createUser(input: { name: string; bio?: string }) {
      return db
        .prepare(`INSERT INTO "User" (name, bio) VALUES (@name, @bio) RETURNING *;`)
        // @ts-ignore
        .get({
          "@name": input.name,
          "@bio": input.bio,
        }) as any;
    },
  };
}
