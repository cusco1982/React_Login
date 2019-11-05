const Strategy = require('passport-local').Strategy;
const User = require('../models/user');

const SignupStrategy = new Strategy( function (username, password, done) {
    const user = username;
    // what should be happening once user signup
    done(null,'User signed up');

});


module.exports = SignupStrategy;