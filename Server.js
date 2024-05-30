const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const server = express();
const multer = require("multer");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const shortid = require("shortid");
const { Server } = require("http");
require("dotenv").config();
/////////////
server.use(bodyparser.json());
server.use(cors());

server.use("/api", require("./Routes/Routes"));

server.use(express.static("Uploads"));
server.use("/images", express.static("Uploads"));

mongoose.connect("mongodb://35.154.105.133:27017/food_Api");
// mongoose.connect('mongodb://localhost:27017/food-api', { useNewUrlParser: true });

try {
  console.log("Database connect successfully!!!");
} catch (error) {
  console.log("DataBase is not connected", error);
}

const fileStorageConfig = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileUploadConfig = multer({
  storage: fileStorageConfig,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
      return cb(new Error("Please Upload Correct File"));
    }
    cb(undefined, true);
  },
});

server.get("/", (req,res) => {
  res.status(200).send("Hi FROM AWS")
});

server.post(
  "/uploadfile",
  fileUploadConfig.single("image"),
  (req, res) => {
    res.status(200).json({
      filepath: "/images/".concat(req.file.filename),
      uploaded: true,
    });
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

server.get("/user", (req, res) => {
  res.send("Hello world!!");
});

server.use(express.static("Uploads"));
server.use("/images", express.static("Uploads"));

// //initialize Razor Pay
// var razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// //Payment order creation
// server.post("/razorpay", async (req, res) => {
//   const payment_capture = 1;
//   const amount = Number(req.body.amount * 100);
//   const currency = "INR";

//   const options = {
//     amount,
//     currency,
//     receipt: shortid.generate(),
//     payment_capture,
//   };

//   try {
//     const response = await razorpay.orders.create(options);
//     console.log(response);
//     res.status(200).json({
//       id: response.id,
//       currency: response.currency,
//       amount:response.amount
//     });
//   } catch (error) {
//     console.log(err);
//   }
// });
// //varify payment

// server.post("/verification", (req, res) => {
//   const secret = "razorpaysecreate";
//   console.log(req.body);
//   const shasum = crypto.createHmac("sha256", secret);
//   shasum.update(JSON.stringify(req.body));
//   const digest = shasum.digest("hex");
//   console.log(req.headers["x-razorpay-signature"]);

//   if (digest === req.headers["x-razorpay-signature"]) {
//     console.log("request is legit");
//     res.status(200).json({
//       message: "ok",
//     });
//   } else {
//     res.status(403).json({ message: "Invalid" });
//   }
// });

//start theb server
server.listen(5000, () => {
  console.log("Server Started");
});
