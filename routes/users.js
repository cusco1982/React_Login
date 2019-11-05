const express = require('express');
const router = express.Router();
const passport = require('../passport');


// Custom Passport Callback
router.post('/signup', (req, res, next) => {

  passport.authenticate('local-signup',function (error, user, info) {

    if (error) {
      return res.status(500).json({
        message: 'Oops something happened',
        error: error.message || 'internal server error'
      });
    }

    return res.json({
      message: 'User authenticated',
    })
  })(req, res, next);
})


/* GET users listing. */
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/home',
  session: false
}));


router.post('/signin', function (req, res, next) {
  res.send('respond with a resource');
});











module.exports = router;
