// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


console.log("1. Even or Odd Number");

  var squareNumber = function (x)
  {
    var square = x*x;
    var result = "The result of squaring the number " + x + " is " + square + ".";
    console.log(result);
    return square;

  };

var result1 = squareNumber(50);

console.log(" ");
console.log("2. Half Number");

  var halfNumber = function (y)
  {
    var half = y/2;
    var total = "Half of " + y + " is " + half;
    console.log(total);
    return half;
  };

  var result2 = halfNumber(result1);

console.log(" ");
console.log("3. Area of Circle");

  var areaOfCircle = function (radius)
  {
    var circle = Math.PI * radius * radius;
    var c =circle.toFixed(2);
    console.log("The area of the circle with radius of " + radius + " is " + c + "cm2.");
    return circle;
  };

  var result3 = areaOfCircle (result2);

console.log(" ");
console.log("3. Percentage");
  var percentOf = function (num1, num2)
  {
    var percentage = Math.ceil((num1/num2)*100);
    var twoDecimal = num2.toFixed(2);
    console.log(num1 + " is " + percentage + "% of " + twoDecimal + ".");
    return percentage;
  };

var result4 = percentOf (result2,result3);





// console.log("Part Two");
// console.log(" ");
//
// var number = function(x)
// {
//   var num1 = x/2;
//   var num2 = Math.pow(num1,2);
//   var num3 = Math.PI * num2 * num2;
//   var num4 = (num2/num3)*100;
// };

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
