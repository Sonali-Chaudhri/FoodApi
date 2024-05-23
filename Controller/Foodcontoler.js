const { json } = require("body-parser");
const Food = require("../Models/FoodSchema");

exports.addfood = async (req, res) => {
  try {
    const NewfoodAdded = await Food.create(req.body);
    res.status(200).json(NewfoodAdded);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getallfood = async (req, res) => {
  try {
    const GetAllFood = await Food.find();
    res.status(200).json(GetAllFood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatefoodsprice = async (req, res) => {
  try {
    const UpdateNewFood = await Food.findByIdAndUpdate(
      req.body.foodid,
      { FoodPrice: req.body.FoodPrice },
      { new: true }
    );
    res.status(200).json(UpdateNewFood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateFoodAvailability = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.body.foodid,
      { IsAvailable: req.body.IsAvailable },
      { new: true }
    );
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletefood = async (req, res) => {
  try {
    const DeleteFood = await Food.findByIdAndDelete({ _id: req.body.foodid });
    res.status(200).json(DeleteFood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getfoodbycategory = async (req, res) => {
  try {
    const foodcategoty = await Food.find({
      FoodCategory: req.body.FoodCategory,
    });
    res.status(200).json(foodcategoty);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getfoodbytype = async (req, res) => {
  try {
    const foodType = await Food.find({ FoodType: req.body.FoodType });
    res.status(200).json(foodType);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getTotalDishesCount = async (req, res) => {
  try {
    const totalDishesCount = await Food.countDocuments();
    res.status(200).json({ totalDishesCount });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.categorycount =async (req, res) => {
  try {
    const categoryCounts = await Food.aggregate([
      {
        $group: {
          _id: '$FoodCategory',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json(categoryCounts);
  } catch (error) {
    res.status(500).json(error);
  }
}
