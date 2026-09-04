import dotenv from "dotenv";
import config from "./lib/config.ts";
import express from "express";

dotenv.config({quiet: true});

console.log("Hello via Bun!");
console.log("ENV CONFIG: ", config);

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the GraphFlow server!");
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});