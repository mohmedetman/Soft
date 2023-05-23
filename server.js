import express from 'express';
import { engine } from 'express-handlebars';
//import  students from './database/usersarray.js'
import { students } from "./database/usersarray.js";
import studentsroutes from "./routes/studentroutes.js"
import userroutes from "./routes/userroutes.js"

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/student', studentsroutes);
app.use('/user', userroutes);


app.listen(3000);
    