const Lecture=require("../model/lectureModel")
 const date=new Date().setUTCHours(0,0,0,0)

exports.totalClass=async(req,res)=>{
    try{
        const subjectID=req.parms
        const check=await Lecture.find({subjectID,date})
        if(!check.length){
            const lecture=await Lecture.create({
               subjectID,date
            })
            res.json({
                lecture
            })
        }
        else{
            res.json({
                message:"class marked"
            })
        }
    }
    catch(e){
        console.log(e)
    }
}