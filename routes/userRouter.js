import {Router} from "express"
import { all,create,store } from "../controllers/sutdent.js";
const Userrouter = new Router();
Userrouter.get('/',all)
Userrouter.get('/create',create)
Userrouter.post('/',store)
export default  Userrouter;