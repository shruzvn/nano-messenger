import express from 'express';
import Router from './routes/signUp.js';

const app = express();

app.set('view engine', 'ejs');


app.use('/signUp', Router);
app.use('/signUp', Router);


app.listen(3000);