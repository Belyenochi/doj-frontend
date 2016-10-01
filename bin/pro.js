#!/usr/bin/env node

// dependencies
var app = module.exports = require('./app')
  , debug = require('debug')('acm.zucc.edu.cn:server')
  , http = require('http');

// get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '80');
app.set('port', port);

// normalize a port into a number, string, or false
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

// create HTTP server
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// event listener for HTTP server "error" event
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// event listener for HTTP server "listening" event
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
