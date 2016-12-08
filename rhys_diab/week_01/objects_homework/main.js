///Tbe Recipe Card


      ///example
      // var bookSeries = {
//   name: "In Search of Lost Time",
//   author: "Marcel Proust",
//   books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//   ]
// };
var myFavouriteRecipes = {
  properties: "Awesome",
  servings: 1,
  ingredients: [
    "chocolate",
    "Ice Cream",
    "Sprinkles",
  ]
};

console.log(myFavouriteRecipes.properties);
console.log(myFavouriteRecipes.servings);
console.log(myFavouriteRecipes.ingredients[1]);

////Books Read
  ////Example array of objects
  // var marxFamily = [
  //   { name: "Groucho", birthYear: 1890 },
  //   { name: "Harpo", birthYear: 1888 },
  //   { name: "Chico", birthYear: 1887 },
  //   { name: "Zeppo", birthYear: 1901 },
  //   { name: "Gummo", birthYear: 1893 }

var myBooks = [
  {
name: "influence",
author: "Robert Cialdini",
alreadyRead: true

},
{
  name: "Matery",
  author: "Robert Greene",
  alreadyRead: true
}
];

// console.log(myBooks[1].author);
// console.log(myBooks[2].author);

// for (var i = 0; i < 1; i += 1)
//
// var myCurrentBook = myBooks[i];
// var message = "The " + myBooks[i].name + " by " + mybooks[i].author;
// console.log(message);

////The Movie Database

//"Puff the Magic Dragon
//lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var myFavMovie = {
  title: "Fight Club",
  duration: 2,
  stars: "Brad Pitt"

}

// console.log(myFavMovie.title + ' lasts for ' + myFavMovie.duration + ' minutes');
// console.log("and stars " + myFavMovie.stars);
//
// function printMovie(movie) {
//     console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
//     console.log('It stars ' + movie.stars.join(', '));
// }
// printMovie(myFavMovie);

/////Geometry Functions

// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

rectangle.isSquare = function() {
  if (this.length == this.width) {
      return "This is a square!";
  } else {
      return "Not a square.";
  }
}

///Area of rectangle
rectangle.areaOfrectangle = function() {
  return rectangle.length * rectangle.width;
}
console.log(rectangle.areaOfrectangle());

////Perimeter of Rectangle

rectangle.perimeter = function() {
  return 2 * (this.length + this.width);
}

console.log(rectangle.perimeter());

///Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

      ///returns whether equilateral

// var triangle.isEquilateral = function() {
//   if (triangle.sideA === triangle.sideB && triangle.sideB = triangle.sideC) {
//     console.log("Yes is equilateral");
//   } else {
//     console.log("is not equilateral");
//   }
//
// }


////Warm Up Exercise
      ////Serge Says

// var sergeResponse = {
//   responses: ["Sure", "Whoa, chill out!", "Fine", "Be that way!", "Sure"],
// input : function(input) {
//   console.log(sergeResponse.responses[i]);
// }
// }
//
//
// console.log(sergeResponse.responses[1])

///Prework question

var sergeSays = function(input) {
  return input;

if ( input.endswith("?") ) {
  return "Sure";

  } else if (input === input.toUpperCase()) {
  return "Whoa, drill out!";

} else if (input.length !== 0) {
  return "Fine. Be that way!"

} else {
  return whatever
}


};
console.log(sergeSays("?"));
