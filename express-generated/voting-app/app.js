var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;


// Configure the Facebook strategy for use by Passport.
passport.use(new Strategy({
    clientID: '105670326652055',
    clientSecret: 'ca1fbf5443127b7187936d47dd0f2ee0',
    callbackURL: 'https://voting-app-lift-it-luke.c9users.io' + '/login/facebook/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// Define routes.
app.get('/',
  function(req, res) {
//    res.sendFile(path.join(__dirname+'/views/home.html', { user: req.user })

    res.render('home', {
      user: req.user
    });
    
});

/* GET home page. */
app.get('/', function(req, res, next) {
//    res.sendFile(path.join(__dirname+'/views/home.html', { user: req.user })
    res.render('home', {
      user: req.user
    });
});


app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    console.log(res.user);
    res.render('profile', { user: req.user });
  });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
