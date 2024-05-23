const mongoose = require("mongoose");
const CustomerSchema = mongoose.Schema({
  CustomerName: String,
  CustomerEmail: String,
  CustomerMobNo: Number,
  CustomerPassword: String,
  CustomerAddress: String,
  CustomerCity: String,
  CustomerPinCode: Number,
  IsActive: { type: Boolean, default: true },
});

// "CustomerName": "Sona",
//   "CustomerEmail":"csonali415@gmail.com",
//  " CustomerMobNo":9359910034,
//   "CustomerPassword":"Sonali_123",
//   "CustomerAddress": "2233/Hadapsar,pune",
//   "CustomerCity":"Jalgaon",
//   "CustomerPinCode":425001,
//   "IsActive":Boolean

module.exports = mongoose.model("customer", CustomerSchema);
