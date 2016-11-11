// THE CALCULATOR
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(num) {
  var square = num * num;
  console.log("The result of squaring the number " + num + " is " + square + ".");
  return square;
};

squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num) {
  var divideByTwo = num / 2;
  console.log("Half of " + num + " is " + divideByTwo + ".");
  return divideByTwo;
}

halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(x, y) {
  var percentageOf = x / y * 100;
  console.log(x + " is " + percentageOf + "% of " + y + ".");
  return percentageOf;
};

percentOf(2,4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius) {
  var circleArea = 2 * Math.PI * radius;
  console.log("The area for a circle with radius " + radius + " is " + circleArea + ".");
  return circleArea;
}

areaOfCircle(2);

// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(radius) {
  var circleArea = 2 * Math.PI * radius;
  circleArea = circleArea.toFixed(2);
  console.log("The area for a circle with radius " + radius + " is " + circleArea + ".");
  return circleArea;
}

areaOfCircle(2);

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.

/* var squareNumberResult = squareNumber();

var squareNumberTwo = function() {
  var square2 = squareNumberResult * squareNumberResult;
  console.log(square2);
  return square2;
} */

// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
//
// Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function(amount) {
  if (amount === 1000000) {
    var drEviled = "DrEvil(" + amount + "): " + amount + " dollars (pinky)"
    console.log(drEviled);
    return drEviled;
  } else {
    var drEviled = "DrEvil(" + amount + "): " + amount + " dollars";
    console.log(drEviled);
    return drEviled;
  }
};

drEvil(1000000);

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// mixUp=(s1,s2)=>(s =>`${s2[s](0,2)+s1[s](2)} ${s1[s](0,2)+s2[s](2)}`)('slice')


/* var mixUp = function(string1, string2) {
  var string1Slice = string1.slice(2)
  console.log(string1Slice);
  var string2Value = string2.length - 1;
  console.log(string2Value);
  var string2PreFix = string2.slice(0, string2Value); // we want string2Value to = 2
  console.log(string2PreFix);
  var newString1 = string2PreFix + string1Slice;
  var string2Slice = string2.slice(2);
  var string1Value = string1.length - 1;
  console.log(string1Value);
  var string1PreFix = string1.slice(0, string1Value); // we want string1Value to = 2
  var newString2 = string1PreFix + string2Slice;
  console.log(newString1 + " " + newString2);
  return newString1 + " " + newString2;
}
*/

// BEN'S BETTER EXAMPLE
// function spliceFirstTwoChar(str1, str2) {
//   var first2CharactersOfStr1 = str1.slice(0, 2);
//   var restOfStr2             = str2.substr(2);
//   return first2CharactersOfStr1 + restOfStr2;
// }
//
// var mixUp = function (str1, str2) {
//   return spliceFirstTwoChar(str1, str2) + " " + spliceFirstTwoChar(str2, str1);
// };

var mixUp = function (str1, str2) {
  var first2CharactersOfStr2 = str2.slice(0, 2);
  var restOfStr1 = str1.substr(2);
  var newString1 = first2CharactersOfStr2 + restOfStr1;
  var first2CharactersOfStr1 = str1.slice(0, 2);
  var restOfStr2 = str2.substr(2);
  var newString2 = first2CharactersOfStr1 + restOfStr2;
  return newString1 + " " + newString2;
};

console.log(mixUp("dog", "dinner"));

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart=(s)=>s.split('').map((c, i)=>i===0?c:(c===s[0]?'*':c)).join('');
// fixStart('babble'): 'ba**le'

var fixStart = function(word) {
  var firstLEtter = word.charAt(0);
  var newWord = firstLEtter;
  for (var i = 1; i < word.length; i++) {
    if (firstLEtter === word.charAt(i)) {
      newWord+="*";
    } else {
      newWord = word.charAt(i);
    }
  }
}

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// verbing=(s)=>s.length>2?s.endsWith('ing')?`${s}ly`:`${s}ing`:s

var verbing = function (string) {
  if (string.endsWith('ing')) {
    return string + "ly";
  } else if (string.length >= 3) {
    return string + "ing";
  } else {
    return string;
  };
}
l = console.log
// ['swim', 'swimming', 'go'].each(w=>l(verbing(w)));
  l(verbing('swim'))
  l(verbing('swimming'))
  l(verbing('go'))

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

// notBad = (s) => s.replace(/not.*bad/, 'good');

// Search string for 'bad' and 'not'
// if 'not' comes before 'bad' then replace 'not' ... 'bad' with 'good

// if it doesn't find 'not' and 'bad' in this order or at all, just return original sentence

var notBad = function (str) {
  if (str.includes("not")) {
    if (str.includes ("bad")) {
  var whereFirstNotIs = str.indexOf("not");
  var whereFirstBadIs = str.indexOf("bad");
  var firstPart  = str.slice(0, whereFirstNotIs);
  var secondPart = str.slice(whereFirstNotIs, whereFirstBadIs);
  var thirdPart  = str.slice(whereFirstBadIs + "bad".length, str.length);

// find the index of where bad ends

  console.log(firstPart + "good" + thirdPart);
  return firstPart + "good" + thirdPart;
};

// Ned's solution below using regexp

notBad('This dinner is bad!');
