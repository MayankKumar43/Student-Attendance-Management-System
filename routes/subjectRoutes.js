const express=require("express")
const router=express.Router()
const{addSubject,getsubject}=require("../controller/subjectController")

router.route("/create").post(addSubject)
router.route("/getsubject").get(getsubject)

module.exports=router