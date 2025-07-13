const mongoose=require('mongoose')
const IncubatorDataSchema=new mongoose.Schema({
    name:{type :String,required:true},
    email:{type:String,required:true},
    idea:{type:String,required:true},
    budget:{type:String,required:true},
    submittedAt:{type:Date,default:Date.now},


})

const IncubatorData=mongoose.model("IncubatorIdea",IncubatorDataSchema);
module.exports=IncubatorData