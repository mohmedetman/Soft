import express from 'express';
import { engine } from 'express-handlebars';
import deparment from './models/department.js';
import Studentrouter from './routes/studentsRoute.js'
import Userrouter from './routes/userRouter.js';
import mongoose from 'mongoose';
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
//const express = require('express')
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');
app.set('views','./templetes');
app.use('/student',Studentrouter)
app.use('/user',Userrouter),

app.get('/deparment', async (req, res)=> {
    await deparment.create({
       name:"cs",
        code:"123",

    }),
    await deparment.create({
        name:"it",
         code:"13",
 
     }),  await deparment.create({
        name:"cs",
         code:"13",
 
     })
  });
  

app.listen(5000)



   

  