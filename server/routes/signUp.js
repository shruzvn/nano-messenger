import express from 'express';
import path from 'path';

const Router = express.Router();


Router.get('/', (req, res) => {

    res.render(path.join('../views/SignUp.ejs'));

});

export default Router;