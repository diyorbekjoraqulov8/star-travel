import transactionModel from "../models/transaction.model"

class TransactionRepo {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async getById(transactionId) {
    return this.model.findOne({ id: transactionId });
  }

  async getByFilter(filter) {
    return this.model.findOne(filter);
  }

  async updateById(transactionId, update) {
    return this.model.findByIdAndUpdate(transactionId, update);
  }
}

export default new TransactionRepo(transactionModel);
