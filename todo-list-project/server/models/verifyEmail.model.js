const {Schema, model}=require('mongoose');

const verifiedSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:[true, 'user id is required for verified'],
        ref:'User'
    },
    token:{
        type:String, 
        required:true
    },
    expireDate:{
        type:Date,
        required:true,
        default:()=>Date(Date.now() + 60 * 60 * 1000),
        index:{expires:'1h'}
    }
})

const VerifyEmail= model("VerifyEmail", verifiedSchema)
module.exports={VerifyEmail}