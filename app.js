#!/usr/bin/env node

// dependencies
var express = require('express')
  , path = require('path')
  , morgan = require('morgan')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon');

var app = module.exports = express();

// view engine setup
// app.set('view engine', 'html');

// log
if (!module.parent) app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));

// parse json
app.use(bodyParser.json());

// parse request bodies (req.body)
app.use(bodyParser.urlencoded({ extended: true }));

// session support
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'some secret here',
}));

// include modules
app.use('/', require('./module/main/router'));

// how do I setup an error handler?
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).send('Can\'t find that!');
});
