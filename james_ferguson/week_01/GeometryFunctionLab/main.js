// PART 1: Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 45,
  width: 35
};
var isSquare = rectangle.length === rectangle.width;
// console.log("Is this rectangle a square: " + isSquare);
var area = rectangle.length * rectangle.width;
// console.log("The area of this rectangle is " + area);
var perimeter = (rectangle.length + rectangle.width) * 2;
console.log("This rectangle's perimeter is " + perimeter);


// PART 2: Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 4,
  sideB: 4,
  SideC: 4
};
var isEquilateral = triangle.sideA === triangle.sideB && triangle.sideB === triangle.SideC;
console.log("Is Equilateral");
var isIsosceles = triangle.sideA;
  if isIsosceles = triangle.sideB && !=== triangle.SideC;
  console.log("Is Isosceles");
  
