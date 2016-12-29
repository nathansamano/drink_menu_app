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
      taste_html : String()
        + '<div>testing</div>'
      ,

      flavor_html : String()
        + '<>'
      ,

      content_html : String()
        + '<>'
      ,

      feeling_html : String()
      + '<>'
      ,

      color_html : String()
      + '<>'
      ,

      strength_html : String()
      + '<>'
      ,

      calories_html : String()
      + '<>'
      ,

      temperature_html : String()
      + '<>'
      ,

      glass_html : String()
      + '<>'
      ,

      special_html : String()
      + '<>'
      ,

      random_html : String()
      + '<>'
      ,

      all_drinks : String()
      + '<>'

    },

    stateMap = {
      // view state information
      $container = undefined,
    },

    jqueryMap = {},

    initModule, setJqueryMap, postSection;

  //// end local variables ////

  //// DOM interaction methods

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,

    };
  };

  //// Public methods ////
  initModule = function( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();
    $container.html( configMap.taste_html );

    setJqueryMap();

  };

    postSection = function() {
      jqueryMap.$taste_html.show();
      jqueryMap.$container.show();
    };

    return { initModule : initModule,
             postSection : postSection
    };

}());