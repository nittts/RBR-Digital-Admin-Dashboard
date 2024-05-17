import { Router } from "express";
import "express-async-errors";

import employeesController from "../controllers/employees.controller";

import { ZodValidator } from "../middlewares/zod-validation.middleware";

import { employeesSearchParams, findById } from "../services/employees/etc/schemas";

export default (router: Router) => {
  router.get("/", ZodValidator(employeesSearchParams, "query"), employeesController.index);

  router.get("/:id", ZodValidator(findById, "params"), employeesController.findById);

  return router;
};
