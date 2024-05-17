import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";
import { AppError } from "./asyncErrors.middleware";

const constructErrorObject = (error: ZodError) => {
  const errorObject: Record<string, string> = {};

  error.errors.forEach((issue) => {
    const path = issue.path.join(".");
    const message = issue.message;
    errorObject[path] = message;
  });
  return errorObject;
};

export const ZodValidator =
  (schema: ZodType, metadataType: "query" | "body" | "params") => (req: Request, res: Response, next: NextFunction) => {
    const data = req[metadataType];

    const parsedData = schema.safeParse(data);

    if (parsedData.success) {
      req[metadataType] = parsedData.data;
      next();
    } else {
      const zodError = parsedData.error as ZodError;
      const errorObject = constructErrorObject(zodError);

      return res.status(400).json({ message: "ValidationError", error: errorObject });
    }
  };
