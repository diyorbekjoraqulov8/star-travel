import mongoose from "mongoose"

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export default model("user", userSchema);
