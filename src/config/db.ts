import { config } from "./config";
import mongoose from "mongoose";


const connectDb=async()=>{
    try {
        mongoose.connection.on("connected",()=>{
         console.log("databse is connected successfully")
        })

        mongoose.connection.on("error",(err)=>{
            console.log("databse connection is not connected",err)
        })
     await mongoose.connect(config.mongoUrl as string)

    } catch (error) {
        console.error(error)
    }
}

export default connectDb