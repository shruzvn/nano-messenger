import express from 'express';
import path from 'path';
import user from '../models/User.js';


const Router = express.Router();


Router.get('/', (req, res) => {

    res.render(path.join('../views/SignUp.ejs'));

});

Router.post('/', (req, res) => {
    const User = new user({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });

    User.save()
        .then(res => {
            res.status(201).json({
                message: "yo connected"
            })
        }).catch(err => {
            res.status(500).json({
                err: error
            })
        })

});

export default Router;