const express=require('express');
const app=express()
const cors=require('cors');
require('dotenv').config();
const {connectDB}=require('./db/connectDB.js');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// const {userModal}=require('./models/user.model.js');
async function start(){
    try {
        await connectDB()
        app.listen(3000, ()=>{
            console.log('your server run on port 3000');
        })

    } catch (error) {
        console.log(error);
    }
}
start()