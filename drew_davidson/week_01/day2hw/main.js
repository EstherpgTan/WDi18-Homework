console.log("Day 2 HW");

// Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

var numOne = 1;
var numTwo = 2;

if (numOne > numTwo) {
  console.log(numOne);
} else {
  console.log(numTwo);
}


// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)

var language = "Filipino";

if (language === "English") {
  console.log("Hello World");
} else if (language === "French") {
  console.log("Bonjour World");
} else if (language === "Spanish") {
  console.log("Hola World");
} else if (language === "Filipino") {
  console.log("Kamusta World");
} else {
  console.log("I have no idea where you're from");
}


// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results

var score = 100;

if (score <= 10) {
  console.log("F");
} else if (score <= 20) {
  console.log("D");
} else if (score <= 30) {
  console.log("C");
} else if (score <= 40) {
  console.log("B");
} else if (score <= 50) {
  console.log("A");
} else {
    console.log("You must have cheated because there werent that many marks");
}


// Write an if statement that works with a noun and a number. Make the noun plural if necessary!!


var noun = "potato";
var num = 100;


if (noun.charAt(noun.length -1) === "s") {
  console.log("You have " + num + " " + noun + "es.");
} else if (noun.charAt(noun.length -1) === "o") {
  console.log("You have " + num + " " + noun + "es.");
} else if (noun.charAt(noun.length -1) === "h") {
  console.log("You have " + num + " " + noun + "es.");
} else if (noun.charAt(noun.length -1) === "x") {
  console.log("You have " + num + " " + noun + "es.");
} else if (num > 1) {
  console.log("You have " + num + " " + noun + "'s.");
} else if (num === 1) {
  console.log("You have " + num + " " + noun + ".");
} else if (num === 0) {
  console.log("You should probably get a " + noun + " because theyre great.");
}
