/*
 * spa.drinks.js
 * Displays all the drinks of specified filter(s)
 */

spa.drinks = (function() {
	'use strict';
	//// local variables ////
	var
		configMap = {
      main_html : String()
        + '<div class="container" id="content-main">'

        + '</div>'
    },

    stateMap = {
      // view sate information
      $container : undefined
    },

    jqueryMap = {},

    initModule, setJqueryMap, postSection;

  //// end local variables ////

  //// DOM interaction methods ////

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $content   : $container.find('#content-main')
    };
  };

  //// Public methods ////
  initModule = function( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();

    // load up all the HTML
    $container.html( configMap.main_html );
    $container.find('#content').html( configMap.main_html );

    setJqueryMap();
  };

  postSection = function() {
    jqueryMap.$content.show();
    jqueryMap.$container.show();

    // show sorting tabs
    $('.sort-tab').show();
  };

  return { initModule : initModule,
           postSection : postSection
  };

}());