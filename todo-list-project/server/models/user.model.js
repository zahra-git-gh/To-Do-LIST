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
        match: [/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/]
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

const userModel= model('User', userSchema)
module.exports={userModel}