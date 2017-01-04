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
                  + '<a href="/ingredients"         class="btn btn-default" id="blank"    ></a>'  
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
                  + '<a href="/color"        class="btn btn-default" id="blank" ></a>'  
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
                  + '<a href="/calories/zero"   class="btn btn-default" id="non-alcoholic">Non-alcoholic</a>'
                  + '<a href="/calories/low"    class="btn btn-default" id="weak"         >Weak</a>'
                  + '<a href="/calories/medium" class="btn btn-default" id="light"        >Light</a>'
                + '</div>'
              + '</div>'
              + '<div class="bs-component" style="margin-bottom: 15px;">'
                + '<div class="btn-group btn-group-justified">'
                  + '<a href="/calories/high"           class="btn btn-default" id="high"          >High</a>'
                  + '<a href="/calories/extremely_high" class="btn btn-default" id="extremely-high">Extremely High</a>'
                  + '<a href="/calories"                class="btn btn-default" id="blank"         ></a>'
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
                  + '<a href="/glass"         class="btn btn-default" id="blank"     ></a>'  
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

  /* 
   * Note: eliminate repetitiveness in v0.0.2
   */

  setJqueryMap = function() {
    var $container = stateMap.$container;

    jqueryMap = {
      $container   : $container,
      $content     : $container.find('#content-main'  ),
      $drinks      : $container.find('#content-drinks'),

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
      $sweet       : $container.find('#sweet'       ),

      $buttery     : $container.find('#buttery'     ),
      $candy       : $container.find('#candy'       ),
      $caramel     : $container.find('#caramel'     ),
      $chocolate   : $container.find('#chocolate'   ),
      $cinnamon    : $container.find('#cinnamon'    ),
      $coffee      : $container.find('#coffee'      ),
      $creamy      : $container.find('#creamy'      ),
      $fruity      : $container.find('#fruity'      ),
      $herb        : $container.find('#herb'        ),
      $mint        : $container.find('#mint'        ),
      $nutty       : $container.find('#nutty'       ),
      $smoky       : $container.find('#smoky'       ),
      $spicy       : $container.find('#spicy'       ),
      $tart        : $container.find('#tart'        ),
      $vanilla     : $container.find('#vanilla'     ),

      $beer        : $container.find('#beer'        ),
      $brandy      : $container.find('#brandy'      ),
      $bourbon     : $container.find('#bourbon'     ),
      $champagne   : $container.find('#champagne'   ),
      $gin         : $container.find('#gin'         ),
      $liqueur     : $container.find('#liqueur'     ),
      $mixer       : $container.find('#mixer'       ),
      $rum         : $container.find('#rum'         ),
      $tequila     : $container.find('#tequila'     ),
      $whiskey     : $container.find('#whiskey'     ),
      $wine        : $container.find('#wine'        ),

      $carbonated  : $container.find('#carbonated'  ),
      $rough       : $container.find('#rough'       ),
      $smooth      : $container.find('#smooth'      ),

      $black       : $container.find('#black'       ),
      $blue        : $container.find('#blue'        ),
      $clear_color : $container.find('#clear'       ),
      $green       : $container.find('#green'       ),
      $lmc         : $container.find('#layered-multicolored'),
      $orange      : $container.find('#orange'      ),
      $pink        : $container.find('#pink'        ),
      $purple      : $container.find('#purple'      ),
      $red         : $container.find('#red'         ),
      $yellow      : $container.find('#yellow'      ),
      $white       : $container.find('#white'       ),

      $non_alcoholic : $container.find('#non-alcoholic'   ),
      $weak          : $container.find('#weak'            ),
      $light         : $container.find('#light'           ),
      $average       : $container.find('#average'         ),
      $strong        : $container.find('#strong'          ),
      $ex_strong     : $container.find('#extremely-strong'),

      $zero          : $container.find('#zero'            ),
      $low           : $container.find('#low'             ),
      $medium        : $container.find('#medium'          ),
      $high          : $container.find('#high'            ),
      $ex_high       : $container.find('#extremely-high'  ),

      $frozen        : $container.find('#frozen'          ),
      $cold          : $container.find('#cold'            ),
      $room_temp     : $container.find('#room-temperature'),
      $hot           : $container.find('#hot'             ),

      $cocktail      : $container.find('#cocktail'        ),
      $collins       : $container.find('#collins'         ),
      $coupe         : $container.find('#coupe'           ),
      $flute         : $container.find('#flute'           ),
      $hurricane     : $container.find('#hurricane'       ),
      $highball      : $container.find('#highball'        ),
      $irish_coffee  : $container.find('#irish-coffee'    ),
      $lowball       : $container.find('#lowball'         ),
      $martini       : $container.find('#martini'         ),
      $shot          : $container.find('#shot'            ),
      $wine_glass    : $container.find('#wine-glass'      ),

      $classic       : $container.find('#classic'         ),
      $country       : $container.find('#country'         ),
      $holiday       : $container.find('#holiday'         ),
      $iba_official  : $container.find('#iba-official'    ),
      $smoothie      : $container.find('#smoothie'        ),
      $tropical      : $container.find('#tropical'        )
    };
  };

  //// Client-side router methods ////

  //////////////////// One function per feature module ////////////////////
  function bitter() {
    if (currentMod != jqueryMap.bitter)
      currentMod.hide();
    currentMod = jqueryMap.$bitter;
    spa.drinks.postSection();
  }

  function salty() {
    if (currentMod != jqueryMap.salty)
      currentMod.hide();
    currentMod = jqueryMap.$salty;
    spa.drinks.postSection();
  }

  function sour() {
    if (currentMod != jqueryMap.sour)
      currentMod.hide();
    currentMod = jqueryMap.$sour;
    spa.drinks.postSection();
  }

  function sweet() {
    if (currentMod != jqueryMap.sweet)
      currentMod.hide();
    currentMod = jqueryMap.$sweet;
    spa.drinks.postSection();
  }

  function buttery() {
    if (currentMod != jqueryMap.buttery)
      currentMod.hide();
    currentMod = jqueryMap.$buttery;
    spa.drinks.postSection();
  }

  function candy() {
    if (currentMod != jqueryMap.candy)
      currentMod.hide();
    currentMod = jqueryMap.$candy;
    spa.drinks.postSection();
  }

  function caramel() {
    if (currentMod != jqueryMap.caramel)
      currentMod.hide();
    currentMod = jqueryMap.$caramel;
    spa.drinks.postSection();
  }

  function chocolate() {
    if (currentMod != jqueryMap.chocolate)
      currentMod.hide();
    currentMod = jqueryMap.$chocolate;
    spa.drinks.postSection();
  }

  function cinnamon() {
    if (currentMod != jqueryMap.cinnamon)
      currentMod.hide();
    currentMod = jqueryMap.$cinnamon;
    spa.drinks.postSection();
  }

  function coffee() {
    if (currentMod != jqueryMap.coffee)
      currentMod.hide();
    currentMod = jqueryMap.$coffee;
    spa.drinks.postSection();
  }

  function creamy() {
    if (currentMod != jqueryMap.creamy)
      currentMod.hide();
    currentMod = jqueryMap.$creamy;
    spa.drinks.postSection();
  }

  function fruity() {
    if (currentMod != jqueryMap.fruity)
      currentMod.hide();
    currentMod = jqueryMap.$fruity;
    spa.drinks.postSection();
  }

  function herb() {
    if (currentMod != jqueryMap.herb)
      currentMod.hide();
    currentMod = jqueryMap.$herb;
    spa.drinks.postSection();
  }

  function mint() {
    if (currentMod != jqueryMap.mint)
      currentMod.hide();
    currentMod = jqueryMap.$mint;
    spa.drinks.postSection();
  }

  function nutty() {
    if (currentMod != jqueryMap.nutty)
      currentMod.hide();
    currentMod = jqueryMap.$nutty;
    spa.drinks.postSection();
  }

  function smoky() {
    if (currentMod != jqueryMap.smoky)
      currentMod.hide();
    currentMod = jqueryMap.$smoky;
    spa.drinks.postSection();
  }

  function spicy() {
    if (currentMod != jqueryMap.spicy)
      currentMod.hide();
    currentMod = jqueryMap.$spicy;
    spa.drinks.postSection();
  }

  function tart() {
    if (currentMod != jqueryMap.tart)
      currentMod.hide();
    currentMod = jqueryMap.$tart;
    spa.drinks.postSection();
  }

  function vanilla() {
    if (currentMod != jqueryMap.vanilla)
      currentMod.hide();
    currentMod = jqueryMap.$vanilla;
    spa.drinks.postSection();
  }

  function beer() {
    if (currentMod != jqueryMap.beer)
      currentMod.hide();
    currentMod = jqueryMap.$beer;
    spa.drinks.postSection();
  }

  function brandy() {
    if (currentMod != jqueryMap.brandy)
      currentMod.hide();
    currentMod = jqueryMap.$brandy;
    spa.drinks.postSection();
  }

  function bourbon() {
    if (currentMod != jqueryMap.bourbon)
      currentMod.hide();
    currentMod = jqueryMap.$bourbon;
    spa.drinks.postSection();
  }

  function champagne() {
    if (currentMod != jqueryMap.champagne)
      currentMod.hide();
    currentMod = jqueryMap.$champagne;
    spa.drinks.postSection();
  }

  function gin() {
    if (currentMod != jqueryMap.gin)
      currentMod.hide();
    currentMod = jqueryMap.$gin;
    spa.drinks.postSection();
  }

  function liqueur() {
    if (currentMod != jqueryMap.liqueur)
      currentMod.hide();
    currentMod = jqueryMap.$liqueur;
    spa.drinks.postSection();
  }

  function mixer() {
    if (currentMod != jqueryMap.mixer)
      currentMod.hide();
    currentMod = jqueryMap.$mixer;
    spa.drinks.postSection();
  }

  function rum() {
    if (currentMod != jqueryMap.rum)
      currentMod.hide();
    currentMod = jqueryMap.$rum;
    spa.drinks.postSection();
  }

  function tequila() {
    if (currentMod != jqueryMap.tequila)
      currentMod.hide();
    currentMod = jqueryMap.$tequila;
    spa.drinks.postSection();
  }

  function whiskey() {
    if (currentMod != jqueryMap.whiskey)
      currentMod.hide();
    currentMod = jqueryMap.$whiskey;
    spa.drinks.postSection();
  }

  function wine() {
    if (currentMod != jqueryMap.wine)
      currentMod.hide();
    currentMod = jqueryMap.$wine;
    spa.drinks.postSection();
  }

  function carbonated() {
    if (currentMod != jqueryMap.carbonated)
      currentMod.hide();
    currentMod = jqueryMap.$carbonated;
    spa.drinks.postSection();
  }

  function rough() {
    if (currentMod != jqueryMap.rough)
      currentMod.hide();
    currentMod = jqueryMap.$rough;
    spa.drinks.postSection();
  }

  function smooth() {
    if (currentMod != jqueryMap.smooth)
      currentMod.hide();
    currentMod = jqueryMap.$smooth;
    spa.drinks.postSection();
  }

  function black() {
    if (currentMod != jqueryMap.black)
      currentMod.hide();
    currentMod = jqueryMap.$black;
    spa.drinks.postSection();
  }

  function blue() {
    if (currentMod != jqueryMap.blue)
      currentMod.hide();
    currentMod = jqueryMap.$blue;
    spa.drinks.postSection();
  }

  function clearColor() {
    if (currentMod != jqueryMap.clear_color)
      currentMod.hide();
    currentMod = jqueryMap.$clear_color;
    spa.drinks.postSection();
  }

  function green() {
    if (currentMod != jqueryMap.green)
      currentMod.hide();
    currentMod = jqueryMap.$green;
    spa.drinks.postSection();
  }

  function lmc() {
    if (currentMod != jqueryMap.lmc)
      currentMod.hide();
    currentMod = jqueryMap.$lmc;
    spa.drinks.postSection();
  }

  function orange() {
    if (currentMod != jqueryMap.orange)
      currentMod.hide();
    currentMod = jqueryMap.$orange;
    spa.drinks.postSection();
  }

  function pink() {
    if (currentMod != jqueryMap.pink)
      currentMod.hide();
    currentMod = jqueryMap.$pink;
    spa.drinks.postSection();
  }

  function purple() {
    if (currentMod != jqueryMap.purple)
      currentMod.hide();
    currentMod = jqueryMap.$purple;
    spa.drinks.postSection();
  }

  function red() {
    if (currentMod != jqueryMap.red)
      currentMod.hide();
    currentMod = jqueryMap.$red;
    spa.drinks.postSection();
  }

  function yellow() {
    if (currentMod != jqueryMap.yellow)
      currentMod.hide();
    currentMod = jqueryMap.$yellow;
    spa.drinks.postSection();
  }

  function white() {
    if (currentMod != jqueryMap.white)
      currentMod.hide();
    currentMod = jqueryMap.$white;
    spa.drinks.postSection();
  }

  function nonAlcoholic() {
    if (currentMod != jqueryMap.non_alcoholic)
      currentMod.hide();
    currentMod = jqueryMap.$non_alcoholic;
    spa.drinks.postSection();
  }

  function weak() {
    if (currentMod != jqueryMap.weak)
      currentMod.hide();
    currentMod = jqueryMap.$weak;
    spa.drinks.postSection();
  }

  function light() {
    if (currentMod != jqueryMap.light)
      currentMod.hide();
    currentMod = jqueryMap.$light;
    spa.drinks.postSection();
  }

  function average() {
    if (currentMod != jqueryMap.average)
      currentMod.hide();
    currentMod = jqueryMap.$average;
    spa.drinks.postSection();
  }

  function strong() {
    if (currentMod != jqueryMap.strong)
      currentMod.hide();
    currentMod = jqueryMap.$strong;
    spa.drinks.postSection();
  }

  function extremelyStrong() {
    if (currentMod != jqueryMap.ex_strong)
      currentMod.hide();
    currentMod = jqueryMap.$ex_strong;
    spa.drinks.postSection();
  }

  function zero() {
    if (currentMod != jqueryMap.zero)
      currentMod.hide();
    currentMod = jqueryMap.$zero;
    spa.drinks.postSection();
  }

  function low() {
    if (currentMod != jqueryMap.low)
      currentMod.hide();
    currentMod = jqueryMap.$low;
    spa.drinks.postSection();
  }

  function medium() {
    if (currentMod != jqueryMap.medium)
      currentMod.hide();
    currentMod = jqueryMap.$medium;
    spa.drinks.postSection();
  }

  function high() {
    if (currentMod != jqueryMap.high)
      currentMod.hide();
    currentMod = jqueryMap.$high;
    spa.drinks.postSection();
  }

  function extremelyHigh() {
    if (currentMod != jqueryMap.ex_high)
      currentMod.hide();
    currentMod = jqueryMap.$ex_high;
    spa.drinks.postSection();
  }

  function frozen() {
    if (currentMod != jqueryMap.frozen)
      currentMod.hide();
    currentMod = jqueryMap.$frozen;
    spa.drinks.postSection();
  }

  function cold() {
    if (currentMod != jqueryMap.cold)
      currentMod.hide();
    currentMod = jqueryMap.$cold;
    spa.drinks.postSection();
  }

  function roomTemperature() {
    if (currentMod != jqueryMap.room_temp)
      currentMod.hide();
    currentMod = jqueryMap.$room_temp;
    spa.drinks.postSection();
  }

  function hot() {
    if (currentMod != jqueryMap.hot)
      currentMod.hide();
    currentMod = jqueryMap.$hot;
    spa.drinks.postSection();
  }

  function cocktail() {
    if (currentMod != jqueryMap.cocktail)
      currentMod.hide();
    currentMod = jqueryMap.$cocktail;
    spa.drinks.postSection();
  }

  function Collins() {
    if (currentMod != jqueryMap.Collins)
      currentMod.hide();
    currentMod = jqueryMap.$Collins;
    spa.drinks.postSection();
  }

  function coupe() {
    if (currentMod != jqueryMap.coupe)
      currentMod.hide();
    currentMod = jqueryMap.$coupe;
    spa.drinks.postSection();
  }

  function flute() {
    if (currentMod != jqueryMap.flute)
      currentMod.hide();
    currentMod = jqueryMap.$flute;
    spa.drinks.postSection();
  }

  function hurricane() {
    if (currentMod != jqueryMap.hurricane)
      currentMod.hide();
    currentMod = jqueryMap.$hurricane;
    spa.drinks.postSection();
  }

  function highball() {
    if (currentMod != jqueryMap.highball)
      currentMod.hide();
    currentMod = jqueryMap.$highball;
    spa.drinks.postSection();
  }

  function irishCoffee() {
    if (currentMod != jqueryMap.irish_coffee)
      currentMod.hide();
    currentMod = jqueryMap.$irish_coffee;
    spa.drinks.postSection();
  }

  function lowball() {
    if (currentMod != jqueryMap.lowball)
      currentMod.hide();
    currentMod = jqueryMap.$lowball;
    spa.drinks.postSection();
  }

  function martini() {
    if (currentMod != jqueryMap.martini)
      currentMod.hide();
    currentMod = jqueryMap.$martini;
    spa.drinks.postSection();
  }

  function shot() {
    if (currentMod != jqueryMap.shot)
      currentMod.hide();
    currentMod = jqueryMap.$shot;
    spa.drinks.postSection();
  }

  function wineGlass() {
    if (currentMod != jqueryMap.wine)
      currentMod.hide();
    currentMod = jqueryMap.$wine;
    spa.drinks.postSection();
  }

  function classic() {
    if (currentMod != jqueryMap.classic)
      currentMod.hide();
    currentMod = jqueryMap.$classic;
    spa.drinks.postSection();
  }

  function country() {
    if (currentMod != jqueryMap.country)
      currentMod.hide();
    currentMod = jqueryMap.$country;
    spa.drinks.postSection();
  }

  function holiday() {
    if (currentMod != jqueryMap.holiday)
      currentMod.hide();
    currentMod = jqueryMap.$holiday;
    spa.drinks.postSection();
  }

  function ibaOfficial() {
    if (currentMod != jqueryMap.iba_official)
      currentMod.hide();
    currentMod = jqueryMap.$iba_official;
    spa.drinks.postSection();
  }

  function smoothie() {
    if (currentMod != jqueryMap.smoothie)
      currentMod.hide();
    currentMod = jqueryMap.$smoothie;
    spa.drinks.postSection();
  }

  function tropical() {
    if (currentMod != jqueryMap.tropical)
      currentMod.hide();
    currentMod = jqueryMap.$tropical;
    spa.drinks.postSection();
  }

  //////////////////// Other methods ////////////////////

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
    page('/taste/bitter', bitter);
    page('/taste/salty' , salty );
    page('/taste/sour'  , sour  );
    page('/taste/sweet' , sweet );

    page('/flavor/buttery'  , buttery  );
    page('/flavor/candy'    , candy    );
    page('/flavor/caramel'  , caramel  );
    page('/flavor/chocolate', chocolate);
    page('/flavor/cinnamon' , cinnamon );
    page('/flavor/coffee'   , coffee   );
    page('/flavor/creamy'   , creamy   );
    page('/flavor/fruity'   , fruity   );
    page('/flavor/herb'     , herb     );
    page('/flavor/mint'     , mint     );
    page('/flavor/nutty'    , nutty    );
    page('/flavor/smoky'    , smoky    );
    page('/flavor/spicy'    , spicy    );
    page('/flavor/tart'     , tart     );
    page('/flavor/vanilla'  , vanilla  );

    page('/ingredients/beer'     , beer     );
    page('/ingredients/brandy'   , brandy   );
    page('/ingredients/bourbon'  , bourbon  );
    page('/ingredients/champagne', champagne);
    page('/ingredients/gin'      , gin      );
    page('/ingredients/liqueur'  , liqueur  );
    page('/ingredients/mixer'    , mixer    );
    page('/ingredients/rum'      , rum      );
    page('/ingredients/tequila'  , tequila  );
    page('/ingredients/whiskey'  , whiskey  );
    page('/ingredients/wine'     , wine     );

    page('/feeling/carbonated', carbonated);
    page('/feeling/rough'     , rough     );
    page('/feeling/smooth'    , smooth    );

    page('/color/black'                , black     );
    page('/color/blue'                 , blue      );
    page('/color/clear'                , clearColor);
    page('/color/green'                , green     );
    page('/color/layered-multicolored' , lmc       );
    page('/color/orange'               , orange    );
    page('/color/pink'                 , pink      );
    page('/color/purple'               , purple    );
    page('/color/red'                  , red       );
    page('/color/yellow'               , yellow    );
    page('/color/white'                , white     );

    page('/strength/non-alcoholic'   , nonAlcoholic   );
    page('/strength/weak'            , weak           );
    page('/strength/light'           , light          );
    page('/strength/average'         , average        );
    page('/strength/strong'          , strong         );
    page('/strength/extremely-strong', extremelyStrong);

    page('/calories/zero'          , zero         );
    page('/calories/low'           , low          );
    page('/calories/medium'        , medium       );
    page('/calories/high'          , high         );
    page('/calories/extremely-high', extremelyHigh);

    page('/temperature/frozen'          , frozen         );
    page('/temperature/cold'            , cold           );
    page('/temperature/room-temperature', roomTemperature);
    page('/temperature/hot'             , hot            );

    page('/glass/cocktail'    , cocktail   );
    page('/glass/Collins'     , Collins    );
    page('/glass/coupe'       , coupe      );
    page('/glass/flute'       , flute      );
    page('/glass/hurricane'   , hurricane  );
    page('/glass/highball'    , highball   );
    page('/glass/irish-coffee', irishCoffee);
    page('/glass/lowball'     , lowball    );
    page('/glass/martini'     , martini    );
    page('/glass/shot'        , shot       );
    page('/glass/wine-glass'  , wineGlass  );

    page('/special/classic'     , classic    );
    page('/special/country'     , country    );
    page('/special/holiday'     , holiday    );
    page('/special/iba-official', ibaOfficial);
    page('/special/smoothie'    , smoothie   );
    page('/special/tropical'    , tropical   );


    //// Click event handlers ////
    $('#bitter').on("click", function() {
      //hideTertiaryCategories();
      console.log("bitter was clicked");
    });

  };

  postSection = function( subView ) {
    console.log(subView);
    jqueryMap.$drinks.hide();
    hideSecondaryCategories();
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
        jqueryMap.$feeling.show();
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
        break;
      case "allDrinks":
        currentMod = jqueryMap.$allDrinks;
        jqueryMap.$allDrinks.show();
        break;
    }

    jqueryMap.$container.show();
  };

  return { initModule : initModule,
           postSection : postSection
  };

}());