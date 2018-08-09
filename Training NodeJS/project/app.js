var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Third-parties
var expressLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');

//Self-create
const systemConfig = require('./config/system');


mongoose.connect('mongodb://minhtha:Hcmusk15@ds113692.mlab.com:13692/training_nodejs', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION FAIL:'));
db.once('open', function() {
  // we're connected!
  console.log("CONNECTED");
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'backend');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.locals.systemConfig = systemConfig;


app.use(`/${systemConfig.prefixAdmin}`, require('./routes/backend/index'));
app.use('/', require('./routes/frontend/index'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{titlePage : 'Page Not Found'});
});

module.exports = app;
