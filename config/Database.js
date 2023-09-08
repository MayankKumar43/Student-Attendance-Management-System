const mongoose=require("mongoose");

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser :true,
        useUnifiedTopology: true
    }).then((response)=>{
        console.log("Database is connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDatabase;