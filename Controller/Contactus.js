const {json}=require("body-parser");
const Contact=require("../Models/ContactUsSchema");

exports.addcontact=async(req,res)=>{
    try {
        const newcontact=await Contact.create(req.body)
        res.status(200).json(newcontact);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getallcontactlist=async(req,res)=>{
    try {
        const getcontact=await Contact.find();
        res.status(200).json(getcontact);
    } catch (error) {
        res.status(500).json(error)
    }
};