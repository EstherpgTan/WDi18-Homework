// 1. Geometric Function
  // Rectangle
  // Given the following a rectangle object like the one below, write the following functions:

  // isSquare - Returns whether the rectangle is a square or not
  // area - Returns the area of the rectangle
  // perimeter - Returns the perimeter of the rectangle
  // var rectangle = {
  //   length: 4,
  //   width: 4
  // };

console.log("1. Geometric Function");
console.log("Rectangle");

var rectangle = {
  length: 6,
  width: 4
};

console.log(rectangle);

var isSquare = function (l, w)
{
  if (l === w)
  {
    console.log("this is a square");
  }
  else {
    console.log("this is not a square");
  }
};

var area = function (l,w)
{
  var totalArea = l * w;
  console.log(totalArea);
};

var perimeter = function (l,w)
{
  var totalPerimeter = l*2 + w*2;
  console.log(totalPerimeter);
};

isSquare(rectangle.length , rectangle.width);
area(rectangle.length , rectangle.width);
perimeter(rectangle.length , rectangle.width);

// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

console.log("Triangle");

var triangle =
{
  sideA: 3
  , sideB: 4
  , sideC: 4
}

var isEquilateral = function (a,b,c)
{
  if (a === b && b === c)
  {
    console.log("The is an equilateral triangle");
    return true;
  }
  else {
    console.log("The is not an equilateral triangle");
    return false;
  }

};

var isIsosceles = function (a,b,c)
{
  if (a == b && b !== c)
  {
    console.log("This is an isosceles triangle");
    return true;
  }
  if (b === c && b !== c)
  {
    console.log("This is an isosceles triangle");
    return true;
  }
  if (a === c && c !== b)
  {
    console.log("This is an isosceles triangle");
    return true;
  }
  else {
    console.log("This is not an isosceles triangle");
    return true;
  }
};


var area = function (a,b,c)
{

};

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

console.log("");
console.log("2. The Cash Register");
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var cashRegister = function (x)
{
  var totalCheckOut = 0;
  for (var key in cartForParty)
  {
    var currentValue = cartForParty[key];
    var price = parseFloat(currentValue);
    totalCheckOut += price;
  }
  console.log(totalCheckOut);
  return totalCheckOut;
};

cashRegister(cartForParty); // 60.55


// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

console.clear();

//1. Remove dash

var validateCreditCard = function(input)
{
input = input.replace(/-/g, "");
console.log(input);

//2. covert input to set of array
var convertToArray = function(x)
{
  var splitInput = x.split('');
  var x = [splitInput];
  return x;
}

var newInput = convertToArray(input); //new account number store as array

console.log(newInput);

//3. check if there is any alphabet
var numberOrLetter = function (x)
{
  for (var i=0; i<x.length; i++)
  {
    if (x[i] === NaN)
    {
      console.log("Your account number is invalid, please try again");
      return false;
    }
  }

};

numberOrLetter (newInput);

//4. check if total sum > 16, end number ===even, total length;

var validLength = function (x)
{
  if (x.length>16)
  {
    return true;
  }
  else {
    console.log("Your account number length is invalid");
    return false;
  }
};

validLength(newInput);

var validEndNumber = function(x)
{
  if (x[x.length-1]%2 === 0)
  {
    return true;
  }
  else {
    console.log("Your account number end with odd number");
    return false;
  }
}
validEndNumber(newInput);

var total =0;
for (var i=0; i<newInput.length; i++)
{
  total += newInput[i];
}
var validSum = function (x)
  {
    if (total >= 16)
    {
      return true;
    }
    else {
      console.log("Your account number is invalid. Total sum less than 16");
      return false;
    }
  }
validSum(newInput);

var validNum = function(x){
  for (var i=0; i<x.length; i++)
  {
    if (x[i] !== x[0])
    {
      return true;
    }
  }
  return false;
};

validLength(newInput);


  if (validNum === true && numberOrLetter === true && validEndNumber ===true && validLength=== true && validSum ===true && validNum === true)
  {
    console.log("Your credit card with (" + input +") is valid.");
    return true;
  }
  else {
    {
      return false;
    }
  };

var accountNumber = "a923-3211-9c01-1112"; // enter account number

validateCreditCard(accountNumber);




// Javascript

// var account:
// {
//   name: ;
//   currentBalance: ;
//
// };
//
// var returnValues = function()
// {
//   //if there is any deposit / withdraw from account
// };
