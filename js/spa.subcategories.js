/*
 * spa.subcategories.js
 * Displays the sub-categories from the category selected from main page
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

        + '<section><div id="content-drinks"></div></section>'
      ,

      taste_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/taste/bitter" class="btn btn-default" id="bitter">Bitter</a>'
                  + '<a href="/taste/salty" class="btn btn-default" id="salty">Salty</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/taste/sour" class="btn btn-default" id="sour">Sour</a>'
                  + '<a href="/taste/sweet" class="btn btn-default" id="sweet">Sweet</a>'
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
                  + '<a href="/flavor/buttery"   class="btn btn-default" id="buttery"  >Buttery</a>'
                  + '<a href="/flavor/candy"     class="btn btn-default" id="candy"    >Candy</a>'
                  + '<a href="/flavor/caramel"   class="btn btn-default" id="caramel"  >Caramel</a>'
                  + '<a href="/flavor/chocolate" class="btn btn-default" id="chocolate">Chocolate</a>'
                  + '<a href="/flavor/cinnamon"  class="btn btn-default" id="cinnamon" >Cinnamon</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/flavor/coffee" class="btn btn-default" id="coffee">Coffee</a>'
                  + '<a href="/flavor/creamy" class="btn btn-default" id="creamy">Creamy</a>'
                  + '<a href="/flavor/fruity" class="btn btn-default" id="fruity">Fruity</a>'
                  + '<a href="/flavor/herb"   class="btn btn-default" id="herb"  >Herb</a>'
                  + '<a href="/flavor/mint"   class="btn btn-default" id="mint"  >Mint</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/flavor/nutty"   class="btn btn-default" id="nutty"  >Nutty</a>'
                  + '<a href="/flavor/smoky"   class="btn btn-default" id="smoky"  >Smoky</a>'
                  + '<a href="/flavor/spicy"   class="btn btn-default" id="spicy"  >Spicy</a>'
                  + '<a href="/flavor/tart"    class="btn btn-default" id="tart"   >Tart</a>'
                  + '<a href="/flavor/vanilla" class="btn btn-default" id="vanilla">Vanilla</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      ingredients_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/ingredients/beer"      class="btn btn-default" id="beer"     >Beer</a>'
                  + '<a href="/ingredients/brandy"    class="btn btn-default" id="brandy"   >Brandy</a>'
                  + '<a href="/ingredients/bourbon"   class="btn btn-default" id="bourbon"  >Bourbon</a>'
                  + '<a href="/ingredients/champagne" class="btn btn-default" id="champagne">Champagne</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/ingredients/gin"     class="btn btn-default" id="gin"    >Gin</a>'                
                  + '<a href="/ingredients/liqueur" class="btn btn-default" id="liqueur">Liqueur</a>'
                  + '<a href="/ingredients/mixer"   class="btn btn-default" id="mixer"  >Mixer</a>'
                  + '<a href="/ingredients/rum"     class="btn btn-default" id="rum"    >Rum</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/ingredients/tequila" class="btn btn-default" id="tequila"  >Tequila</a>'
                  + '<a href="/ingredients/whiskey" class="btn btn-default" id="whiskey"  >Whiskey</a>'
                  + '<a href="/ingredients/wine"    class="btn btn-default" id="wine"     >Wine</a>'
                  + '<div                           class="btn btn-default" id="blank"    ></div>'  
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      feeling_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/feeling/carbonated" class="btn btn-default" id="carbonated">Carbonated</a>'
                  + '<a href="/feeling/rough"      class="btn btn-default" id="rough"     >Rough</a>'
                  + '<a href="/feeling/smooth"     class="btn btn-default" id="smooth"    >Smooth</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      color_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/color/black" class="btn btn-default" id="black">Black</a>'
                  + '<a href="/color/blue"  class="btn btn-default" id="blue" >Blue</a>'
                  + '<a href="/color/clear" class="btn btn-default" id="clear">Clear</a>'
                  + '<a href="/color/green" class="btn btn-default" id="green">Green</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/color/layered-multicolored" class="btn btn-default" id="layered-multicolored">Layered/Multicolored</a>'                
                  + '<a href="/color/orange"               class="btn btn-default" id="orange"              >Orange</a>'
                  + '<a href="/color/pink"                 class="btn btn-default" id="pink"                >Pink</a>'
                  + '<a href="/color/purple"               class="btn btn-default" id="purple"              >Purple</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/color/red"    class="btn btn-default" id="red"   >Red</a>'
                  + '<a href="/color/yellow" class="btn btn-default" id="yellow">Yellow</a>'
                  + '<a href="/color/white"  class="btn btn-default" id="white" >White</a>'
                  + '<div                    class="btn btn-default" id="blank" ></div>'  
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      strength_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/strength/non-alcoholic" class="btn btn-default" id="non-alcoholic">Non-alcoholic</a>'
                  + '<a href="/strength/weak"          class="btn btn-default" id="weak"         >Weak</a>'
                  + '<a href="/strength/light"         class="btn btn-default" id="light"        >Light</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/strength/average"          class="btn btn-default" id="average"         >Average</a>'
                  + '<a href="/strength/strong"           class="btn btn-default" id="strong"          >Strong</a>'
                  + '<a href="/strength/extremely_strong" class="btn btn-default" id="extremely-strong">Extremely Strong</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      calories_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/calories/zero"   class="btn btn-default" id="zero"  >Zero</a>'
                  + '<a href="/calories/low"    class="btn btn-default" id="low"   >Low</a>'
                  + '<a href="/calories/medium" class="btn btn-default" id="medium">Medium</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/calories/high"           class="btn btn-default" id="high"          >High</a>'
                  + '<a href="/calories/extremely_high" class="btn btn-default" id="extremely-high">Extremely High</a>'
                  + '<div                               class="btn btn-default" id="blank"         ></div>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      temperature_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/temperature/frozen" class="btn btn-default" id="frozen">Frozen</a>'
                  + '<a href="/temperature/cold"   class="btn btn-default" id="cold"  >Cold</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/temperature/room_temperature" class="btn btn-default" id="room-temperature">Room Temperature</a>'
                  + '<a href="/temperature/hot"              class="btn btn-default" id="hot"             >Hot</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      glass_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/glass/cocktail" class="btn btn-default" id="cocktail">Cocktail</a>'
                  + '<a href="/glass/Collins"  class="btn btn-default" id="collins" >Collins</a>'
                  + '<a href="/glass/coupe"    class="btn btn-default" id="coupe"   >Coupe</a>'
                  + '<a href="/glass/flute"    class="btn btn-default" id="flute"   >Flute</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/glass/hurricane"    class="btn btn-default" id="hurricane"   >Hurricane</a>'                
                  + '<a href="/glass/highball"     class="btn btn-default" id="highball"    >Highball</a>'
                  + '<a href="/glass/Irish_coffee" class="btn btn-default" id="irish-coffee">Irish Coffee</a>'
                  + '<a href="/glass/lowball"      class="btn btn-default" id="lowball"     >Lowball</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/glass/martini" class="btn btn-default" id="martini"   >Martini</a>'
                  + '<a href="/glass/shot"    class="btn btn-default" id="shot"      >Shot</a>'
                  + '<a href="/glass/wine"    class="btn btn-default" id="wine-glass">Wine</a>'
                  + '<div                     class="btn btn-default" id="blank"     ></div>'  
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      special_html : String()
        + '<div class="container" id="content-main">'
        + '<div class="bs-docs-section">'
          + '<div class="row">'
            + '<div class="col-lg-5">'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/special/classic" class="btn btn-default" id="classic">Classic</a>'
                  + '<a href="/special/country" class="btn btn-default" id="country">Country</a>'
                  + '<a href="/special/holiday" class="btn btn-default" id="holiday">Holiday</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/special/IBA_Official" class="btn btn-default" id="iba-official">IBA Official</a>'                
                  + '<a href="/special/smoothie"     class="btn btn-default" id="smoothie"    >Smoothie</a>'
                  + '<a href="/special/tropical"     class="btn btn-default" id="tropical"    >Tropical</a>'
                + '</div>'
              + '</div>'
        + '</div></div></div></div>'
      ,

      random_html : String()
        + '<div class="container" id="content-main">'
        + '</div>'
      ,

      all_drinks_html : String()
        + '<div class="container" id="content-main">'
        + '</div>'
    },

    stateMap = {
      // view state information
      $container : undefined
    },

    jqueryMap = {},

    initModule, setJqueryMap, postSection,
    currentMod, categoryName,

    subcategoryRoutes = [
      '/taste/bitter', '/taste/salty', '/taste/sour', '/taste/sweet',

      '/flavor/buttery'  , '/flavor/candy'   , '/flavor/caramel',
      '/flavor/chocolate', '/flavor/cinnamon', '/flavor/coffee' ,
      '/flavor/creamy'   , '/flavor/fruity'  , '/flavor/herb'   ,
      '/flavor/mint'     , '/flavor/nutty'   , '/flavor/smoky'  ,
      '/flavor/spicy'    , '/flavor/tart'    , '/flavor/vanilla',

      '/ingredients/beer'   , '/ingredients/brandy'   ,
      '/ingredients/bourbon', '/ingredients/champagne',
      '/ingredients/gin'    , '/ingredients/liqueur'  ,
      '/ingredients/mixer'  , '/ingredients/rum'      ,
      '/ingredients/tequila', '/ingredients/whiskey'  ,
      '/ingredients/wine'   ,

      '/feeling/carbonated', '/feeling/rough', '/feeling/smooth',

      '/color/black' , '/color/blue'  , '/color/clear' ,
      '/color/green' , '/color/layered-multicolored'   ,
      '/color/orange', '/color/pink'  , '/color/purple',
      '/color/red'   , '/color/yellow', '/color/white' ,

      '/strength/non-alcoholic', '/strength/weak'            ,
      '/strength/light'        , '/strength/average'         ,
      '/strength/strong'       , '/strength/extremely_strong',

      '/calories/zero', '/calories/low', '/calories/medium',
      '/calories/high', '/calories/extremely_high'         ,

      '/temperature/frozen'          , '/temperature/cold',
      '/temperature/room_temperature', '/temperature/hot' ,

      '/glass/cocktail'    , '/glass/Collins'  , '/glass/coupe'   ,
      '/glass/flute'       , '/glass/hurricane', '/glass/highball',
      '/glass/Irish_coffee', '/glass/lowball'  , '/glass/martini' ,
      '/glass/shot'        , '/glass/wine'     ,

      '/special/classic' , '/special/country'     ,
      '/special/holiday' , '/special/IBA_Official',
      '/special/smoothie', '/special/tropical'
    ];

  //// end local variables ////

  //// DOM interaction methods ////

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container     : $container,
      $content       : $container.find('#content-main'        ),
      $drinks        : $container.find('#content-drinks'      ),

      $taste         : $container.find('#taste'               ),
      $flavor        : $container.find('#flavor'              ),
      $ingredients   : $container.find('#ingredients'         ),
      $feeling       : $container.find('#feeling'             ),
      $color         : $container.find('#color'               ),
      $strength      : $container.find('#strength'            ),
      $calories      : $container.find('#calories'            ),
      $temperature   : $container.find('#temperature'         ),
      $glass         : $container.find('#glass'               ),
      $special       : $container.find('#special'             ),
      $random        : $container.find('#random'              ),
      $allDrinks     : $container.find('#allDrinks'           ),

      $bitter        : $container.find('#bitter'              ),
      $salty         : $container.find('#salty'               ),
      $sour          : $container.find('#sour'                ),
      $sweet         : $container.find('#sweet'               ),

      $buttery       : $container.find('#buttery'             ),
      $candy         : $container.find('#candy'               ),
      $caramel       : $container.find('#caramel'             ),
      $chocolate     : $container.find('#chocolate'           ),
      $cinnamon      : $container.find('#cinnamon'            ),
      $coffee        : $container.find('#coffee'              ),
      $creamy        : $container.find('#creamy'              ),
      $fruity        : $container.find('#fruity'              ),
      $herb          : $container.find('#herb'                ),
      $mint          : $container.find('#mint'                ),
      $nutty         : $container.find('#nutty'               ),
      $smoky         : $container.find('#smoky'               ),
      $spicy         : $container.find('#spicy'               ),
      $tart          : $container.find('#tart'                ),
      $vanilla       : $container.find('#vanilla'             ),

      $beer          : $container.find('#beer'                ),
      $brandy        : $container.find('#brandy'              ),
      $bourbon       : $container.find('#bourbon'             ),
      $champagne     : $container.find('#champagne'           ),
      $gin           : $container.find('#gin'                 ),
      $liqueur       : $container.find('#liqueur'             ),
      $mixer         : $container.find('#mixer'               ),
      $rum           : $container.find('#rum'                 ),
      $tequila       : $container.find('#tequila'             ),
      $whiskey       : $container.find('#whiskey'             ),
      $wine          : $container.find('#wine'                ),

      $carbonated    : $container.find('#carbonated'          ),
      $rough         : $container.find('#rough'               ),
      $smooth        : $container.find('#smooth'              ),

      $black         : $container.find('#black'               ),
      $blue          : $container.find('#blue'                ),
      $clear_color   : $container.find('#clear'               ),
      $green         : $container.find('#green'               ),
      $lmc           : $container.find('#layered-multicolored'),
      $orange        : $container.find('#orange'              ),
      $pink          : $container.find('#pink'                ),
      $purple        : $container.find('#purple'              ),
      $red           : $container.find('#red'                 ),
      $yellow        : $container.find('#yellow'              ),
      $white         : $container.find('#white'               ),

      $non_alcoholic : $container.find('#non-alcoholic'       ),
      $weak          : $container.find('#weak'                ),
      $light         : $container.find('#light'               ),
      $average       : $container.find('#average'             ),
      $strong        : $container.find('#strong'              ),
      $ex_strong     : $container.find('#extremely-strong'    ),

      $zero          : $container.find('#zero'                ),
      $low           : $container.find('#low'                 ),
      $medium        : $container.find('#medium'              ),
      $high          : $container.find('#high'                ),
      $ex_high       : $container.find('#extremely-high'      ),

      $frozen        : $container.find('#frozen'              ),
      $cold          : $container.find('#cold'                ),
      $room_temp     : $container.find('#room-temperature'    ),
      $hot           : $container.find('#hot'                 ),

      $cocktail      : $container.find('#cocktail'            ),
      $collins       : $container.find('#collins'             ),
      $coupe         : $container.find('#coupe'               ),
      $flute         : $container.find('#flute'               ),
      $hurricane     : $container.find('#hurricane'           ),
      $highball      : $container.find('#highball'            ),
      $irish_coffee  : $container.find('#irish-coffee'        ),
      $lowball       : $container.find('#lowball'             ),
      $martini       : $container.find('#martini'             ),
      $shot          : $container.find('#shot'                ),
      $wine_glass    : $container.find('#wine-glass'          ),

      $classic       : $container.find('#classic'             ),
      $country       : $container.find('#country'             ),
      $holiday       : $container.find('#holiday'             ),
      $iba_official  : $container.find('#iba-official'        ),
      $smoothie      : $container.find('#smoothie'            ),
      $tropical      : $container.find('#tropical'            )
    };
  };

  //// Client-side router methods ////

  //////////////////// Feature Module Function ////////////////////

  function subcategory() {
    // modify categoryName id value to match value in jqueryMap
    categoryName.replace("layered-multicolored", "lmc");
    categoryName.replace('-', '_');
    categoryName.replace("extremely", "ex");
    categoryName.replace("temperature", "temp");

    if (currentMod != jqueryMap.categoryName)
      currentMod.hide();
    currentMod = jqueryMap.$categoryName;
    spa.drinks.postSection();
  }

  //////////////////// Other methods ////////////////////

  function hideCategories() {
    /*console.log(spa.shell.categoryRoutes);
    var categoryRoutes = spa.shell.categoryRoutes;
    console.log(categoryRoutes[0]);

    for (var i = 0; i < categoryRoutes.length; i++) {
      categoryRoutes[i] = categoryRoutes[i].replace("/", "");
    }
    console.log(categoryRoutes);

    for (var i = 0; i < categoryRoutes.length; i++) {
      jqueryMap.$categoryRoutes[i].hide();
    }*/

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

  function hideSubcategories() {
    jqueryMap.$bitter.hide();
    jqueryMap.$salty.hide();
    jqueryMap.$sour.hide();
    jqueryMap.$sweet.hide();

    jqueryMap.$buttery.hide();
    jqueryMap.$candy.hide();
    jqueryMap.$caramel.hide();
    jqueryMap.$chocolate.hide();
    jqueryMap.$cinnamon.hide();
    jqueryMap.$coffee.hide();
    jqueryMap.$creamy.hide();
    jqueryMap.$fruity.hide();
    jqueryMap.$herb.hide();
    jqueryMap.$mint.hide();
    jqueryMap.$nutty.hide();
    jqueryMap.$smoky.hide();
    jqueryMap.$spicy.hide();
    jqueryMap.$tart.hide();
    jqueryMap.$vanilla.hide();

    jqueryMap.$beer.hide();
    jqueryMap.$brandy.hide();
    jqueryMap.$bourbon.hide();
    jqueryMap.$champagne.hide();
    jqueryMap.$gin.hide();
    jqueryMap.$liqueur.hide();
    jqueryMap.$mixer.hide();
    jqueryMap.$rum.hide();
    jqueryMap.$tequila.hide();
    jqueryMap.$whiskey.hide();
    jqueryMap.$wine.hide();

    jqueryMap.$carbonated.hide();
    jqueryMap.$rough.hide();
    jqueryMap.$smooth.hide();

    jqueryMap.$black.hide();
    jqueryMap.$blue.hide();
    jqueryMap.$clear_color.hide();
    jqueryMap.$green.hide();
    jqueryMap.$lmc.hide();
    jqueryMap.$orange.hide();
    jqueryMap.$pink.hide();
    jqueryMap.$purple.hide();
    jqueryMap.$red.hide();
    jqueryMap.$yellow.hide();
    jqueryMap.$white.hide();

    jqueryMap.$non_alcoholic.hide();
    jqueryMap.$weak.hide();
    jqueryMap.$light.hide();
    jqueryMap.$average.hide();
    jqueryMap.$strong.hide();
    jqueryMap.$ex_strong.hide();

    jqueryMap.$zero.hide();
    jqueryMap.$low.hide();
    jqueryMap.$medium.hide();
    jqueryMap.$high.hide();
    jqueryMap.$ex_high.hide();

    jqueryMap.$frozen.hide();
    jqueryMap.$cold.hide();
    jqueryMap.$room_temp.hide();
    jqueryMap.$hot.hide();

    jqueryMap.$cocktail.hide();
    jqueryMap.$collins.hide();
    jqueryMap.$coupe.hide();
    jqueryMap.$flute.hide();
    jqueryMap.$hurricane.hide();
    jqueryMap.$highball.hide();
    jqueryMap.$irish_coffee.hide();
    jqueryMap.$lowball.hide();
    jqueryMap.$martini.hide();
    jqueryMap.$shot.hide();
    jqueryMap.$wine.hide();

    jqueryMap.$classic.hide();
    jqueryMap.$country.hide();
    jqueryMap.$holiday.hide();
    jqueryMap.$iba_official.hide();
    jqueryMap.$smoothie.hide();
    jqueryMap.$tropical.hide();
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

    // Initialize each feature module
    jqueryMap.$drinks.hide();
    spa.drinks.initModule(jqueryMap.$drinks);

    // Default content is "home" screen
    currentMod = jqueryMap.$content;

    // setup routes
    page.call(this, subcategoryRoutes, subcategory);

    //// Click event handlers ////
    $('.btn').on("click", function() {
      // set categoryName to the id of the btn for routing purposes
      categoryName = $(this).attr("id");
    });

  };

  postSection = function( subView ) {
    console.log(subView);
    jqueryMap.$drinks.hide();
    hideCategories();
    switch(subView) {
      case "taste":
        currentMod = jqueryMap.$taste;
        jqueryMap.$taste.show();
        break;
      case "flavor":
        currentMod = jqueryMap.$flavor;
        jqueryMap.$flavor.show();
        break;
      case "ingredients":
        currentMod = jqueryMap.$ingredients;
        jqueryMap.$ingredients.show();
        break;
      case "feeling":
        currentMod = jqueryMap.$feeling;
        jqueryMap.$feeling.show();
        break;
      case "color":
        currentMod = jqueryMap.$color;
        jqueryMap.$color.show();
        break;
      case "strength":
        currentMod = jqueryMap.$strength;
        jqueryMap.$strength.show();
        break;
      case "calories":
        currentMod = jqueryMap.$calories;
        jqueryMap.$calories.show();
        break;
      case "temperature":
        currentMod = jqueryMap.$temperature;
        jqueryMap.$temperature.show();
        break;
      case "glass":
        currentMod = jqueryMap.$glass;
        jqueryMap.$glass.show();
        break;
      case "special":
        currentMod = jqueryMap.$special;
        jqueryMap.$special.show();
        break;
      case "random":
        currentMod = jqueryMap.$random;
        jqueryMap.$random.show();
        subcategory();
        break;
      case "allDrinks":
        currentMod = jqueryMap.$allDrinks
        jqueryMap.$allDrinks.show();
        subcategory();
        break;
    }

    jqueryMap.$container.show();
  };

  return { initModule : initModule,
           postSection : postSection
  };

}());