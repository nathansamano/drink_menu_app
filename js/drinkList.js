/*
 * drinkList.js
 * JSON of all drink recipes
 *
 * TODO: need separate JSON file for ingredients
 *       need precise way to calculate strength and calories using ingredients
 */

var DRINKS = [
  {name: "Old Fashioned", ingredients: [["Bourbon/Rye whiskey", 1.5, "oz"], ["Angostura bitters", 2, "dashes"], ["Sugar cube", 1], "Water", 3, "dashes"]
    calories: calcCalories(), tags: ["orange", "strong", "cold", "lowball", "classic", "IBA Official"]}
];

if (typeof module != "undefined" && module.exports)
  module.exports = DRINKS;

//////////////////// M E T H O D S ////////////////////

function calcCalories( ingredients ) {
  var calories = 0;

  return calories;
}