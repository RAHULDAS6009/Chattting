const mongoose=require("mongoose");

 const connectDB=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
        console.log("mongoDB connected");
        
    } catch (error) {
        console.log("Error",error.message);
        
        process.exit(0)
    }
}

module.exports = connectDB