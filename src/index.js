import dotenv from "dotenv"
import  express  from "express";
import dbConnect from "./db/index.js";

dotenv.config();
const app=express();
dbConnect()
.then(()=>{
     app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port: ${process.env.PORT}`)
       })   
})
.catch((err)=>{
        console.log("mongo db connnection failed")
})




