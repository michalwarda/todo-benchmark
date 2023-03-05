import {
  closeDatabaseConnection,
  createDatabaseConnection,
} from "./modules/database/database.js";
import { UsersRepository } from "./modules/users/repository.js";
import { createAppConfig } from "./config.js";

export function setupContainer() {
  const appConfig = createAppConfig();
  const dbConnection = createDatabaseConnection(appConfig.filename);

  dbConnection
    .prepare(
      `CREATE TABLE IF NOT EXISTS "User" (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        name VARCHAR(255) NOT NULL, 
        bio VARCHAR(255), 
        "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
        "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`
    )
    .run();

  return {
    usersRepository: UsersRepository(dbConnection),
  };
}
