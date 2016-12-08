console.log("====== Geometry Function Lab ========");
// Given the following a rectangle object like the one below,
// write the following functions:
// isSquare - Returns whether the rectangle is a square or not

var rectangle = {
  length: 4,
  width: 4
};

var rectangle2 = {
  length: 7,
  width: 3
};

function isSquare(x) {
  if (x["length"] === x["width"] ) {
    return true;
  } else {
    return false;
  }
}
console.log(isSquare(rectangle));
console.log(isSquare(rectangle2));


console.log("====== Rectangle ========");
// area - Returns the area of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var rectangle2 = {
  length: 7,
  width: 3
};

function areaRect(x) {
  var areaTotal = (x["length"] * x["width"]);
  return areaTotal;
}
console.log(areaRect(rectangle));
console.log(areaRect(rectangle2));


console.log("====== Rectangle ========");
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var rectangle2 = {
  length: 7,
  width: 3
};


function perimeter(x) {
  var result = (2 * (x["length"] + x["width"]));
  return result;
}
console.log(perimeter(rectangle));
console.log(perimeter(rectangle2));


console.log("====== Triangle ==========================");
// Given the following a triangle object like the one below,
// write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

function isEquilateral(t) {
  if (t.sideA === t.sideB && t.sideA === t.sideC) {
    console.log("The triangle is equilateral");
    return true;
  } else {
    console.log("The triangle is not equilateral.");
    return false;
  }
}
isEquilateral(triangle);


console.log("====== Triangle ==========================");
// isIsosceles - Returns whether the triangle is isosceles or not

function isIsosceles(t) {
  if (t.sideA === t.sideB || t.sideA === t.sideC || t.sideB === t.sideC) {
    console.log("The triangle is isosceles");
    return true;
  } else {
    console.log("The triangle is not isosceles.");
    return false;
  }
}
isIsosceles(triangle);

console.log("====== Triangle ==========================");
// area - Returns the area of the Triangle

function areaTr(t) {
  var perimeter = (t.sideA + t.sideB + t.sideC) / 2;
  console.log(perimeter);
  var area =  Math.sqrt(perimeter * ((perimeter - t.sideA) * (perimeter - t.sideB) * (perimeter - t.sideC)));
  return area;
}
console.log(areaTr(triangle));


console.log("====== Triangle ==========================");
// isObtuse - Returns whether the triangle is obtuse or not

//hehe
