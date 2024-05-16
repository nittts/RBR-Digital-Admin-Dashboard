import employeesService from "../services/employees.service";

class EmployeesController {
  index() {
    return employeesService.index();
  }
}

export default new EmployeesController();
