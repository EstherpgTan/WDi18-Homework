console.log(" ========= OBJECTS The Recipe Card ======== ");
// Create an object to hold information on your favorite recipe.
// It should have properties for title (a string), servings (a number),
// and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each),
// log the recipe information so it looks like:

var cake = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(cake.title);
console.log("Serves: " + cake.serves);
console.log("Ingredients:");


for (i = 0; i < cake.ingredients.length; i += 1) {
  console.log(cake.ingredients[i]);
}
