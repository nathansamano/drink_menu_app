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
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/taste/bitter" class="btn btn-default" id="bitter">Bitter</a>'
                  + '<a href="/salty" class="btn btn-default" id="salty">Salty</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                  + '<a href="/sweet" class="btn btn-default" id="sweet">Sweet</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      flavor_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/buttery" class="btn btn-default" id="buttery">Buttery</a>'
                  + '<a href="/candy" class="btn btn-default" id="candy">Candy</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                  + '<a href="/sweet" class="btn btn-default" id="sweet">Sweet</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/bitter" class="btn btn-default" id="bitter">Bitter</a>'
                  + '<a href="/salty" class="btn btn-default" id="salty">Salty</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                  + '<a href="/sweet" class="btn btn-default" id="sweet">Sweet</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/bitter" class="btn btn-default" id="bitter">Bitter</a>'
                  + '<a href="/salty" class="btn btn-default" id="salty">Salty</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                  + '<a href="/sweet" class="btn btn-default" id="sweet">Sweet</a>'
                  + '<a href="/sour" class="btn btn-default" id="sour">Sour</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
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

    initModule, setJqueryMap, postSection,
    currentMod;

  //// end local variables ////

  //// DOM interaction methods ////

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container   : $container,
      $content     : $container.find('#content-main'),

      $taste       : $container.find('#taste'       ),
      $flavor      : $container.find('#flavor'      ),
      $ingredients : $container.find('#ingredients' ),
      $feeling     : $container.find('#feeling'     ),
      $color       : $container.find('#color'       ),
      $strength    : $container.find('#strength'    ),
      $calories    : $container.find('#calories'    ),
      $temperature : $container.find('#temperature' ),
      $glass       : $container.find('#glass'       ),
      $special     : $container.find('#special'     ),
      $random      : $container.find('#random'      ),
      $allDrinks   : $container.find('#allDrinks'   ),

      $bitter      : $container.find('#bitter'      ),
      $salty       : $container.find('#salty'       ),
      $sour        : $container.find('#sour'        ),
      $sweet       : $container.find('#sweet'       )
    };
  };

  //// Client-side router methods ////

  // One function per feature module
  function bitter() {
    if (currentMod != jqueryMap.bitter)
      currentMod.hide();
    currentMod = jqueryMap.$bitter;
    spa.drinks.postSection();
  }

  //// Other methods ////
  function hideSecondaryCategories() {
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

  function hideTertiaryCategories() {
    jqueryMap.$bitter.hide();
    jqueryMap.$salty.hide();
    jqueryMap.$sour.hide();
    jqueryMap.$sweet.hide();
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

    // Default content is "home" screen
    currentMod = jqueryMap.$content;

    // setup routes
    page('/taste/bitter', bitter);

    // Click event handlers
    $('#bitter').on("click", function() {
      hideTertiaryCategories();
      console.log("bitter was clicked");
    });
  };

  postSection = function( subView ) {
    console.log(subView);
    hideSecondaryCategories();
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