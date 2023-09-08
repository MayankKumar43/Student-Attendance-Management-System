const Student=require("../model/studentModel")

exports.createUser=async(req,res)=>{
    try {
        const{studentName,email,branch}=req.body
        const createStudent = await Student.create({
            studentName,
            email,
            branch,
        })
        res.json({
            createStudent

        })
        
    } catch (error) {
        console.log(error)
        
    }
}

exports.getStudent=async(req,res)=>{
    try {
        const findStudent= await Student.find({email:req.body.email})
          res.status(200).json({
            findStudent
          })
        
    } catch (error) {
        console.log(error)
        
    }

}

exports.getAllStudents=async(req,res)=>{
    try {
        const allStudents= await Student.find()
        res.status(200).json({
            allStudents
        })
        
    } catch (error) {
        console.log(error)
        
    }
}