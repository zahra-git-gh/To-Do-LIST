const { Schema, model}=require('mongoose');

const todoSchema= new Schema({
    userId:{
        required:true,
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        required:true,
        type:String
    },
    description:{
        type:String
    },
    deadline:{
        require:true,
        type:Date
    },
    isImportant:{
        type:Boolean
    },
    isCompleted:{
        type:Boolean
    },
    directory:{
        type:Schema.Types.ObjectId,
        ref:'Directory',
        required:[true, 'directory is required'],
        
    }
})

const todoModel= model('Todo', todoSchema)
module.exports={todoModel}