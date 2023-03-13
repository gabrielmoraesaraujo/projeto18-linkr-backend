import {db} from '../database/database.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
//import { loginSchema } from "../schemas/loginSchema.js"

export async function login(req, res)   {

    const { email, password } = req.body;

    const { rows: user } = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

    if(!user) return res.sendStatus(401)

    if(bcrypt.compareSync(password, user[0].password)){
        const token = uuid();


        await db.query(`
        INSERT INTO sessions (token, "userId") VALUES ($1, $2)`
        , [token, user[0].id])
        
        return res.send({ token })
    }

    res.sandStatus(401); 
}