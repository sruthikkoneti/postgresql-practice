import express from "express";
import cors from "cors";
import {PORT} from "./constants/index.js"
import authRoutes from "./routes/authRoutes.js"
const app = express()
app.use(express.urlencoded({extended: true, limit:"30mb" }))
app.use(express.json())
app.use(cors())

app.use("/",authRoutes)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} `);
})