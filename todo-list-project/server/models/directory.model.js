const {Schema, model}=require('mongoose');

const directorySchema=new Schema({
    userId:{
        required:true,
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    name:{
        required:true,
        type:String,
        default:()=>'Main'
    }
})

const directoryModel=model('Directory', directorySchema)
module.exports={directoryModel}