import app from "./src/app"

console.log("welocome to typescipt api")

const PORT=process.env.PORT || 5000

const startServer=()=>{
    app.listen(PORT ,async()=>{
        console.log(`server is listning at ${PORT} port `)
        })
}

startServer()

