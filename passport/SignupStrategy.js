const Strategy = require('passpor-local').Strategy;


const SignupStrategy = new LocalStrategy( function (username, password, done) {
    // what should be happening once user signup

});


module.exports = SignupStrategy;