import dotenv from "dotenv";
import connectDB from "./db/index.js";
import mongoose from "mongoose";

dotenv.config({
  path: "./env"
}); 

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server  is running on port :${process.env.PORT}`);
  })
})
.catch((error)=>{
  console.log("Mango dp connection faled", error);
})






// import express from "express";
// const app =express();
// (async()=>{
//     try{
//         await mangoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listeninig on port ${process.env.PORT}`);
//         });
//         console.log("connected to db");
//     }catch(err){
//             console.error("error",error)
//     }
// })
