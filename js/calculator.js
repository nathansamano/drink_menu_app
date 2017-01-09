/*
 * calculator.js
 * Helper file to calculate ABV and calories of a drink
 */

var
  drinks      = DRINKS,
  ingredients = INGREDIENTS;

function calcABV( drink ) {
  var ABV = 0;

  return ABV;
}

function calcCalories( drinkName ) {
  var calories        = 0;
  var ingredientIndex = 0;
  var drinkIndex      = binarySearchByName( drinks, drinkName );
  var drink           = drinks[drinkIndex];
  console.log("Drink: " + drink.name);
  // loop through each ingredient for drink
  for (var i = 0; i < drink.ingredients.length; i++) {
    // find ingredient for drink listed in ingredientList
    console.log("Drink ingredient: " + drink.ingredients[i][0].split("/"));
    ingredientIndex = binarySearchByName( ingredients, drink.ingredients[i][0].split("/")[0] );
    // calculate calories based on amount used in recipe
    console.log("Ingredient: " + ingredients[ingredientIndex].name);
    switch(drink.ingredients[i][2]) {
      case "oz":
        calories += drink.ingredients[i][1] / (1.5 / ingredients[ingredientIndex].calories);
        break;
      case "dash":
      case "dashes":
      case "":
        calories += drink.ingredients[i][1] * ingredients[ingredientIndex].calories;
        break;
      default:
        return -1;
    }
    console.log("calories: " + calories);
  }
  return calories;
}

console.log(drinks[0].name);
console.log(binarySearchByName(drinks, "Old Fashioned"))
console.log(calcCalories( "Old Fashioned" ));




////////// Helper Methods //////////

function binarySearchByName(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid].name < data) {
      lowerBound = mid + 1;
    }
    else if (arr[mid].name > data) {
      upperBound = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}