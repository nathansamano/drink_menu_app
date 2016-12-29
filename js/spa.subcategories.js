/*
 * spa.subcategories.js
 * Displays the sub-categories from the category selected
 * from main page
 */

spa.subcategories = (function() {
  'use strict';
	//// local variables ////
	var
    configMap = {
      main_html : String()
        + '<section id="taste"></section>'
        + '<section id="flavor"></section>'
      ,

      taste_html : String()
        + '<div>taste</div>'
      ,

      flavor_html : String()
        + '<div>flavor</div>'
      ,

      ingredients_html : String()
        + '<section id="ingredients">'

        + '</section>'
      ,

      feeling_html : String()
      + '<section id="feeling">'

        + '</section>'
      ,

      color_html : String()
      + '<section id="color">'

        + '</section>'
      ,

      strength_html : String()
      + '<section id="strength">'

        + '</section>'
      ,

      calories_html : String()
      + '<section id="calories">'

        + '</section>'
      ,

      temperature_html : String()
      + '<section id="temperature">'

        + '</section>'
      ,

      glass_html : String()
      + '<section id="glass">'

        + '</section>'
      ,

      special_html : String()
      + '<section id="special">'

        + '</section>'
      ,

      random_html : String()
      + '<section id="random">'

        + '</section>'
      ,

      all_drinks : String()
      + '<section id="all-drinks">'

        + '</section>'
      
    },

    stateMap = {
      // view state information
      $container : undefined
    },

    jqueryMap = {},

    initModule, setJqueryMap, postSection;

  //// end local variables ////

  //// DOM interaction methods

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $main      : $container.find('#main'),
      $taste     : $container.find('#taste'),
      $flavor    : $container.find('#flavor')
    };
  };

  function hideAll() {
    jqueryMap.$taste.hide();
    jqueryMap.$flavor.hide();
  }

  //// Public methods ////
  initModule = function( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();

    // load up all the HTML
    $container.html( configMap.main_html );
    $container.find('#taste').html( configMap.taste_html );
    $container.find('#flavor').html( configMap.flavor_html );

    setJqueryMap();
  };

  postSection = function( subView ) {
    console.log(subView);
    hideAll();
    switch(subView) {
      case "taste":
        jqueryMap.$taste.show();
        break;
      case "flavor":
        jqueryMap.$flavor.show();
        break;
    }

    jqueryMap.$container.show();
  };

  return { initModule : initModule,
           postSection : postSection
  };

}());