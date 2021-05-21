var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require ('body-parser');

var usersRouter = require('./routes/users');
var candidatesRouter = require('./routes/candidates');
var voteRouter = require('./routes/vote');

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vote-db', {useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then (() => console.log('connection succesful'))
  .catch((err) => console.error(err));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/vote-app')));

//definimos las rutas de nuestra app
//app.use('/', indexRouter);
//api routes
app.use('/api/users', usersRouter);
app.use('/api/candidates', candidatesRouter);
app.use('/api/vote', voteRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   console.log(req);
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
