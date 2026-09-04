import dotenv from "dotenv";
import express from "express";
import { initializeDatabase, pool } from "./db/db.ts";
import config from "./lib/config.ts";
import authMiddleware from "./middleware/auth.middleware.ts";
import errorMiddleware from "./middleware/error.middleware.ts";

dotenv.config({ quiet: true });

console.log("Hello via Bun!");
console.log("ENV CONFIG: ", config);

const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the GraphFlow server!");
});

app.use(errorMiddleware);

const start = async () => {
  await initializeDatabase();
  const server = app.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
  });

  const shutdown = async (signal: string) => {
    console.log(`Server received ${signal}; shutting down.`);
    server.close(async () => {
      await pool.end();
      process.exit(0);
    });
  };

  process.once("SIGINT", () => void shutdown("SIGINT"));
  process.once("SIGTERM", () => void shutdown("SIGTERM"));
};

start().catch((error) => {
  console.error("Failed to initialize the Server:", error);
  process.exitCode = 1;
});
