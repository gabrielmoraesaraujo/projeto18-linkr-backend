import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

import cadastroRoute from "./routes/cadastroRoute.js"
import loginRoute from "./routes/loginRoute.js"


const app = express();

app.use(cors())
app.use(express.json())

app.use(cadastroRoute);
app.use(loginRoute);

const port = process.env.PORT

app.listen(port, () => console.log(`Server running in port: ${port}`));
