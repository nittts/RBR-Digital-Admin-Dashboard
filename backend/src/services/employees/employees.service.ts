import { AppError } from "../../middlewares/asyncErrors.middleware";
import employeesModel from "../../models/employees.model";
import {
  CreateEmployeePayload,
  EmployeesSearchParams,
  FindById,
  updateEmployeePayload,
} from "../../@types/employees.types";

class EmployeesService {
  async findAll(params: EmployeesSearchParams) {
    const filters: { [x: string]: { $regex: string; $options: string } | Date } = {};

    if (params.name) filters.name = { $regex: params.name, $options: "i" };
    if (params.department) filters.department = { $regex: params.department, $options: "i" };
    if (params.role) filters.role = { $regex: params.role, $options: "i" };
    if (params.admissionDate) filters.admissionDate = params.admissionDate;

    return await employeesModel.find(filters);
  }

  async findById(id: FindById) {
    const employee = await employeesModel.findOne(id);

    if (!employee) throw new AppError("Funcionário não econtrado.", 404);

    return employee;
  }

  async create(payload: CreateEmployeePayload) {
    console.log(payload);
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
