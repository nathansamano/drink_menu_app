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
              +'<a class="glyphicon glyphicon-sort-by-alphabet sort-tab" id="az"></a>'
            + '</li>'
            + '<li>'
              +'<a class="glyphicon glyphicon-sort sort-tab" id="abv-tab">ABV</a>'
            + '</li>'
            + '<li>'
              +'<a class="glyphicon glyphicon-sort sort-tab" id="ozal-tab">oz al</a>'
            + '</li>'
            + '<li>'
              +'<a class="glyphicon glyphicon-search"></a>'
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
                  + '<a href="/taste"       class="btn btn-default" id="taste"      >Taste</a>'
                  + '<a href="/flavor"      class="btn btn-default" id="flavor"     >Flavor</a>'
                  + '<a href="/ingredients" class="btn btn-default" id="ingredients">Ingredients</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/color"       class="btn btn-default" id="color"      >Color</a>'
                  + '<a href="/temperature" class="btn btn-default" id="temperature">Temperature</a>'
                  + '<a href="/glass"       class="btn btn-default" id="glass"      >Glass</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/special"    class="btn btn-default" id="special"   >Special</a>'
                  + '<a href="/random"     class="btn btn-default" id="random"    >Random</a>'
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
    subView,

    categoryRoutes = [
      "/taste"  , "/flavor"     , "/ingredients",
      "/color"  , "/temperature", "/glass"      ,
      "/special", "/random"     , "/all_drinks"
    ];

  //----------------- END MODULE SCOPE VARIABLES ---------------


  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container     : $container,
      $nav           : $container.find('#navbar-main'          ),
      $content       : $container.find('#content-main'         ),
      $subcategories : $container.find('#content-subcategories'),
      $taste         : $container.find('#taste'                ),
      $flavor        : $container.find('#flavor'               ),
      $ingredients   : $container.find('#ingredients'          ),
      $color         : $container.find('#color'                ),
      $temperature   : $container.find('#temperature'          ),
      $glass         : $container.find('#glass'                ),
      $special       : $container.find('#special'              ),
      $allDrinks     : $container.find('#all-drinks'           )
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
    page.call(this, categoryRoutes, subcategories);
    page();

    // Hide sorting tabs
    $('.sort-tab').hide();

    // Click event handlers
    $('.btn').on("click", function() {
      subView = $(this).attr("id");
    });

    $('#all-drinks').on("click", function() {
      subView = "allDrinks";
    });

    $('.navbar-brand').on("click", function() {
      $('.sort-tab').hide();
    });

    $('#az').on("click", function() {
      $(this).toggleClass("glyphicon-sort-by-alphabet glyphicon-sort-by-alphabet-alt");
    });

  }; // End public method initModule

  // Public API
  return { initModule : initModule,
           categoryRoutes : categoryRoutes };
  //------------------- END PUBLIC METHODS ---------------------
}());
