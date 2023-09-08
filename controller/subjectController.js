const Subject=require("../model/subjectModel")


exports.addSubject=async(req,res)=>{
    try {
        const{subjectName,subjectCode}=req.body
        const createsubject= await Subject.create({
            subjectName,
            subjectCode,
        })
        res.json({
            createsubject,
            message:"subject addded successfully"
        })
        
    } catch (error) {
        console.log(error)
    }
}

exports.getsubject=async(req,res)=>{
   try {
    const subjects= await Subject.find()
        res.status(200).json({
            subjects
        })
        
    
   } catch (error) {
    console.log(error)
    
   }
}