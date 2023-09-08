const express=require("express")
const router=express.Router()

const{ enrollStudent,getAllStudentBySubjectId,getAllSubjectByStudentId }=require("../controller/enrollController")

router.route('/enroll/:_id').post(enrollStudent)
router.route('/getstudents/:_id').get(getAllStudentBySubjectId)
router.route('/getsubjects/:_id').get(getAllSubjectByStudentId)

module.exports=router