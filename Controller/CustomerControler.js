const { json } = require("body-parser");
const Customer = require("../Models/CustomerSchema");

exports.createcustomer = async (req, res) => {
  //call api to regestration form file customer side
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getcustomers = async (req, res) => {
  try {
    const allcustomers = await Customer.find();
    res.status(200).json(allcustomers);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET a specific customer by ID
exports.getcustomerbyid = async (req, res) => {
  try {
    const customerdata = await Customer.findOne({ _id: req.body.customerid });
    res.status(200).json(customerdata);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatecustomerpassword = async (req, res) => {
  try {
    const update = await Customer.findByIdAndUpdate(
      req.body.customerid,
      { CustomerPassword: req.body.CustomerPassword },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletecustomer = async (req, res) => {
  try {
    const delcustomer = await Customer.findByIdAndDelete({
      _id: req.body.customerid,
    });
    res.status(200).json(delcustomer);
  } catch (error) {
    res.status(500).json(error);
  }
};

//login
exports.doLogin = async (req, res) => {
  try {
    const result = await Customer.findOne(req.body);
    if (!result) {
      const message = {
        message: "Login Failed!!",
        data: result,
      };
      res.status(200).json(message);
    } else {
      const message = {
        message: "Login Successfully!!",
        data: result,
      };
      res.status(200).json(message);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getCustomerCount = async (req, res) => {
  try {
    const totalusers = await Customer.countDocuments();
    res.status(200).json(totalusers);
  } catch (error) {
    res.status(500).json(error);
  }
};
