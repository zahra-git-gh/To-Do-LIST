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
        unique: true
    }
})

const directoryModel=model('Directory', directorySchema)
module.exports={directoryModel}