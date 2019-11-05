const passport = require ('passport');

// import all the strategies
const SignupStrategy = require("./GoogleStrategy");
const SigninStrategy = require("./GoogleStrategy");
// const GoogleStrategy = require("./GoogleStrategy");


passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;