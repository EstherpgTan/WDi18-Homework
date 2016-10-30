console.log("The Calculator");

// PART 1:
// Write a function called squareNumber that will take one argument (a number), square that number,
//and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var numOne = 3;
var squareNumber = function ( x ) {
  var resultSquare = Math.pow(x,2);
  console.log("The result of squaring " + x + " is " + resultSquare);
};

squareNumber( numOne );


// Write a function called halfNumber that will take one argument (a number), divide it by 2,
// and return the result. It should also log a string like "Half of 5 is 2.5.".

var numTwo = 5;
var halfNumber = function ( y ) {
  var resultHalf = y / 2;
  console.log("Half of " + y + " is " + resultHalf);
};

halfNumber( numTwo );


// Write a function called percentOf that will take two numbers,
//igure out what percent the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."

var numThree = 2;
var numFour = 4;
var percentOf = function ( z , w ) {
  var resultPercent = ( z / w ) * 100;
  console.log(z + " is " + resultPercent + "% of " + w)
}

percentOf( numThree , numFour );


// Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var radius = 20;
var areaOfCircle = function( num ) {
  var resultArea = Math.PI * Math.pow( num , 2);
  console.log("The area for a circle with radius " + num + " is " + resultArea.toFixed(2)); // toFixed only works for display as it turs the number into a string, not good for further mathematical calculations
}

areaOfCircle( radius );

// PART 2:
// Write a function that will take one argument (a number) and perform the following operations,
// using the functions you wrote earlier1:
  // Take half of the number and store the result.
  // Square the result of #1 and store that result.
  // Calculate the area of a circle with the result of #2 as the radius.
  // Calculate what percentage that area is of the squared result (#3).

var numFive = 3;
var halfNumberB= function ( n ) {
  var resultHalf = halfNumber ( n );
  return resultHalf;
};
halfNumberB ( numFive );


var numSix = 1;
var squareNumberB = function ( m ) {
  var resultSquareB = squareNumber ( m );
  return resultSquareB;
};
squareNumberB( numSix );


var radiusB = 2;
var areaOfCircleB = function ( p ) {
  var resultAreaB = areaOfCircle ( p );
  return resultAreaB;
};
areaOfCircleB( radiusB );

// to be fixed..
// var percentOfB = function ( r, s ) {
//   var v = areaOfCircleB(r);
//   var w = squareNumberB(s);
//   var percresult = ( v / w );
// }
// percentOfB ()
