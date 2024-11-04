import app from "./src/app"

import { config } from "./src/config/config"
import connectDb from "./src/config/db"


console.log("welocome to typescipt api")

const PORT=config.port || 5000

const startServer=()=>{
    connectDb()
    app.listen(PORT ,async()=>{
        console.log(`server is listning at ${PORT} port `)
        })
}

startServer()

