//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var squareNumber = function(num){
  var result = num * num;
  console.log("The result of squaring the number " + num + " is " + result);
  return result;
}
// squareNumber(3)
var halfNumber = function(num){
  var result = num / 2;
  console.log("Half of "+ num + " is " + result);
}
// halfNumber(4)

var result  = Math.PI
