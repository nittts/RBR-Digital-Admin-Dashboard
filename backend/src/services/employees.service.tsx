import employeesModel from "../models/employees.model";

class Service {
  index() {
    return employeesModel.find({});
  }
}

export default new Service();
