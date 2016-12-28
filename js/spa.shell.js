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
      
      // Navbar
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

        // Dropdown for Menus
        + '<div class="navbar-collapse collapse" id="navbar-main">'
          + '<ul class="nav navbar-nav">'

            + '<li class="dropdown">'
              + '<a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes" aria-expanded="false">'
                + 'Menus <span class="caret"></span>'
              + '</a>'
            + '<ul class="dropdown-menu" aria-labelledby="themes">'
              + '<li><a href="#">Favorites</a></li>'
              + '<li class="divider"></li>'
              + '<li><a href="#">Saved Menu 1</a></li>'
              + '<li><a href="#">Saved Menu 2</a></li>'
              + '<li class="divider"></li>'
              + '<li><a href="#">Create Menu</a></li>'
            + '</ul>'
            + '</li>'

            + '<li>'
              +'<a href="#">Import Menu</a>'
            + '</li>'
            + '<li>'
              +'<a href="#">Create Recipe</a>'
            + '</li>'
            + '<li>'
              +'<a href="#">Search</a>'
            + '</li>'
          + '</ul>'

        + '</div>'
      + '</div>'
    + '</div>'

    // Center Buttons
    + '<div class="container">'
      + '<div class="bs-docs-section">'
        + '<div class="row">'
          + '<div class="col-lg-5">'
            + '<div class="bs-component" style="margin-bottom: 15px;">'
              + '<div class="btn-group btn-group-justified">'
                + '<a href="#" class="btn btn-default">Taste</a>'
                + '<a href="#" class="btn btn-default">Flavor</a>'
                + '<a href="#" class="btn btn-default">Content</a>'
              + '</div>'
            + '</div>'
            + '<div class="bs-component" style="margin-bottom: 15px;">'
              + '<div class="btn-group btn-group-justified">'
                + '<a href="#" class="btn btn-default">Feeling</a>'
                + '<a href="#" class="btn btn-default">Color</a>'
                + '<a href="#" class="btn btn-default">Strength</a>'
              + '</div>'
            + '</div>'
            + '<div class="bs-component" style="margin-bottom: 15px;">'
              + '<div class="btn-group btn-group-justified">'
                + '<a href="#" class="btn btn-default">Calories</a>'
                + '<a href="#" class="btn btn-default">Temperature</a>'
                + '<a href="#" class="btn btn-default">Glass</a>'
              + '</div>'
            + '</div>'
            + '<div class="bs-component" style="margin-bottom: 15px;">'
              + '<div class="btn-group btn-group-justified">'
                + '<a href="#" class="btn btn-default">Special</a>'
                + '<a href="#" class="btn btn-default">Random</a>'
                + '<a href="#" class="btn btn-default">All Drinks</a>'
              + '</div>'
            + '</div>'
    + '</div></div></div></div>'

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
