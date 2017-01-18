/*
 * routes.js - module to provide routing
*/

//// local variables ////
'use strict';
var
  routeLabels = ['/',
    '/taste'  , '/flavor'     , '/ingredients',
    '/color'  , '/temperature', '/glass'      ,
    '/special', '/random'     , '/all_drinks' ,

    '/taste/alcohol', '/taste/bitter', '/taste/salty',
    '/taste/sour'   , '/taste/sweet' ,

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

    '/color/black' , '/color/blue'  , '/color/clear' ,
    '/color/green' , '/color/layered-multicolored'   ,
    '/color/orange', '/color/pink'  , '/color/purple',
    '/color/red'   , '/color/yellow', '/color/white' ,

    '/temperature/frozen'          , '/temperature/cold',
    '/temperature/room_temperature', '/temperature/hot' ,

    '/glass/cocktail'    , '/glass/Collins'  , '/glass/coupe'   ,
    '/glass/flute'       , '/glass/hurricane', '/glass/highball',
    '/glass/Irish_coffee', '/glass/lowball'  , '/glass/martini' ,
    '/glass/shot'        , '/glass/wine'     ,

    '/special/carbonated'  , '/special/classic' ,
    '/special/country'     , '/special/holiday' ,
    '/special/IBA_Official', '/special/smoothie',
    '/special/tropical'
  ],
  configRoutes;
//// End variable declarations ////

//// Public API ////

configRoutes = function ( router, server ) {

  // Serve files from html sibling directory
  var options = {
    root: __dirname + '/../html/'
  };

  // Configure for all listed labels
  for (var i = 0; i < routeLabels.length; i++) {
    router.get(routeLabels[i], function(req, res) {
      res.sendFile('index.html', options);
    });
  }

}; 
 
module.exports = { configRoutes : configRoutes };

