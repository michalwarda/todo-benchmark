import Client, { type Database } from "better-sqlite3";

export function createDatabaseConnection(filename: string) {
  return new Client(filename);
}

export function closeDatabaseConnection(client: Database) {
  client.close();
}
