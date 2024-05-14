import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import router from './router/router.js'
const app = express()

const port = process.env.PORT || 8080

const corsOptions = {
    origin: [process.env.URL_FRONTED, process.env.URL_FRONTED2, process.env.FRONTEND_URL4],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/', router)
app.listen(port, () => {
    console.log('servidor escuchando puerto')
})