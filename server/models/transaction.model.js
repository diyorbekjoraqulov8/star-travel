import mongoose from "mongoose"
const TransactionState = {
    Paid: 2,
    Pending: 1,
    PendingCanceled: -1,
    PaidCanceled: -2,
};


const { Schema, model } = mongoose;

const transactionSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: false,
    },
    product_id: {
      type: String,
      required: true,
    },
    state: {
      type: Number,
      enum: Object.values(TransactionState),
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    create_time: {
      type: Number,
      default: Date.now(),
    },
    perform_time: {
      type: Number,
      default: 0,
    },
    cancel_time: {
      type: Number,
      default: 0,
    },
    reason: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default model("transaction", transactionSchema);
