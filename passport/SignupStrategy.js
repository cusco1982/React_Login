const Strategy = require('passpor-local').Strategy;
const User = require('../models/user');


const SignupStrategy = new LocalStrategy( function (username, password, done) {
    // what should be happening once user signup

});


module.exports = SignupStrategy;