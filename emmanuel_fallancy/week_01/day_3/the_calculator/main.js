// Emmanue 26102016 - Homework JS
// Square a number, and return the result.
// Function: squareNumber.
// @param: num (Number)
// @output: "The result of squaring the number 3 is 9."
var squareNumber = function( num ) {
  var result = Math.pow( num, 2 );
  var outputMessage = "The result of squaring the number "
                      + String( num )
                      + " is "
                      + String( result );
  console.log( outputMessage );

  return result;
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2.
// Function: halfNumber
// @param: num (Number)
// @output: Number or Float
// Also log something like: "Half of 5 is 2.5."
var halfNumber = function( num ) {
  var result = num / 2;
  var outputMessage = "Half of " + String( num ) + " is " + String( result );
  console.log( outputMessage );

  return result;
};


// Write a function called percentOf that will take two numbers.
// Figure out what percent the first number represents of the second number, and return the result.
// Function: percentOf
// @param: portion (Number)
// @param: base (Number)
// @output: Number or Float
// Also log something like: "2 is 50% of 4."
var percentOf = function( portion, base ) {
  var result = ( portion / base ) * 100 ;
  var resultInTwoDecimal = result.toFixed( 2 );
  var outputMessage = portion + " is "+ resultInTwoDecimal + "% of "+ base + ".";
  console.log( outputMessage );

  return resultInTwoDecimal;
};

// Write a function called areaOfCircle that will take one argument (the radius).
//   Calculate the area based on that, and return the result.
//   Bonus: Round to 2 decimal points
// Function: areaOfCircle
// @param: radius (Number)
// @output: Number or Float
// Also log something like: "The area for a circle with radius 2 is 12.566370614359172."
var areaOfCircle = function( radius ) {
  var result = 2 * Math.PI * radius;
  var finalResult = result.toFixed( 2 );
  var outputMessage = "The area for a circle with radius "
                       + String( radius )
                       +" is "
                       + finalResult
                       +".";
  console.log( outputMessage );

  return finalResult;
};

// Calculator Part 2 - Create a function that accept an argument and perform the following:
// #1 Take half of the number and store the result.
// #2 Square the result of #1 and store that result.
// #3 Calculate the area of a circle with the result of #2 as the radius.
// #4 Calculate what percentage that area is of the squared result (#3).
var calculatorAction = function( value ) {
  var halfValue = halfNumber( value );
  var squareHalfValue = squareNumber( halfValue );
  var areaOfCircleValue = areaOfCircle( squareHalfValue );
  var percFromAreaValue = percentOf( squareHalfValue, areaOfCircleValue );
};

console.log( "The Calculator...");
calculatorAction( 42 );
