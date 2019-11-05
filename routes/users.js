const express = require('express');
const router = express.Router();
const passport = require('../passport');


// Custom Passport Callback
router.post('/signup', (req,res) => {

  passport.authenticate(function(error, user, info) {

    if(error) {
      res.status(500).JSON({
        message: 'Oops something happened',
        error: error.message || 'internal server error'
      });
    }
  })(req,res);
})


/* GET users listing. */
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/home',
  session: false
}));


router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});











module.exports = router;
