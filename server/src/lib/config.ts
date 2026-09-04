const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 3000),
  CORS_ORIGIN: process.env.CORS_ORIGIN!,
  PROJECT_NAME: process.env.PROJECT_NAME!,
  POSTGRES_HOST: process.env.POSTGRES_HOST!,
  POSTGRES_USER: process.env.POSTGRES_USER!,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD!,
  POSTGRES_DB: process.env.POSTGRES_DB!,
  POSTGRES_PORT: process.env.POSTGRES_PORT!,
};

export default CONFIG;
