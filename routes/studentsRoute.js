import {Router} from "express"
import { all,create,store } from "../controllers/sutdent.js";
const Studentrouter = new Router();
Studentrouter.get('/',all)
Studentrouter.get('/create',create)
Studentrouter.post('/',store)
export default  Studentrouter;