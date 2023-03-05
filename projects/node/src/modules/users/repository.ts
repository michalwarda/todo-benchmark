import { type Database } from "better-sqlite3";

export function UsersRepository(db: Database) {
  return {
    async getUserById(id: number | BigInt) {
      return db.prepare(`SELECT * FROM "User" WHERE id = ?`).get(id);
    },
    async getUsers() {
      return db.prepare(`SELECT * FROM "User"`).all();
    },
    async createUser(input: { name: string; bio?: string }) {
      const { lastInsertRowid } = await db
        .prepare(`INSERT INTO "User" (name, bio) VALUES (@name, @bio)`)
        .run(input);
      return this.getUserById(lastInsertRowid);
    },
  };
}
