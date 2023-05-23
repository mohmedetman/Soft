// import {Router} from 'express';

import { create } from "express-handlebars";
import { index, show, store } from "./controller/subject";

// import department from '../models/department.js';
// import subject from '../models/subject.js';
// import { creat, create, index, show, store } from './controller/subject.js';
// import { type } from 'os';

const router = new Router();

router.get('/' , index);
router.get('/create' , create);

router.post('/' , store);

router.get('/:id,',show);


module.exports = router