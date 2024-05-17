import { Request, Response } from "express";
import employeesService from "../services/employees/employees.service";

class EmployeesController {
  async index(req: Request, res: Response) {
    const { query } = req;

    const employees = await employeesService.findAll(query);

    return res.status(200).send(employees);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const employee = await employeesService.findById({ id });

    return res.status(200).send(employee);
  }
}

export default new EmployeesController();
