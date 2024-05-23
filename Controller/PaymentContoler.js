const { json } = require("body-parser");
const Payment = require("../Models/PaymentSchema");

exports.addpayment = async (req, res) => {
  try {
    const AddPAyment = await Payment.create(req.body);
    res.status(200).json(AddPAyment);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getsllpayments = async (req, res) => {
  try {
    const AllPayments = await Payment.find();
    res.status(200).json(AllPayments);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePaymentById = async (req, res) => {
  try {
    const Upadate = await Payment.findByIdAndUpdate(
      req.body.paymentid,
      {
        PaymentStatus: req.body.PaymentStatus,
      },
      {
        new: true,
      }
    );
    res.status(200).json(Upadate);
  } catch (error) {
    res.status(200).json(error);
  }
};

exports.deletepaymentbyid = async (req, res) => {
  try {
    const deletepayment = await Payment.findByIdAndDelete({
      _id: req.body.paymentid,
    });
    res.status(200).json(deletepayment);
  } catch (error) {
    res.status(500).json(error);
  }
};
