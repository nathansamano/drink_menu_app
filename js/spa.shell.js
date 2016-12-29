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

            // Other toolbar links
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
      + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/taste" class="btn btn-default" id="taste">Taste</a>'
                  + '<a href="/flavor" class="btn btn-default" id="flavor">Flavor</a>'
                  + '<a href="/ingredients" class="btn btn-default" id="ingredients">Ingredients</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/feeling" class="btn btn-default" id="feeling">Feeling</a>'
                  + '<a href="/color" class="btn btn-default" id="color">Color</a>'
                  + '<a href="/strength" class="btn btn-default" id="strength">Strength</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/calories" class="btn btn-default" id="calories">Calories</a>'
                  + '<a href="/temperature" class="btn btn-default" id="temperature">Temperature</a>'
                  + '<a href="/glass" class="btn btn-default" id="glass">Glass</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/special" class="btn btn-default" id="special">Special</a>'
                  + '<a href="/random" class="btn btn-default" id="random">Random</a>'
                  + '<a href="/all_drinks" class="btn btn-default" id="all-drinks">All Drinks</a>'
                + '</div>'
              + '</div>'
      + '</div></div></div></div>'

      + '<section><div id="content-subcategories"></div></section>'
    },
      
    stateMap = {
      // View state information
      $container  : undefined
    },

    jqueryMap = {},

    initModule, setJqueryMap, currentMod,
    subView;

  //----------------- END MODULE SCOPE VARIABLES ---------------


  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container     : $container,
      $nav           : $container.find('#navbar-main'),
      $content       : $container.find('#content-main'),
      $subcategories : $container.find('#content-subcategories'),
      $taste         : $container.find('#taste'),
      $flavor        : $container.find('#flavor'),
      $ingredients   : $container.find('#ingredients'),
      $feeling       : $container.find('#feeling'),
      $color         : $container.find('#color'),
      $strength      : $container.find('#strength'),
      $calories      : $container.find('#calories'),
      $temperature   : $container.find('#temperature'),
      $glass         : $container.find('#glass'),
      $special       : $container.find('#special'),
      $allDrinks     : $container.find('#all-drinks')
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
  function subcategories() {
    if (currentMod != jqueryMap.subcategories)
      currentMod.hide();
    currentMod = jqueryMap.$subcategories;
    spa.subcategories.postSection(subView);
  }

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
    jqueryMap.$subcategories.hide();
    spa.subcategories.initModule(jqueryMap.$subcategories);

    // Default content is "home" screen
    currentMod = jqueryMap.$content;

    // Set up routes
    page('/', index);
    page('/taste',       subcategories);
    page('/flavor',      subcategories);
    page('/ingredients', subcategories);
    page('/feeling',     subcategories);
    page('/color',       subcategories);
    page('/strength',    subcategories);
    page('/calories',    subcategories);
    page('/temperature', subcategories);
    page('/glass',       subcategories);
    page('/special',     subcategories);
    page('/random',      subcategories);
    page('/all_drinks',  subcategories);
    page();

    // Click event handlers
    $('#taste').on("click", function() {
      subView = "taste";
    });

    $('#flavor').on("click", function() {
      subView = "flavor";
    });

    $('#ingredients').on("click", function() {
      subView = "ingredients";
    });

    $('#feeling').on("click", function() {
      subView = "feeling";
    });

    $('#color').on("click", function() {
      subView = "color";
    });

    $('#strength').on("click", function() {
      subView = "strength";
    });

    $('#calories').on("click", function() {
      subView = "calories";
    });

    $('#temperature').on("click", function() {
      subView = "temperature";
    });

    $('#glass').on("click", function() {
      subView = "glass";
    });

    $('#special').on("click", function() {
      subView = "special";
    });

    $('#random').on("click", function() {
      subView = "random";
    });

    $('#all-drinks').on("click", function() {
      subView = "allDrinks";
    });

  }; // End public method initModule

  // Public API
  return { initModule : initModule };
  //------------------- END PUBLIC METHODS ---------------------
}());
