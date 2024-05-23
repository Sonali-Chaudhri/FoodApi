const { json } = require("body-parser");
const Order = require("../Models/OrderSchema");

exports.addorder = async (req, res) => {
  try {
    const FoodOrder = await Order.create(req.body);
    res.status(200).json(FoodOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getallorders = async (req, res) => {
  try {
    const Getallorder = await Order.find()
      .populate("CustId")
      .populate("FoodItems.FoodId");

    res.status(200).json(Getallorder);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const getorderbyid = await Order.findById({ _id: req.body.orderid });
    res.status(200).json(getorderbyid);
  } catch (error) {
    res.status(200).json(error);
  }
};

exports.updateOrderById = async (req, res) => {
  try {
    const updateorder = await Order.findByIdAndUpdate(
      req.body.orderid,
      { OrderTotalAmount: req.body.OrderTotalAmount },
      { new: true }
    );
    res.status(200).json(updateorder);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteorder = async (req, res) => {
  try {
    const DeleteOrder = await Order.findByIdAndDelete({
      _id: req.body.orderid,
    });
    res.status(200).json(DeleteOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateorderstatus = async (req, res) => {
  try {
    const updatestatus = await Order.findByIdAndUpdate(
      req.body.orderid,
      { OrderStatus: req.body.OrderStatus },
      { new: true }
    );
    res.status(200).json(updatestatus);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getTotalOrdersCount = async (req, res) => {
  try {
    const totalOrdersCount = await Order.countDocuments();
    res.status(200).json({ totalOrdersCount });
  } catch (error) {
    res.status(500).json(error);
  }
};
