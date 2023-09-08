const express=require("express")
const router=express.Router()
const {subjectAttendance,attendanceByDate,eligibility}=require("../controller/attendanceController")
router.route('/subjectattendance/:_id').post(subjectAttendance)
router.route('/date').get(attendanceByDate)
router.route('/eligible/:_id').get(eligibility)
module.exports=router