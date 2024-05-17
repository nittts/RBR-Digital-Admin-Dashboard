import { Router } from "express";
import "express-async-errors";

import employeesController from "../controllers/employees.controller";

import { ZodValidator } from "../middlewares/zod-validation.middleware";

import {
  createEmployeePayload,
  employeesSearchParams,
  findById,
  updateEmployeePayload,
} from "../schemas/employees.schemas";

export default (router: Router) => {
  router.get("/", ZodValidator(employeesSearchParams, "query"), employeesController.index);

  router.get("/:id", ZodValidator(findById, "params"), employeesController.findById);

  router.post("/", ZodValidator(createEmployeePayload, "body"), employeesController.create);

  router.put(
    "/:id",
    ZodValidator(findById, "params"),
    ZodValidator(updateEmployeePayload, "body"),
    employeesController.update
  );

  router.delete('/:id', ZodValidator(findById, "params"), employeesController.delete)

  return router;
};
