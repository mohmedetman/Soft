import { Router } from 'express';

import department from '../models/department.js';
import subject from '../models/subject.js';

const router = new Router();


router.get('/',(req, res) => {
    res.render('subjects/all')
});


router.get('/create_departments'),async (req,res) =>
{
    await debartment.create({
        name: 'computer system',
        code: 'cs',

    })

    await debartment.create({
      name: 'information system',
      code: 'is',
    })

   await debartment.create({
      name: 'information tecnology',
      code: 'it',
   })

};
export default router;

