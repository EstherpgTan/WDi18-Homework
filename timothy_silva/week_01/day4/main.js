
// Geometry
// PART 1
// Given the following a rectangle object like the one below,
// write the following functions:

var rectangle = {
  length: 4,
  width:8
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function(rectangleIn){
  var length = rectangleIn.length;
  var width = rectangleIn.width;
  if (length === width){
    return "Sorry your rectangle is actually a square";
  }else{
    return "Yep, thats a rectangle alright";
  }
};
console.log(isSquare(rectangle));

// area - Returns the area of the rectangle
var area = function(rectangleIn){
  var areaOfRectangle  = rectangleIn.length*rectangleIn.width;
  var message = "The area of the rectangle is "+areaOfRectangle;
  return message;
};
console.log(area(rectangle));

// perimeter - Returns the perimeter of the rectangle
var perimeter = function(rectangleIn){
  var perimOfRectangle = 2*(rectangleIn.length+rectangleIn.width);
  return perimOfRectangle;
};
console.log("The perimeter of the rectangle is "+perimeter(rectangle));

//PART 2 TRIANGLE
// Given the following a triangle object like the one below,
// write the following functions:

var triangle = {
  sideA: 4,
  sideB: 2,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function(triangleIn){
  var x = triangleIn.sideA;
  var y = triangleIn.sideB;
  var z = triangleIn.sideC;
  if (x === y && y === z){
    return "Triangle is equalateral";
  }else{
    return "Triangle is not equalateral";
  }
};
console.log(isEquilateral(triangle));

// area - Returns the area of the Triangle
var areaTriangle = function(triangleIn){
   var x = triangleIn.sideA;
   var y = triangleIn.sideB;
   var z = triangleIn.sideC;
   var area = (x+y+z)/2;
   return area;
};
console.log("The area of the triangle is "+areaTriangle(triangle));

// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function(triangleIn){
   var x = triangleIn.sideA;
   var y = triangleIn.sideB;
   var z = triangleIn.sideC;
  if (x === y && y === z || x !== y && y !== z && x !== z){
      return ("Triangle is not Isosceles");
  }else{
     return ("Triangle is Isoceles");
  };
}
console.log(isIsosceles(triangle));

//isObtuse - Returns whether the triangle is obtuse or not
var isObtuse = function(triangleIn){
   var x = triangleIn.sideA;
   var y = triangleIn.sideB;
   var z = triangleIn.sideC;
   if (x == y && y !== z && x !== z){
    return "Triangle is obtuse";
  }else{
    return "Triangle is not obtuse";
  }
};
console.log(isObtuse(triangle));

//Shopping cart
//
//Creat afunction called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
//cashRegister(cartForParty)); // 60.55

var cashRegister = function(shoppingCart){
  var totalCost = 0;
  for (var key in shoppingCart){
  var itemCost = parseFloat(shoppingCart[key]);
  totalCost +=itemCost;
  }
  return totalCost;
};
  console.log("Total cost is: $"+cashRegister(cartForParty));

//CREDIT CARD
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards
// with a simple function called validateCreditCard that
// returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits
// represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

var creditCard = "1111-2222-3333-4444";

var cardChecker = function(cardNum){
  var cardInts;
  for (var i = 0; i < cardNum.length; i++) {
    if

  }


};

cardChecker(creditCard);
