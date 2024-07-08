const {Schema, model}=require('mongoose');

const userSchema= new Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    }, 
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    verified:{
        type:Boolean, 
        default:false
    }
})

const userModel= new model('User', userSchema)
module.exports={userModel}