import {Router} from "express";
import {create} from "../controllers/cadastroController.js"
import { validCadastro } from "../middlewares/cadastroMiddleware.js";

const cadastroRoute = Router();

cadastroRoute.post('/cadastro', validCadastro, create);


export default cadastroRoute;