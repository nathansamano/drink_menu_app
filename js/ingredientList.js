/*
 * ingredientList.js
 * JSON of all ingredients
 * Necessary for ABV and calorie calculations
 *
 * Note: calories = calories per 1.5 ounce shot
 *    or calories = calories per dash (1/8 teaspoon)
 */

var INGREDIENTS = [
  {name: "Bourbon",           ABV: 40, calories:  97},
  {name: "Rye Whiskey",       ABV: 45, calories: 104},
  {name: "Angostura Bitters", ABV:  0, calories:   4},
  {name: "Sugar Cube",        ABV:  0, calories:  12},
  {name: "Water",             ABV:  0, calories:   0}
];

if (typeof module != "undefined" && module.exports)
  module.exports = INGREDIENTS;