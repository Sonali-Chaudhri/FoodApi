const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  PaymentType: String,
  PaymentAmount: Number,
  PaymentStatus: String,
  PaymentDate: { type: Date, default: new Date() },
  OrderId: String,
});

module.exports = mongoose.model("payment", PaymentSchema);
