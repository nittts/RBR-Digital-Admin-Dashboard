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
    res.status(err.statusCode).json({ message: err.message, statusCode: err.statusCode });
  }

  console.log(err)

  res.status(500).json({ message: "Erro de Servidor Interno.", statusCode: 500 });
};

export { AppError, errorHandling };
