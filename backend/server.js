const express=require("express");
const dotenv=require("dotenv")
const app=express();
dotenv.config();
app.get("/",(req,res)=>{
    console.log("Hello world")
    res.send("hell")
})


app.listen(5000,()=>(`app listening${process.env.PORT}`))