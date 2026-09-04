const CONFIG = Object.freeze({
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 3000),
  CORS_ORIGIN: process.env.CORS_ORIGIN!,
  PROJECT_NAME: process.env.PROJECT_NAME!,
  POSTGRES_HOST: process.env.POSTGRES_HOST!,
  POSTGRES_USER: process.env.POSTGRES_USER!,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD!,
  POSTGRES_DB: process.env.POSTGRES_DB!,
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT!),
  DB_URL: process.env.DATABASE_URL?.trim(),
});

export default CONFIG;
