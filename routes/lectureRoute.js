const express=require("express")
const router=express.Router()
const {totalClass}=require("../controller/lectureControlller")

router.route('/Classes/:_id').post(totalClass)

module.exports=router  