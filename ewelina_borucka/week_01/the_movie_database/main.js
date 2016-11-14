console.log(" ========= The Movie Database ======== ");
// Create an object to store the following information about
// your favorite movie: title (a string),
// duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so:
// "Puff the Magic Dragon lasts for 30 minutes.
// Stars: Puff, Jackie, Living Sneezes."

var movie1 = {
  title: "First",
  duration: 100,
  stars: ["Jackie", "John", "Bush", "Taylor"]
};



function movieInfo (obj) {

  var description = obj.title + " lasts for " + obj.duration + " minutes.";
  var listOfStars = ""; //define an empty string to start iteration with

  for (i = 0; i < obj.stars.length; i += 1) {

    if ( i === obj.stars.length - 1 ) {
      listOfStars = listOfStars + obj.stars[i] + ".";
    } else {
      listOfStars = listOfStars + obj.stars[i] + ", ";
    }

  }
  console.log( description);
  console.log("Stars: " + listOfStars);
}

movieInfo(movie1);










// var movie2 = {
//   title: "Second",
//   duration: 100,
//   stars: ["Kuku", "Dupa", "Ola"]
// };
//
//
// var movie3 = {
//   title: "Third",
//   duration: 100,
//   stars: ["Adam", "Kasia", "Piwo", "Szajba"]
// };
//
// var movie4 = {
//   title: "Fourth",
//   duration: 100,
//   stars: ["Jan", "Marzena", "Kapusta", "Tyniec", "Stalowa Wola"]
// };
