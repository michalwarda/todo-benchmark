import { Database } from "bun:sqlite";

export function createDatabaseConnection(filename: string) {
  return new Database(filename);
}

export function closeDatabaseConnection(client: Database) {
  client.close();
}
