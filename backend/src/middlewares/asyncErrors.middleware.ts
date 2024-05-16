import { NextFunction, Request, Response } from "express";

class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const errorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message, success: false });
  }
  console.error(err);

  res.status(500).json({ message: "Internal server error", success: false });
};

export { AppError, errorHandling };
