const Strategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const SignupStrategy = new Strategy({ passReqToCallback: true }, function (req, username, password, done) {
    const email = req.body.email;

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return cb(err, null);
        }
        if (user) {
            return cb('User already exists', null);
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

            return done(null, inserted);
        });

    });


    module.exports = SignupStrategy;