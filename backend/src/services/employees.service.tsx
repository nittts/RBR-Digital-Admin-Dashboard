import employeesModel from "../models/employees.model";

class Service {
  index() {
    return employeesModel.index();
  }
}

export default new Service();
