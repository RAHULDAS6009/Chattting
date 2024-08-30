const express=require("express");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
// const { connectDB } = require("./config/db");
const app=express();
dotenv.config();
connectDB()
app.get("/",(req,res)=>{
    console.log("Hello world")
    res.send("hell")
})


app.listen(5000,()=>(`app listening${process.env.PORT}`))