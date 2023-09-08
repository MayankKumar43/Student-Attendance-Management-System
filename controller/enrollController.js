const Enroll=require("../model/enrollModel")


exports.enrollStudent=async(req,res)=>{

    try {
        const subjectID=req.body.subjectID
        const studentId=req.params.studentId

        const check=await Enroll.find({studentId,subjectID})

        if(!check.lenght){
            const enroll=await Enroll.create({studentId, subjectID})
            res.status(200).json({
                enroll,
                message:"Enrollment successful"
            })
        }
        else{
            res.status(403).json({
                message:"Student already enrolled"
            })
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

exports.getAllSubjectByStudentId=async(req,res)=>{
    try{
        const subject=await Enroll.find({subjectID:req.params.id}).populate('studentID')
        res.json({
            subject
        })
    }
    catch(e){
        console.log(e)
    }
}
  

exports.getAllStudentBySubjectId=async(req,res)=>{
    try{
        const student=await Enroll.find({studentID:req.params.id}).populate("subjectID")
        
        res.json({
            student
        })

    }
    catch(e){
        console.log(e)
    }
}

