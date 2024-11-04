import express from "express"
import { Request,Response,NextFunction } from "express"

const app = express()


app.get("/", (req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({
        messgage:`all api is workin fine`
    })
})


export default app