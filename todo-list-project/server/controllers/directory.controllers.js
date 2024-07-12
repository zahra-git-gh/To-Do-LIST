const {directoryModel}=require('../models/directory.model');
const { todoModel } = require('../models/todo.model');

const getAllDirectoryOfOneUser=async (req, res)=>{
    try {
        const userId=req.userId
        const directories=await directoryModel.find({userId});
        res.status(200).json({directories})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const postDirectory=async (req, res)=>{
    try {
        const data=req.body;
        const directories=await directoryModel.find({userId:req.body.userId});
        const isExist=directories.find((directory)=>directory.name===req.body.name);
        if(isExist){
            return res.status(400).json({error:'duplicate directory'})
        }
        const newDir=await directoryModel.create(data);
        res.status(201).json({msg:'directory created', directory:newDir})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateDirectory=async (req, res)=>{
    try {
        const userId=req.userId;
        const newData=req.body;
        const {id:_id}=req.params;
        const directory=await directoryModel.findOne({userId, _id});
        if(!directory){
            return res.status(400).json({msg:'you can not update this directory'})
        }
        const updateDir=await directoryModel.findOneAndUpdate({userId, _id}, newData);
        res.status(201).json({msg:'directory updated', directory:{...updateDir._doc,...newData}}); 
    } catch (error) {
        res.status(500).json({msg:error})
    }
};

const deleteDirectory=async (req, res)=>{
    try {
        const {id:_id}=req.params;
        const userId=req.userId;
        const directory=await directoryModel.findOne({ _id, userId});
        const deleteTodos=await todoModel.deleteMany({directory:_id});
        if(!directory){
            return res.status(400).json({msg:'you can not delete this directory'})
        }
        const deletedDir=await directoryModel.findOneAndDelete({ _id, userId})
        res.status(200).json({msg:'directory deleted', directory:deletedDir})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports={
    deleteDirectory,
    updateDirectory,
    postDirectory,
    getAllDirectoryOfOneUser
}