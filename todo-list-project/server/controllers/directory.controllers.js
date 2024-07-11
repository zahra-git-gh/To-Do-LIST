const {directoryModel}=require('../models/directory.model');

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
        const directory=await directoryModel.findOne({userId, _id:id});
        if(!directory){
            return res.status(400).json({msg:'you can not update this directory'})
        }
        const updateDir=await directoryModel.findOneAndUpdate({userId, _id}, newData);
        res.status(201).json({msg:'directory updated', directory:{...updateDir,...newData}}); 
    } catch (error) {
        res.status(500).json({msg:error})
    }
};

const deleteDirectory=async (req, res)=>{
    try {
        const {id:_id}=req.params;
        const userId=req.userId;
        const directory=await directoryModel.findOne({ _id, userId});
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