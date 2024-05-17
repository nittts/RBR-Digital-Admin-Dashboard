import { Router } from "express";

import employeesController from "../controllers/employees.controller";

import { ZodValidator } from "../middlewares/zod-validation.middleware";

import { employeesSearchParams } from "../services/employees/etc/schemas";

export default (router: Router) => {
  router.get("/", ZodValidator(employeesSearchParams, "query"), employeesController.index);

  return router;
};
