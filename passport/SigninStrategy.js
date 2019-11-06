const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);


const LoginStrategy = new Strategy( function (username, password, done) {
    // what should be happening once user signup
    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done('User already exists', null);
        }

        const encryptedPassword = bcrypt.hashSync(password, salt);
        let newUser = new User({
            email,
            password: encryptedPassword
        });

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }
            delete inserted.password; //todo
             return done(null, inserted);
        });

    
});


module.exports = LoginStrategy;