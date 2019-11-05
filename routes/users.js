const express = require('express');
const router = express.Router();
const passport = require('../passport');


// passport.authenticate('local-signup', () => {

// });



/* GET users listing. */
router.post('/signuo', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});











module.exports = router;
