import Express, { Router } from "express";
import { readdirSync } from "fs";
import { errorHandling } from "../middlewares/asyncErrors.middleware";

const routes = (app: Express.Application) => {
  readdirSync(__dirname).forEach(async (path) => {
    const routeName = path.slice(0, path.indexOf("."));

    if (routeName !== "index") {
      const { default: route } = await import(`./${routeName}`);
      const router = route(Router());

      router.use(errorHandling);

      app.use(`/api/${routeName}`, router);
    }
  });
};

export default routes;
