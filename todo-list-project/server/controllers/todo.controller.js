const { directoryModel } = require('../models/directory.model');
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

const getAllTodosOfOneDirectory=async (req, res)=>{
    try {
        const userId=req.userId;
        const {id:directoryId}=req.params;
        const todos=await todoModel.find({userId, directory:directoryId});
        res.status(200).json({todos, msg:'All todos of a directory'})
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getOneTodo=async (req, res)=>{
    try {
        const userId=req.userId;
        const {id:todoId}=req.params;
        const todo=await todoModel.findOne({userId, _id:todoId})
        res.status(200).json({todo})
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTodo=async (req, res)=>{
    try {
        const data=req.body
        const defaultDir=await directoryModel.findOne({name:'Main'});
        const todo=await todoModel.create({directory:defaultDir._id,...data})
        res.status(201).json({data:todo, msg:'create todo successfully'})
        console.log(await todo.populate('directory'));
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTodo=async (req, res)=>{
    try {
        const {id:_id}=req.params;
        const userId=req.userId;
        const deleteTodo=await todoModel.findOneAndDelete({_id, userId});
        if(!deleteTodo){
            return res.status(400).json({msg:'you can not delete this todo'})
        }
        res.status(200).json({msg:'todo deleted!!'})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

const updateTodo=async (req, res)=>{
    try {
        const userId=req.userId;
        const newData=req.body;
        const {id:_id}=req.params;
        const updatedTodo=await todoModel.findOneAndUpdate({_id, userId}, {...newData});
        if(!updatedTodo){
            return res.status(400).json({msg:'you can not update this todo'})
        }
        res.status(201).json({msg:'todo update :>', data:{...updateTodo, ...newData}})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

module.exports={getAllTodosOfOneUser, createTodo, deleteTodo, updateTodo, getAllTodosOfOneDirectory, getOneTodo}