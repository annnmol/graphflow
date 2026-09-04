import type { NextFunction, Request, Response } from "express";

const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("Request failed", {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    error,
  });

  if (res.headersSent) {
    next(error);
    return;
  }

  res.status(500).json({ error: "Internal Server Error" });
};

export default errorMiddleware;
