import express from "express"
import dotenv from "dotenv"
import firebaseConfig from "../config/firebaseConfig"
import userRoute from "../routes/userRoute"

dotenv.config()
const port = process.env.PORT
const app: express.Application = express()

/** setup global variable */
app.locals.firestore = firebaseConfig.db
app.locals.firebaseAuth = firebaseConfig.auth

/** setup route & middleware */
app.use(express.json())
app.use("/api/users", userRoute)

app.listen(port, ()=>{console.log(`[log] system run in http://localhost:${port}`)})