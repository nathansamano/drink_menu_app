/*
 * routes.js - module to provide routing
*/

//// local variables ////
'use strict';
var
  configRoutes;
//// End variable declarations ////

//// Public API ////

configRoutes = function ( router, server ) {

  // Serve files from html sibling directory
  var options = {
    root: __dirname + '/../html/'
    };

  router.get('/', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/subcategories', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/taste', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/flavor', function(req, res) {
    res.sendFile('index.html', options);
  });

}; 
 
module.exports = { configRoutes : configRoutes };

