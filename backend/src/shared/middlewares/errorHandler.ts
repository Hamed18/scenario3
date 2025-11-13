import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err?.message || "Something went wrong"
  });
}
