import userModel from "../models/user.model"


class UserRepo {
  constructor(model) {
    this.model = model;
  }

  async getById(userId) {
    return this.model.findById(userId);
  }
}

export default new UserRepo(userModel);
