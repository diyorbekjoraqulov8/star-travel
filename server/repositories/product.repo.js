import productModel from "../models/product.model"

class ProductRepo {
  constructor(model) {
    this.model = model;
  }

  async getAll(filters) {
    return this.model.find(filters);
  }

  async getById(productId) {
    return this.model.findOne({ id: productId });
  }

  async create(data) {
    return this.model.create(data);
  }
}

export default new ProductRepo(productModel);
