import { Request, Response } from "express";

import service from "../services";

class Controller {
  public index(req: Request, res: Response) {
    return res.send({ message: service.getHello() });
  }
}

const controller = new Controller();

export default controller;
