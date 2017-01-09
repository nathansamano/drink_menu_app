/*
 * drinkList.js
 * JSON of all drink recipes
 *
 * List DRINKS alphabetically by name
 */

var DRINKS = [
  {name: "Old Fashioned", ingredients: [["Bourbon/Rye Whiskey", 1.5, "oz"], ["Angostura Bitters", 2, "dashes"], ["Sugar Cube", 1, ""], ["Water", 3, "dashes"]],
    garnish: ["Orange Twist", "Cocktail Cherry"],
    tags: ["orange", "strong", "cold", "lowball", "classic", "IBA Official"]}
];

if (typeof module != "undefined" && module.exports)
  module.exports = DRINKS;