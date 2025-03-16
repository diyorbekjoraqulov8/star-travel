import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  }
});
export default model("product", productSchema);
