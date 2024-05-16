import { Router } from "express";
import employeesController from "../controllers/employees.controller";

export default (router: Router) => {
  router.get("/", employeesController.index);

  return router;
};
