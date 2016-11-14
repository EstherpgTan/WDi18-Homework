console.log("The Geometry Lab");

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
  length: 4,
  width: 3
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function ( sideA, sideB ) {
  if ( sideA % sideB === 0) {
    var squareTest = "the rectangle is indeed a square.";
  } else {
    var squareTest = "the rectangle is not a square.";
  }
  return squareTest;
}
console.log( isSquare( rectangle.length , rectangle.width ) );

// Calculate the area - Returns the area of the rectangle

var areaCalculation = function ( sideA, sideB) {
  var areaOutput = "The area of the rectangle is " + (sideA * sideB) + ".";
  return areaOutput;
}
console.log( areaCalculation( rectangle.length , rectangle.width ) );

// Calcualte the perimeter - Returns the perimeter of the rectangle
var perimeterCalculation = function ( sideA, sideB ) {
  var perimeterOutput = "The perimeter of the rectangle is " + ((2 * sideA) + (2 * sideB)) + ".";
  return perimeterOutput;
}
console.log( perimeterCalculation( rectangle.length, rectangle.width ) );


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideD: 3,
//   sideE: 4,
//   sideF: 4
// };

var triangle = {
  sideD: 3,
  sideE: 4,
  sideF: 4
};

// isEquilateral? Returns whether the triangle is equilateral or not
var isEquilateral = function ( x, y, z ) {
  if ( x === y && x === z) {
    equilateralResult = "The triangle is equilateral."
  } else {
    equilateralResult = "The triangle is not equilateral."
  }
  return equilateralResult;
}

console.log( isEquilateral( triangle.sideD, triangle.sideE, triangle.sideF ) );

// isIsosceles? Returns whether the triangle is isosceles or not
var isIsosceles = function ( x, y, z ) {
  if (  x !== y && x !== z ) {
    if ( y !== z ) {
    isoscelesResult = "The triangle is not isosceles."
  } else {
    isoscelesResult = "The triangle is isosceles."
    }
  } else {
    isoscelesResult = "The triangle is isosceles."
  }
  return isoscelesResult;
}

console.log( isIsosceles( triangle.sideD, triangle.sideE, triangle.sideF ) );

// Calculate area - Returns the area of the Triangle
var areaTriangle = function ( x, y, z ) {
  var halfPerimeterCalc = ((x + y + z) / 2 ); // calculate half of perimeter of triangle
  var areaExp = halfPerimeterCalc * ( halfPerimeterCalc - x ) * ( halfPerimeterCalc - y ) * ( halfPerimeterCalc - z ); // calculates area exp to 2
  var areaTriangle = Math.sqrt(areaExp); //it does the square root of the previous calculation
  var areaOutput = "The area of the triangle is " + areaTriangle + ".";
  return areaOutput;
}

console.log( areaTriangle( triangle.sideD, triangle.sideE, triangle.sideF ) );


// isObtuse (one angle above 90 degrees)? - Returns whether the triangle is obtuse or not
var isObtuse = function ( x, y, z ) {
  if ( x === y || x === z ) {    // if 2 sides are equal, the triangle can not be obtuse
      var obtuseResult = "The triangle is not obtuse.";
    } else if ( y === z ) {
      var obtuseResult = "The triangle is not obtuse.";
  } else {
      var obtuseResult = "The triangle could be obtuse.";
  }
  return obtuseResult;
}

console.log( isObtuse( triangle.sideD, triangle.sideE, triangle.sideF ) );
