const express = require('express');
const router = express.Router();
const passport = require('../passport');


router.post('/signup', (req, res, next) => {

  // Custom Passport Callback
  passport.authenticate('local-signup', function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: 'Oops something happened',
        error: error.message || 'internal server error'
      });
    }


    return res.json(user);
  })(req, res, next);
});



router.post('/signin', function (req, res, next) {
  res.send('respond with a resource');
});











module.exports = router;
