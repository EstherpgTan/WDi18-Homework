var allergens = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats"
};

var getAllergies = function(number) {
  var allergiesArray = [];

  // APPROACH 1: Using ES-3 methods (compatible in all browsers):

  // var allergenKeys = [];
  //
  // for (var i = 0; i < Object.keys(allergens).length; i++) {
  //   allergenKeys.push(parseInt(Object.keys(allergens)[i]));
  // }
  // allergenKeys.sort(function(a, b) {
  //   return a - b;
  // });
  // //
  // allergenKeys.reverse();

  // APPROACH 2: Using ES-6's Array.map method (will not work in older browsers):

  var allergenKeys = Object.keys(allergens).map(Number).sort(function(a,b) { return a - b; }).reverse();

  // A note about sorting - by default, JavaScript's Array.sort method turns the array elements into strings and sorts them according to alphabetic comparison (where 2 is greater than 12). We can get JavaScript to sort them as numbers by passing a compare function into the sort method (function(a,b) {return (a - b) }).

  for (var j = 0; j < allergenKeys.length; j++) {
    var potentialAllergy = allergens[allergenKeys[j]];
    if (number >= allergenKeys[j]) {
      allergiesArray.push(potentialAllergy);
      number -= allergenKeys[j];
    }
  }

  if (allergiesArray.length === 0) {
    return "No allergies";
  } else {
    return allergiesArray;
  }
};

console.log(getAllergies(129));
