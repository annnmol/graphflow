import { readFile } from "node:fs/promises";
import { Pool, type PoolConfig } from "pg";
import config from "../lib/config.ts";

const poolConfig: PoolConfig = config.DB_URL
  ? { connectionString: config.DB_URL }
  : {
      host: config.POSTGRES_HOST,
      port: config.POSTGRES_PORT,
      user: config.POSTGRES_USER,
      password: config.POSTGRES_PASSWORD,
      database: config.POSTGRES_DB,
    };

const pool = new Pool(poolConfig);
const schemaUrl = new URL("./schema.sql", import.meta.url);

export const initializeDatabase = async () => {
  const schema = await readFile(schemaUrl, "utf8");
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query(schema);
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

export { pool };
