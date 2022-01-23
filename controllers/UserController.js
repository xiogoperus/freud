const bcrypt = require('bcryptjs');
const config = require('../config/database');
const passport = require('passport');
require('../config/passport')(passport);
const User = require('../models/User.js');

class UserController {
    index(req, res) {
        res.render('register')
    }
    loginPage(req, res) {
        res.render('login')
    }

    login(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        })(req, res, next);

    }

    register(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const password2 = req.body.password2;

        let newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        
                newUser.save(function(err) {
                    if(err) {
                        console.log(err);
                        return;
                    } else {
                       res.redirect('/register');
                    }
                });

    }

}

module.exports =  new UserController();