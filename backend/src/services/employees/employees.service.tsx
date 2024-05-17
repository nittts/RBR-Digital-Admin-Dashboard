import { AppError } from "../../middlewares/asyncErrors.middleware";
import employeesModel from "../../models/employees.model";
import { EmployeesSearchParams, FindById } from "./etc/types";

class EmployeesService {
  async findAll(filters: EmployeesSearchParams) {
    return await employeesModel.find(filters);
  }

  async findById({ id }: FindById) {
    const employee = await employeesModel.findOne({ id });

    if (!employee) throw new AppError("Funcionário não econtrado.", 404);

    return employee;
  }
}

export default new EmployeesService();
