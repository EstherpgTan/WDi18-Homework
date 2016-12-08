console.log("hw day 3");

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(num0) {
  var squared = Math.pow(num0, 2);
  return "The result of squaring the number " + num0 + " is " + squared + ".";
}
console.log(squareNumber(8));

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num1) {
  var halved = num1 / 2;
  return "Half of " + num1 + " is " + halved + ".";
}

console.log(halfNumber(8));


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(p1, p2) {
  var calcPerc = (p1 * 100) / p2;
  return p1 + " is " + calcPerc + "% of " + p2 + ".";
}

console.log(percentOf(4,8));

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(radius) {
  var calcArea = 3.1415 * (Math.pow(radius, 2));
  var calcArea2Dec = calcArea.toFixed(2);
  return "The area for a circle with the radius " + radius + " is " + calcArea2Dec + ".";
}

console.log(areaOfCircle(10));

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var bigEquation = function(initNum) {
  var halfNum = initNum / 2;
  var squaredHalf =  Math.pow(halfNum, 2);
  var areaOfSqaured = 3.1415 * Math.pow(squaredHalf, 2) ;
  var perOfSquared = (areaOfSqaured * 100) / squaredHalf;
  return "The initial number was " + initNum + ", halved that is " + halfNum + ", if you square that you get " + squaredHalf + ", if you use that number as the radius, the area of a circle is " + areaOfSqaured + ", and the percentage of that area of the squared number is " + perOfSquared.toFixed(2) + "%.";
}

console.log(bigEquation(5));

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

var DrEvil = function(ransom) {
  if (ransom === 1000000) {
    return "1000000 dollars (pinky)"
  } else {
    return ransom + " dollars";
  }
}

console.log(DrEvil(1000000));

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

var mixUp = function(string1, string2) {
  var mixOne = string1.charAt(0)
  var mixTwo = string2.charAt(0)
  var mixed = mixOne + " " + mixTwo
  return mixed
}

console.log(mixUp("cat", "dog"));

// Wrong
