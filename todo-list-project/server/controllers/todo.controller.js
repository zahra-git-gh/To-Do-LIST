const {todoModel}=require('../models/todo.model');

const getAllTodosOfOneUser=async (req, res)=>{
    const userid=req.userId
    try {
        if(!userid){
        return res.status(404).json({error: 'Access denied'})
        }
        const todos=await todoModel.find({userId:userid})
        res.status(200).json({todos})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTodo=async (req, res)=>{
    try {
        const data=req.body
        console.log(data);
        const todo=await todoModel.create(data)
        res.status(201).json({data:todo, msg:'create todo successfully'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTodo=async (req, res)=>{
    try {
        const {id}=req.params;
        const userId=req.userId
        const todo=await todoModel.findOneAndDelete({_id:id, userId})
        res.status(200).json({msg:'todo deleted!!', todo})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

const updateTodo=async (req, res)=>{
    try {
        const userId=req.userId;
        const newData=req.body;
        const {id}=req.params;
        const updatedTodo=await todoModel.findOneAndUpdate({_id:id, userId}, {...newData})
        res.status(201).json({msg:'todo update :>'})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

module.exports={getAllTodosOfOneUser, createTodo, deleteTodo, updateTodo}