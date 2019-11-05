const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const passport = require('./passport')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT=process.env.PORT || 8080;
const log = console.log;

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
// app.use(passport.session());

mongoose.connect("mongodb://localhost/authentication", {useNewUrlParser:true});


app.listen(PORT, () => {
  log(`App listening on PORT:${PORT}`);
})


module.exports = app;
