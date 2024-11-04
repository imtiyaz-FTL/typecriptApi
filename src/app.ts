import { config } from "./config/config"
import express from "express"
import { Request,Response,NextFunction } from "express"
import createHttpError, { HttpError } from "http-errors"
import globalErrorHandler from "./middlewares/globalErrorHandler"

const app = express()


app.get("/", (req:Request,res:Response,next:NextFunction)=>{

    // throw new Error("something went wrong",err)
    const error=createHttpError(400,"something went wrong")
    throw error;
    res.status(200).json({
        messgage:`all api is workin fine`
    })
})



//global error handler 

app.use(globalErrorHandler)


export default app