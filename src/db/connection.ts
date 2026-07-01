import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema.ts";
import { env, isProd } from "../../env.ts";
import { remember } from "@epic-web/remember";

const createPool = () => {
  return new Pool({
    connectionString: env.DATABASE_URL,
  });
};

let dbClient;

if (isProd()) {
  dbClient = createPool();
} else {
  // this prevents leaving stalled connections to the DB after hot-reloading in DEV mode
  dbClient = remember("dbPool", () => createPool());
}

export const db = drizzle({ dbClient, schema });
