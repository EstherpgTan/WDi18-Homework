// The Calculator
//
// write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function squareNumber(num){
 var numSquared = num * num;
 console.log("The result of squaring the number "+num+" is "+numSquared);
 return numSquared;
};
squareNumber(5);


function halfNumber(num){
  var numHalved = num / 2;
  console.log("The result of halving the number "+num+" is "+numHalved);
  return numHalved;
};
halfNumber(6);

var geometrizer = function(radius){
  var calcRadius = Math.round(2 * Math.PI * radius);
  console.log("Based on the radius of "+radius+"cm The circumference of your circle is "+calcRadius +"cm");
  return calcRadius;
};
geometrizer(80);

function percentOf(numOne, numTwo){
 var percentNum = Math.round((numOne / numTwo) *100);
 console.log(numOne+" is "+percentNum+"% of "+numTwo);
 return percentNum;
};
percentOf(8, 60);

//Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

  var doAll = function(num){
    var halved = halfNumber(num);
    var squared = squareNumber(halved);
    var radius = geometrizer(squared);
    var percentage = percentOf(squared, radius);
    console.log(percentage);
};

 doAll(7);

//Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//  DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount){

   if (amount === 1000000){
    console.log(amount+" dollars (pinky)");
   }else{
    console.log(amount+" dollars");
   };
};
  DrEvil(1000000);
  DrEvil(10);

//Create a function called mixUp. It should take in two strings, and return the concatenation of the two
//strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume
//that the strings are at least 2 characters long. For example:

//  mixUp('mix', pod'): 'pox mid'
//  mixUp('dog', 'dinner'): 'dig donner'
//Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(stringOne, stringTwo){
 var slice1 = stringOne.slice(0,2);
 var slice2 = stringTwo.slice(0,2);
 var newWordOne = slice2+stringOne.slice(2);
 var newWordTwo = slice1+stringTwo.slice(2);
console.log(newWordOne, newWordTwo);
};

mixUp('mix', 'pod');


//Create a function called fixStart. It should take a single argument, a string, and return a
//version where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one character
//long. For example:

//fixStart('babble'): 'ba**le'

var fixStart = function(word){
  var firstLetter = word.charAt(0);
  var newWord = firstLetter;
  for (var i = 1; i < word.length; i++) {
    if (firstLetter === word.charAt(i)){
     newWord+="*";
    }else{
     newWord+=word.charAt(i);
    };
  }
  console.log(newWord);
};
fixStart("bubble");

//Create a function called verbing. It should take a single argument, a string. If its length
//is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which
//case it should add 'ly' instead. If the string length is less than 3, it should leave it
//unchanged. For example:

//  verbing('swim'): 'swimming'
//  verbing('swimming'): 'swimmingly'
//  verbing('go'): 'go'


var verbing = function(item){
   if (item.length >= 3){
     if (item.slice(-3) === "ing"){
         console.log(item+"ly")
      }else{
         console.log(item+"ing");
      };
  }else{
  console.log(item);
  }

};

verbing("swimming");

//Create a function called notBad that takes a single argument, a string.

//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//For example:

//  notBad('This dinner is not that bad!'): 'This dinner is good!'
//  notBad('This movie is not so bad!'): 'This movie is good!'
//  notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function(phrase){
  if(phrase.search("not")!= -1 &&phrase.search("bad")!= -1){
   var newEndOfPhrase = phrase.search("not");
   var newPhrase = phrase.slice(0, newEndOfPhrase)+"good!";
   console.log(newPhrase);
   }else{
   console.log(phrase);
}

};
notBad("This dinner is not that bad");


var not2Bad = function(phrase){
  if(phrase.search("not")!= -1 &&phrase.search("bad")!= -1){
   var startOfNot = phrase.search("not");
   var endOfBad = phrase.search("bad")+2;
   var newPhrase = phrase.slice(0,startOfNot)+"good!";

   console.log(newPhrase);
   }else{
   console.log(phrase);
  }

};
not2Bad("This dinner is not that bad");
