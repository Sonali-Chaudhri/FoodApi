const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  FoodName: String,
  FoodType: String,
  FoodCategory: String,
  FoodImage: String,
  FoodPrice: Number,
  IsAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("food", FoodSchema);
