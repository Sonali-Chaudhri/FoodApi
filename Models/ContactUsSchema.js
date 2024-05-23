const mongoose=require("mongoose")
const ContactUsSchema=mongoose.Schema({
    Name:String,
    EmailId:String,
    Message:String
})

module.exports=mongoose.model("contact",ContactUsSchema)