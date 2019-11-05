const Strategy = require('passpor-local').Strategy;
const User = require('../models/user');


const SignupStrategy = new Strategy( function (username, password, done) {
    const user = username;
    // what should be happening once user signup

});


module.exports = SignupStrategy;