///Exercise for Loops

for (var i = 0; i <= 20; i++)  {
  if (i % 2 === 0) {
    console.log(i + " is even");
  };
};

///Multiplications Tables

for (var i = 0; i <= 10; i++) {
  console.log(i * 9);
}

///The Grade Assigner  ------ ask for help
//
for (var i = 60; i <= 100; i++) {
  if (i === 89) {
    console.log("for " + i + " you got a B");
  }
}

//The Calculator

var squareNumber = function(y) {
console.log("The result of squaring the number " + y + " is " + (y * y));
return squareNumber;
}

var halfNumber = function(aNumber) {
  console.log("Half of " + aNumber + " is " + (aNumber / 2));
  return halfNumber;
}

halfNumber(5);

var percentOf = function( numOne, numTwo ) {
  var percentNumber = (numOne / numTwo) * 100;
  console.log(numOne + " is " + percentNumber + "% of " + numTwo);
  return percentOf;
}

percentOf(2, 5)

var areaOfCircle = function(radius) {
  var area = (radius * 2 * Math.PI);
  console.log("The area for a circle with a radius of " + radius + " is " + area);
  return areaOfCircle;
}

areaOfCircle(6);


//////

////// Strings

////Dr Evil

var drEvil = function(amount) {
  if (amount === 1000) {
    console.log("$" + 1000 + " Pinky");
    }
  else console.log("$" + amount);
}
drEvil(1);
drEvil(1000);
drEvil(3)

////Mix Up


////notes




function mixUp(a, b) {
  var startWordOne = a.slice(5);
  var startWordTwo = b.slice(0,3);
  var endWordOne = a.slice(1);
  var endWordTwo = b.slice(1);

  var result = startWordOne + endWordTwo + " " + startWordTwo + endWordOne;
  console.log(result);
  return result;



  // var result = b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
  // console.log(result);
  // return result
}

mixUp("abcdefghi", "123456789")


////Fix Start

/////to continue homework from fix Start


////Warm up exercise


////Do this in HTML and JS!

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

var leapYearCalculator = function(x) {
  if ((x % 4 === 0) && ((x % 100 !== 0) || (x % 400 === 0))) {
  console.log(x + " Is a Leap Year!");
  return leapYearCalculator;
  }
  else {
    console.log(x + " Is Not a leap year");
  }
}


leapYearCalculator(2007);

///Answer to prework

// var input = 2000;
//
// var isLeapYear = function(year) {
//   if (year % 4 === 0) {
//     ///it might me a leap year
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//       console.log("It's a leap year");
//     }
//     }
//   } else {
//     console.log(year + " is not a leap year");
//   }
//
// };
//
// input(isLeapYear(year));


///questions - divisible by 100 or not divisibly by 100?
///why the else not working in my expression

///Splice (starting index, How many items to slice)
