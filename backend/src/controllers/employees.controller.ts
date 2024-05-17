import { Request, Response } from "express";
import employeesService from "../services/employees/employees.service";

class EmployeesController {
  async index(req: Request, res: Response) {
    const { query } = req;

    const employees = await employeesService.findAll(query);

    return res.status(200).send(employees);
  }
}

export default new EmployeesController();
