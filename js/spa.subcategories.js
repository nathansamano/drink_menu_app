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
        + '<section id="taste"      ></section>'
        + '<section id="flavor"     ></section>'
        + '<section id="ingredients"></section>'
        + '<section id="feeling"    ></section>'
        + '<section id="color"      ></section>'
        + '<section id="strength"   ></section>'
        + '<section id="calories"   ></section>'
        + '<section id="temperature"></section>'
        + '<section id="glass"      ></section>'
        + '<section id="special"    ></section>'
        + '<section id="random"     ></section>'
        + '<section id="all-drinks" ></section>'
      ,

      taste_html : String()
        + '<div>taste</div>'
      ,

      flavor_html : String()
        + '<div>flavor</div>'
      ,

      ingredients_html : String()
        
      ,

      feeling_html : String()
      
      ,

      color_html : String()
      
      ,

      strength_html : String()
      
      ,

      calories_html : String()
      
      ,

      temperature_html : String()
      
      ,

      glass_html : String()
      
      ,

      special_html : String()
      
      ,

      random_html : String()
      
      ,

      all_drinks_html : String()
      
      
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
      $container   : $container,
      $main        : $container.find('#main'),
      $taste       : $container.find('#taste'),
      $flavor      : $container.find('#flavor'),
      $ingredients : $container.find('#ingredients'),
      $feeling     : $container.find('#feeling'),
      $color       : $container.find('#color'),
      $strength    : $container.find('#strength'),
      $calories    : $container.find('#calories'),
      $temperature : $container.find('#temperature'),
      $glass       : $container.find('#glass'),
      $special     : $container.find('#special'),
      $random      : $container.find('#random'),
      $allDrinks   : $container.find('#allDrinks')
    };
  };

  function hideAll() {
    jqueryMap.$taste.hide();
    jqueryMap.$flavor.hide();
    jqueryMap.$ingredients.hide();
    jqueryMap.$feeling.hide();
    jqueryMap.$color.hide();
    jqueryMap.$strength.hide();
    jqueryMap.$calories.hide();
    jqueryMap.$temperature.hide();
    jqueryMap.$glass.hide();
    jqueryMap.$special.hide();
    jqueryMap.$random.hide();
    jqueryMap.$allDrinks.hide();
  }

  //// Public methods ////
  initModule = function( $container ) {
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.hide();

    // load up all the HTML
    $container.html( configMap.main_html );
    $container.find('#taste'      ).html( configMap.taste_html       );
    $container.find('#flavor'     ).html( configMap.flavor_html      );
    $container.find('#ingredients').html( configMap.ingredients_html );
    $container.find('#feeling'    ).html( configMap.feeling_html     );
    $container.find('#color'      ).html( configMap.color_html       );
    $container.find('#strength'   ).html( configMap.strength_html    );
    $container.find('#calories'   ).html( configMap.calories_html    );
    $container.find('#temperature').html( configMap.temperature_html );
    $container.find('#glass'      ).html( configMap.glass_html       );
    $container.find('#special'    ).html( configMap.special_html     );
    $container.find('#random'     ).html( configMap.random_html      );
    $container.find('#allDrinks'  ).html( configMap.all_drinks_html  );

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
      case "ingredients":
        jqueryMap.$ingredients.show();
        break;
      case "feeling":
        jqueryMap.$feeling.show();
        break;
      case "color":
        jqueryMap.$feeling.show();
        break;
      case "strength":
        jqueryMap.$strength.show();
        break;
      case "calories":
        jqueryMap.$calories.show();
        break;
      case "temperature":
        jqueryMap.$temperature.show();
        break;
      case "glass":
        jqueryMap.$glass.show();
        break;
      case "special":
        jqueryMap.$special.show();
        break;
      case "random":
        jqueryMap.$random.show();
        break;
      case "allDrinks":
        jqueryMap.$allDrinks.show();
        break;
    }

    jqueryMap.$container.show();
  };

  return { initModule : initModule,
           postSection : postSection
  };

}());