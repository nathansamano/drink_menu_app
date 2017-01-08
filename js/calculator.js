/*
 * calculator.js
 * Helper file to calculate ABV and calories of a drink
 */

function calcABV( drink ) {
  var ABV = 0;

  return ABV;
}

function calcCalories( drink ) {
  var calories = 0;
  for (var i = 0; i < DRINK.length; i++) {

  }
  return calories;
}

//console.log(calcCalories( "Old Fashioned" ));




////////// Helper Methods //////////

function binarySearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    }
    else if (arr[mid] > data) {
      upperBound = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}