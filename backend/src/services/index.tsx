import model from "../models";

class Service {
  getHello() {
    return model.index();
  }
}

const service = new Service();

export default service;
