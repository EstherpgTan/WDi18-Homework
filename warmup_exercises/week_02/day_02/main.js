// There's a bunch of different ways we can do this. The problem kind of suggests to us that an object would be the most appropriate data structure for our letter scores (since we want to be able to see what value is assigned to a particular key). We'll go through two approaches here - the first requires a lot less setup, gives us a data structure that's readable and easy to maintain, but the function is more complicated; the second takes a lot longer to set up, gives us a data structure that's harder to read and harder to maintain, but gives us a cleaner function.

var letterScores = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};


var scrabble = function(word) {
  // Uppercase the word so it matches the values in our letterScores object ("a" !== "A").
  word = word.toUpperCase();
  // Declare a variable that we will add our scrabble scores to. Assign an initial value of 0. Remember to do this BEFORE our for loop, so we don't reassign it the value of zero each iteration!
  var sum = 0;
  // Iterate over all the characters in the word passed in, and ...
  for (var i = 0; i < word.length; i++) {
    // ... create a variable which is the i'th element in the word (just so the code below is a bit more readable and descriptive)
    var letter = word[i];
    // Go through all the key/value pairs in the letterScores object, and...
    for (var prop in letterScores) {
      // ... if the array stored as the value in a key/value pair includes this letter of the word...
      if (letterScores[prop].includes(letter)) {
        console.log(letter, " gets a ", prop);
        // ... add `prop` to the sum (we need to get the string representation of the prop, though)
        sum += parseInt(prop);
      }
    }
  }
  return sum;
};

console.log(scrabble("cabbage"));


// ALTERNATIVE

// A cleaner function if we mess round with the structure of the scores object first...

var letterScoresAlternative = {
  'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
  'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
  's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
  'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
  'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
  'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
  'q' : 10, 'z' : 10
};

var scrabbleAlternative = function(word) {
  word = word.toLowerCase();
  var sum = 0;
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var letterScore = letterScoresAlternative[letter];
    console.log(letter, " gets a ", letterScore);
    sum += letterScore;
  }
  return sum;
};

console.log(scrabbleAlternative("cabbage"));
