const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  OrderDate: { type: Date, default: new Date() },
  OrderStatus: { type: String, default: "pending" },
  OrderTotalAmount: Number,
  CustId: { type: mongoose.Schema.Types.ObjectId, ref: "customer" },
  FoodItems: [
    {
      Qty: Number,
      FoodId: { type: mongoose.Schema.Types.ObjectId, ref: "food" },
    },
  ],
});

module.exports = mongoose.model("order", OrderSchema);
