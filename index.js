const express=require("express");
const app=express();
require("dotenv").config();
app.use(express.json())
const user=require("./routes/user")
app.use("/api/v1",user)
const PORT=process.env.PORT||4000
app.listen(PORT,()=>{
    console.log(`App is running successfully on PORT No. ${PORT}`)
})
require("./config/database").dbConnect();
app.get("/",(req,res)=>{
    res.send("Hello everyone")
})