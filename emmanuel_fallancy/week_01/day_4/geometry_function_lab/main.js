// Emmanuel 27102016 - Objects Homework
// Rectangle - Part 1

// Rectangle: object
var rectangle = {
  length: 4,
  width: 4
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function () {
  if ( rectangle.width === rectangle.length ) {
    return true;
  }
  else {
    return false;
  }
};

// area - Returns the area of the rectangle
var area = function () {
  return rectangle.length * rectangle.width;
};

// perimeter - Returns the perimeter of the rectangle
var perimeter = function () {
  // perimeter = 2 * ( length + width )
  return 2 * ( rectangle.length + rectangle.width );
};

console.log( "The rectangle is square:", isSquare() );
console.log( "The area of the rectangle is", area() );
console.log( "The perimeter of the rectangle is", perimeter() );

// Triangle - Part2
// Given Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function () {
  if ( triangle.sideA === triangle.sideB
       && triangle.sideA === triangle.sideC ) {
    return true;
  }
  else {
    return false;
  }
};

// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function () {
  if ( triangle.sideA === triangle.sideB
      || triangle.sideA === triangle.sideC ) {
    return true;
  }
  else if ( triangle.sideB === triangle.sideA
            || triangle.sideB === triangle.sideC ) {
    return true;
  }
  else {
    return false;
  }
};

// area - Returns the area of the Triangle
var area = function () {
  var areaResult = "";

  if ( isIsosceles() ) {
    var base = 0;
    var baseToComputeHeight = 0;
    var height = 0;
    var hypoSide = 0;
    var area = 0;

    // Get the odd side to be the base
    // Assign the hypotenuse
    if ( triangle.sideA !== triangle.sideB
         && triangle.sideA !== triangle.sideB ) {
      base = triangle.sideA;
      hypoSide = triangle.sideB;
    }
    else if ( triangle.sideB !== triangle.sideC
              && triangle.sideB !== triangle.sideA ) {
      base = triange.sideB;
      hypoSide = triangle.sideA;
    }
    else {
      base = triangle.sideC;
      hypoSide = triangle.sideB;
    }

    // Need this to get the height computation and ensure to get 90 degree side
    baseToComputeHeight = base / 2;
    height = Math.sqrt( Math.pow( baseToComputeHeight, 2 )
             + Math.pow( hypoSide, 2 ) );
    area = 0.5 * base * height;

    areaResult = "The area of triangle is " + String( area.toFixed( 2 ) );
  }
  else if ( isEquilateral() ) {
    var base = triangle.sideA;
    var baseToComputeHeight = base / 2;
    var hypoSide = triangle.sideA;
    var height = Math.sqrt( Math.pow( baseToComputeHeight, 2 )
                 + Math.pow( hypoSide, 2 ) );
    var area = 0.5 * base * height;

    areaResult = "The area of triangle is " + String( area.toFixed( 2 ) );
  }
  else {
    areaResult = "Dude, you need to provide me the height and base."
  }

  return areaResult;
};

// isObtuse - Returns whether the triangle is obtuse or not
var isObtuse = function () {
   // Dude, I suck at high school math!
   var isObtuseTriangle = false;

   // If the triangle is not isosceles or equilateral
   if ( !isIsosceles() && !isEquilateral() ) {
     var longestSide = Math.max( triangle.sideA,
                                 triangle.sideB,
                                 triangle.sideC );

     // If the longestSide matches the first side of the triangle
     if ( longestSide === triangle.sideA ) {

       var otherSide = Math.pow( triangle.sideB, 2 ) + Math.pow( triangle.sideC, 2 );
       if ( Math.pow( longestSide, 2 ) > Math.pow( otherSide, 2 ) ) {
        isObtuseTriangle = true;
       }
     }
     // If the longestSide matches the second side of the triangle
     else if ( longestSide === triangle.sideB ) {

       var otherSide = Math.pow( triangle.sideA, 2 ) + Math.pow( triangle.sideC, 2 );
       if ( Math.pow( longestSide, 2 ) > Math.pow( otherSide, 2 ) ) {
         isObtuseTriangle = true;
       }
     }
     // If the longestSide matches the third side of the triangle
     else if ( longestSide === triangle.sideC ) {

       var otherSide = Math.pow( triangle.sideA, 2 ) + Math.pow( triangle.sideB, 2 );
       if ( Math.pow( longestSide, 2 ) > Math.pow( otherSide, 2 ) ) {
         isObtuseTriangle = true;
       }
     }
   }

   return isObtuseTriangle;
};

console.log( "The triangle is equilateral:", isEquilateral() );
console.log( "The triangle is isosceles:", isIsosceles() );
console.log( area() );
console.log( "The triangle is an obtuse triangle:", isObtuse() );
