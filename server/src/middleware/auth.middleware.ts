import type { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.info("Auth middleware executed", {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
  });
  next();
};

export default authMiddleware;
