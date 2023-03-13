import { db } from '../database/database.js'
import bcrypt from 'bcrypt'

export async function create(req,res){

    const { name, email, password} = res.locals.cadastro


    try{

      const passwordHash = bcrypt.hashSync(password, 10)

      await db.query(`
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3);
      `, [name, email, passwordHash])
      
      
      res.sendStatus(201)
    } catch (error){
        res.status(500).send(error.message)
    }
}





