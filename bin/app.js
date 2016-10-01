#!/usr/bin/env node

// dependencies
var express = require('express')
  , path = require('path')
  , morgan = require('morgan')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon');

var app = module.exports = express();

// set path
app.set('root_path', __dirname);
app.set('view_path', path.resolve(__dirname, '../view'));
app.set('static_path', path.resolve(__dirname, '../public'));

// view engine setup
app.set('views', app.get('view_path'));
app.set('view engine', 'pug');

// serve static files
app.use(express.static(app.get('static_path')));

// favicon
app.use(favicon(path.join(app.get('static_path'), 'favicon.png')));

// log
if (!module.parent) app.use(morgan('dev'));

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

app.use('/', require('../router/core'));
app.use('/profile', require('../router/profile'));

// how do I setup an error handler?
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500: Something broke!');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).send('400: Can\'t find that!');
});
