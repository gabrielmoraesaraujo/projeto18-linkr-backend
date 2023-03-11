import { db } from '../database/database.js'
//import bcrypt from 'bcrypt'

export async function create(req,res){
    const { name, email, password} = res.locals.cadastro
  //  const passwordHash = bcrypt.hashSync(cadastro.password, 10)
    try{
      await db.query(`
      INSERT INTO users (name, email, password:passwordHash)
      VALUES ($1, $2, $3);
      `, [name, email, password])
      
      
      res.sendStatus(201)
    } catch (error){
        res.status(500).send(error.message)
    }
}





