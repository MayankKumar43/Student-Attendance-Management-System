const express=require("express");
const bodyParser=require("body-parser")
const app=express();

app.use(express.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended:true}))

const student=require("./routes/studentRoute")
const subject=require("./routes/subjectRoutes")
const lecture=require("./routes/lectureRoute")
const enroll=require("./routes/enrollRoute")
const attendance=require("./routes/attendanceRoute")

app.use("/api/attendance",attendance)
app.use("/api/enroll",enroll)
app.use("/api/lecture",lecture)
app.use("/api/student",student)
app.use("/api/subject",subject)
module.exports=app