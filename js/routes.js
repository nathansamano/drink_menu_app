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

  router.get('/ingredients', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/feeling', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/color', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/strength', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/calories', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/temperature', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/glass', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/special', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/random', function(req, res) {
    res.sendFile('index.html', options);
  });

  router.get('/all_drinks', function(req, res) {
    res.sendFile('index.html', options);
  });

}; 
 
module.exports = { configRoutes : configRoutes };

