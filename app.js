/*
 * app.js - Main server script using Express and socket.io
*/

//// local variables ////
'use strict';
var
  setWatch,
  http           = require('http'),
  express        = require('express'),
  socketIo       = require('socket.io'),
  bodyParser     = require('body-parser'),
  methodOverride = require('method-override'),
  morgan         = require('morgan'),
  fsHandle       = require('fs'),

  app      = express(),
  router   = express.Router(),
  routes   = require('./js/routes.js'),
  server   = http.createServer( app ),
  io       = socketIo.listen( server ),
  watchMap = {};

//// end variable declarations and initialization ////

// Watch a file and let clients know if/when one changes
setWatch = function ( url_path, file_type ) {
  console.log( 'setWatch called on ' + url_path );
  //
  if ( ! watchMap[ url_path ] ) {
    console.log( 'setting watch on ' + url_path );
    // Part of Node's native 'fs' package
    fsHandle.watchFile(
      url_path.slice(1),
      function ( current, previous ) {
        console.log( 'file accessed' );
        // Send notice 
        if ( current.mtime !== previous.mtime ) {
          console.log( 'file changed: ' + url_path);
          io.sockets.emit( file_type, url_path );
        }
      }
    );
    watchMap[ url_path ] = true;
  }
};

//// Configure server behavior ////

// Process all traffic looking for specific files
app.use( function ( request, response, next ) {
  // Watch for changes to these file
  if ( request.url.indexOf( '/js/spa.shell.js'  ) >= 0 ) {
    setWatch( '/js/spa.shell.js', 'script' );
  }
  else if ( request.url.indexOf( '/js/spa.subcategories.js'  ) >= 0 ) {
    setWatch( '/js/spa.subcategories.js', 'script' );
  }
  else if ( request.url.indexOf( '/js/spa.drinks.js'  ) >= 0 ) {
    setWatch( '/js/spa.drinks.js', 'script' );
  }
  else if ( request.url.indexOf( '/css/custom.min.css' ) >= 0 ) {
    setWatch( request.url, 'stylesheet' );
  }
  next();

app.use( express.static( __dirname + '/' ) );

});

app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
// Turn on verbose logging when needed by uncommenting line below
// app.use(morgan('combined'));
routes.configRoutes( router, server );
app.use('/', router);

//// End server configuration ////

//// Start service ////
server.listen(8000);
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);

//// end app.js
