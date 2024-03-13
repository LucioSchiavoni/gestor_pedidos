import express from 'express'
import cors from 'cors'
import notasRouter from './src/routes/notas.routes.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

const PORT = process.env.PORT

const opcionesCors = {
    origin: process.env.FRONTEND_URL_DEV
}

app.use(cors(opcionesCors))
app.use(express.json())
app.use("/", notasRouter)



app.listen(PORT, () =>  { 
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})