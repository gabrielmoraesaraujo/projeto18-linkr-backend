import {db} from '../database/database.js'
import { createCadastroSchema } from "../schemas/cadastroSchema.js"

export async function validCadastro(req,res,next){

    console.log(req.body)
    const cadastro = req.body

    const {error} = createCadastroSchema.validate(cadastro)

    if(error){
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({errors})
    }
  

    const cadastroExists = await db.query('SELECT * FROM users WHERE email=$1', [cadastro.email])

    if(cadastroExists.rowCount>0) return res.sendStatus(409)

    res.locals.cadastro = cadastro

    next()
}