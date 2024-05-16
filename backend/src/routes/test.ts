import { Router } from "express";
import controller from "../controllers";

export default (router: Router) => {
  router.get("/", controller.index);

  return router;
};
