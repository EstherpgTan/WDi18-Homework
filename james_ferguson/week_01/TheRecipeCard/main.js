// //Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// // On separate lines (one console.log statement for each), log the recipe information so it looks like
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe ={
  title: "Thai Green curry",
  serves: 2,
  ingredients: [
      "curry paste",
      "250g Chicken",
      "1 cup green beans",
      "1 can coconut milk",
]
};
console.log(recipe.title);
console.log("serves: " + recipe.serves);
console.log(recipe[2]); // not sure on this one!
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[3]);
