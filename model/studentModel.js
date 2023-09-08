const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    studentName:{
        type:String,
        required:[true,"Please Enter your name"],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please enter valid email"],
    },
     branch:{
        type:String,
        require:true,
     }

})

module.exports=new mongoose.model("Student",studentSchema);