import employeesModel from "../../models/employees.model";
import { EmployeesSearchParams } from "./etc/types";

class EmployeesService {
  async findAll(filters: EmployeesSearchParams) {
    return await employeesModel.find(filters);
  }
}

export default new EmployeesService();
