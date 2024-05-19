import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
import router from './router/router.js'
const app = express()
app.use(express.static(path.join(__dirname, 'dist')));

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