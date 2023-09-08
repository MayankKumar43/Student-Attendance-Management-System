const express=require('express')
const router=express.Router()
const {createUser,getAllStudents,getStudent}=require("../controller/studentController")
router.route('/user').post(createUser)
router.route('/allstudent').get(getAllStudents)
router.route('/email').get(getStudent)

module.exports=router