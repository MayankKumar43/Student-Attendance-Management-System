const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/Database.js")

dotenv.config({path:"./config/config.env"});
connectDatabase();

const server=app.listen(process.env.Port,()=>{
    console.log("server is live");
})