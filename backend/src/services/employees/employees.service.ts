import { AppError } from "../../middlewares/asyncErrors.middleware";
import employeesModel from "../../models/employees.model";
import {
  CreateEmployeePayload,
  EmployeesSearchParams,
  FindById,
  updateEmployeePayload,
} from "../../@types/employees.types";

class EmployeesService {
  async findAll(filters: EmployeesSearchParams) {
    return await employeesModel.find(filters);
  }

  async findById(id: FindById) {
    const employee = await employeesModel.findOne(id);

    if (!employee) throw new AppError("Funcionário não econtrado.", 404);

    return employee;
  }

  async create(payload: CreateEmployeePayload) {
    const employee = await employeesModel.create(payload);

    return employee;
  }

  async update(payload: updateEmployeePayload, id: FindById) {
    const employee = await employeesModel.findOneAndUpdate(id, payload);

    if (!employee) throw new AppError("Funcionário não encontrado.", 404);

    return employee;
  }

  async delete(id: FindById) {
    const employee = await employeesModel.findOneAndDelete(id);

    if (!employee) throw new AppError("Funcionário não encontrado.", 404);

    return employee;
  }
}

export default new EmployeesService();
