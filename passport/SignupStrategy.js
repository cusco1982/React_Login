const Strategy = require('passport-local').Strategy;
const User = require('../models/user');

const SignupStrategy = new Strategy({ passReqToCallback: true }, function (req, username, password, done) {
    const email = req.body.email;

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return cb(err, null);
        }
        if (user) {
            return cb(null, user);
        }

        let newUser = new User({
            profileId: profile.id,
            email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
            username: profile.username,
            profileImage: (profile.photos.length > 0) ? profile.photos[0].value : null,
            accessToken: token,
            refreshToken: tokenSecret,
            provider: profile.provider || 'gitub'
        });

        newUser.save((error, inserted) => {
            if (error) {
                return cb(error, null);
            }

            return cb(null, inserted);
        });

    });


    module.exports = SignupStrategy;