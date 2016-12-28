/*
 * spa.shell.js
 * Shell for Drink Menu App
*/

spa.shell = (function () {
  'use strict';
  //// local variables ////
  var
    configMap = {
      main_html : String()
      
      + '<div class="navbar navbar-default navbar-fixed-top">'
      + '<div class="container">'
        + '<div class="navbar-header">'
          + '<a href="../" class="navbar-brand">Drink Menu App</a>'
          + '<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">'
           + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
            + '<span class="icon-bar"></span>'
          + '</button>'
        + '</div>'
        + '<div class="navbar-collapse collapse" id="navbar-main">'
          + '<ul class="nav navbar-nav">'
            
            
          + '</ul>'

        + '</div>'
      + '</div>'
    + '</div>'

    },
      
    stateMap = {
      // View state information
      $container  : undefined,
    },

    jqueryMap = {},

    initModule, setJqueryMap,
    currentMod;

  //----------------- END MODULE SCOPE VARIABLES ---------------


  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $nav       : $container.find('#side'),
      $content   : $container.find('#content-main')
    };
  };
  // End DOM method /setJqueryMap/

  // Begin client-side router methods

  // Base route 
  function index() {
    currentMod.hide();
    currentMod = jqueryMap.$content; 
    jqueryMap.$content.show();
    }

  // One function per feature module


  // End DOM client-side router methods

  //// end DOM-oriented methods ////

  //// Public methods ////

  // Begin Public method /initModule/
  initModule = function ( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html( configMap.main_html );

    // Keep track of our elements
    setJqueryMap();

    // Initialize each feature module
    

    // Default content is "home" screen
    currentMod = jqueryMap.$content;

    // Set up routes
    page('/', index);
    page();

  }; // End public method initModule

  // Public API
  return { initModule : initModule };
  //------------------- END PUBLIC METHODS ---------------------
}());
