/*
 * calculator.js
 * Helper file to calculate ABV and calories of a drink
 */

var
  drinks      = DRINKS,
  ingredients = INGREDIENTS;

function calcABV( drinkName ) {
  var ABV           = 0;
  var drinkIndex    = binarySearchByName( drinks, drinkName );
  var drink         = drinks[drinkIndex];
  var volume        = calcVolume(drinkName);
  var alcoholAmount = calcAlcoholAmount(drinkName);
  // if drink is shaken or stirred, need to account for melted ice
  drink.isShakenOrStirred ?
    ABV = alcoholAmount / (volume * 1.33) : ABV = alcoholAmount / volume;
  // round to 2 decimal places as a percent
  ABV = Math.round(ABV * 10000) / 100;
  console.log("ABV: " + ABV + "%");
  return ABV;
}

function calcAlcoholAmount( drinkName ) {
  var amount          = 0;
  var ingredientIndex = 0;
  var drinkIndex      = binarySearchByName( drinks, drinkName );
  var drink           = drinks[drinkIndex];
  // loop through each ingredient of drink
  for (var i = 0; i < drink.ingredients.length; i++) {
    // find ingredient for drink listed in ingredientList
    ingredientIndex = binarySearchByName( ingredients, drink.ingredients[i][0].split("/")[0] );
    // calculate oz of alcohol based on recipe
    switch(drink.ingredients[i][2]) {
      case "oz":
        amount += drink.ingredients[i][1] * (ingredients[ingredientIndex].ABV / 100);
        break;
      case "dash":
      case "dashes":
        amount += drink.ingredients[i][1] * (1/48) * (ingredients[ingredientIndex].ABV / 100);
        break;
      case "":
        break;
      default:
        return -1;
    }
    // round to 2 decimal places
    amount = Math.round(amount * 100) / 100;
  }
  console.log(amount + "oz alcohol");
  return amount;
}

function calcCalories( drinkName ) {
  var calories        = 0;
  var ingredientIndex = 0;
  var drinkIndex      = binarySearchByName( drinks, drinkName );
  var drink           = drinks[drinkIndex];
  console.log("Drink: " + drink.name);
  // loop through each ingredient of drink
  for (var i = 0; i < drink.ingredients.length; i++) {
    // find ingredient for drink listed in ingredientList
    console.log("Drink ingredient: " + drink.ingredients[i][0].split("/"));
    ingredientIndex = binarySearchByName( ingredients, drink.ingredients[i][0].split("/")[0] );
    // calculate calories based on recipe
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
    Math.ceil(calories);
    console.log("calories: " + calories);
  }
  return calories;
}

console.log(drinks[0].name);
console.log(binarySearchByName(drinks, "Old Fashioned"))
console.log(calcCalories( "Old Fashioned" ));
console.log(calcAlcoholAmount( "Old Fashioned" ));
console.log(calcABV( "Old Fashioned" ));



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

function calcVolume( drinkName ) {
  var volume          = 0;
  var ingredientIndex = 0;
  var drinkIndex      = binarySearchByName( drinks, drinkName );
  var drink           = drinks[drinkIndex];
  // loop through each ingredient of drink
  for (var i = 0; i < drink.ingredients.length; i++) {
    // find ingredient for drink listed in ingredientList
    ingredientIndex = binarySearchByName( ingredients, drink.ingredients[i][0].split("/")[0] );
    // calculate oz of alcohol based on recipe
    switch(drink.ingredients[i][2]) {
      case "oz":
        volume += drink.ingredients[i][1];
        break;
      case "dash":
      case "dashes":
        volume += drink.ingredients[i][1] * (1/48);
        break;
      case "":
        break;
      default:
        return -1;
    }
    // round to 2 decimal places
    volume = Math.round(volume * 100) / 100;
  }
  return volume;
}