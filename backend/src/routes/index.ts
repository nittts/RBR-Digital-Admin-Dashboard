import Express, { Router } from "express";
import { readdirSync } from "fs";

const routes = (app: Express.Application) => {
  readdirSync(__dirname).forEach(async (path) => {
    const routeName = path.slice(0, path.indexOf("."));

    if (routeName !== "index") {
      const { default: route } = await import(`./${routeName}`);
      const router = Router();

      app.use(`/api/${routeName}`, route(router));
    }
  });
};

export default routes;
