const express = require("express");
const router = express.Router();
const customercontrollaer = require("../Controller/CustomerControler");
const foodcontroller = require("../Controller/Foodcontoler");
const ordercontroler = require("../Controller/OrderControler");
const paymentcontroler = require("../Controller/PaymentContoler");
const contactUs=require("../Controller/Contactus")
//Customer routes
router.post("/createcustomer", customercontrollaer.createcustomer);
router.get("/getcustomers", customercontrollaer.getcustomers);
router.get("/getcustomerbyid", customercontrollaer.getcustomerbyid);
router.put( "/updatecustomerpassword",  customercontrollaer.updatecustomerpassword)
router.delete("/deletecustomer", customercontrollaer.deletecustomer);
router.post("/doLogin",customercontrollaer.doLogin);
router.get("/getCustomerCount",customercontrollaer.getCustomerCount)

//foods Routes
router.post("/addfood", foodcontroller.addfood);
router.get("/getallfood", foodcontroller.getallfood);
router.put("/updatefoodsprice", foodcontroller.updatefoodsprice);
router.put("/updateFoodAvailability", foodcontroller.updateFoodAvailability);
router.delete("/deletefood", foodcontroller.deletefood);
router.post("/getfoodbycategory",foodcontroller.getfoodbycategory);
router.post("/getfoodbytype",foodcontroller.getfoodbytype)
router.get('/totaldishescount', foodcontroller.getTotalDishesCount);
router.get("/categorycount",foodcontroller.categorycount)
//Order Routes
router.post("/addorder", ordercontroler.addorder);
router.get("/getallorders", ordercontroler.getallorders);
router.get("/getOrderById", ordercontroler.getOrderById);
router.put("/updateOrderById", ordercontroler.updateOrderById);
router.delete("/deleteorder", ordercontroler.deleteorder);
router.put("/updateorderstatus",ordercontroler.updateorderstatus)
router.get("/getTotalOrdersCount",ordercontroler.getTotalOrdersCount)
//Payment Routes
router.post("/addpayment", paymentcontroler.addpayment);
router.get("/getsllpayments", paymentcontroler.getsllpayments);
router.put("/updatePaymentById", paymentcontroler.updatePaymentById);
router.delete("/deletepaymentbyid", paymentcontroler.deletepaymentbyid);
//contactUs
router.post("/addcontact",contactUs.addcontact);
router.get("/getallcontactlist",contactUs.getallcontactlist)

module.exports = router;
