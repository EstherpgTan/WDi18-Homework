console.log("day4hw");

// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 2,
  width: 4,
  displaySquare: function () {
  if (rectangle.length === rectangle.width) {
    return "is square";
  } else {
      return "isn't square";
  }
},
  displayArea: function() {
    var area = rectangle.length * rectangle.width;
    return area;
  },
  displayPerimeter: function() {
    var perimeter = (rectangle.length * 2) + (rectangle.width * 2);
    return perimeter
  }
}

var allTogether = "This rectangle " + rectangle.displaySquare() + ", its's area is " + rectangle.displayArea() + " and its perimeter is " + rectangle.displayPerimeter() + "."
console.log(allTogether);


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not


var triangle = {
  sideA: 2,
  sideB: 3,
  sideC: 4,
  displayEq: function() {
  if ((triangle.sideA && triangle.sideB === triangle.sideC)) {
      return "is an Equilateral";
  } else {
      return "is not an Equilateral";
  }
},
  displayIso: function() {
    if ((triangle.sideA === triangle.sideB) && (triangle.sideB !== triangle.sideC)) {
        return "is an Isosceles";
    } else if ((triangle.sideB === triangle.sideC) && (triangle.sideC !== triangle.sideA)) {
        return "is an Isosceles";
    } else if ((triangle.sideC === triangle.sideA) && (triangle.sideA !== triangle.sideB)) {
        return "is an Isosceles";
    } else {
      return "is not an Isosceles";
    }
},
  displayObtuse: function () {
    if ((triangle.sideA !== triangle.sideB) && (triangle.sideB !== triangle.sideC)){
        return "is kind of Obtuse";
    } else {
        return "is not Obtuse";
    }
  }
}

var together = "This triangle " + triangle.displayEq() + ", " + triangle.displayIso() + ", " + triangle.displayObtuse() + ".";

console.log(together);
