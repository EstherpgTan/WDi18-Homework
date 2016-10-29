/*
Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

var rectangle = {
  length: 4,
  width: 4,
  isSquare: function(){
    var result;
    if (this.length === this.width){
      result = true;
      console.log("The rectangle is a square");
    } else {
      result = false;
      console.log("The rectangle is not a square");
    }
    return result;
  },
  area:function (){
    var area = this.length * this.width;
    console.log("The area is: ",area);
    return area;
  },
  perimeter: function(){
    var perimeter = 2*this.length + 2 * this.width;
    console.log("The perimeter is",perimeter);
    return perimeter;
  }
};

/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var triangle = {
  sideA: 2,
  sideB: 3,
  sideC: 4,
  isEquilateral:function(){
    result;
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      console.log("The triangle is equilateral");
      result = true;
      return result;
    } else {
      console.log("The triangle is not equilateral");
      result = false;
      return result;
    }
  },
  isIsosceles: function(){

    if ((this.sideA === this.sideB && this.sideA !== this.sideC) ||
    (this.sideA !== this.sideB && this.sideB === this.sideC)){
      console.log("The triangle is Isosceles");
    } else{
      console.log("The triangle is not Isosceles");
    };
  },
  area: function(){
    var s = (this.sideA + this.sideB + this.sideC) / 2;
    areaTriangle = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    console.log("The area is",areaTriangle);
    return areaTriangle;
  },
  isObtuse: function(){
    SquareSideA = this.sideA * this.sideA;
    SquareSideB = this.sideB * this.sideB;
    SquareSideC = this.sideC * this.sideC;
    SquareSideAB = SquareSideA + SquareSideB;
    SquareSideBC = SquareSideB + SquareSideC;
    SquareSideAC = SquareSideA + SquareSideC;
    if ((SquareSideAB < SquareSideC) || (SquareSideBC < SquareSideA) || (SquareSideAC < SquareSideB)){
      console.log("The triangle is obtuse");
    } else{
      console.log("The triangle is not obtuse");
    }
  }
};



/*
The Cash Register

Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

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
cashRegister(cartForParty)); // 60.55
*/
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var cashRegister = function(inputObject){
  var totalCost = 0;
  for (item in inputObject){
    totalCost = totalCost + Number(  inputObject[item]  );
  };
  console.log("The total cost is:",totalCost);
}

cashRegister(cartForParty);



/*
Credit Card Validation

You're starting your own credit card business. You've come up with a new way to
validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' }
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules,
and what are some numbers that pass or fail? Ideas: check expiration date!
Check out the Luhn Algorithm for inspiration.
*/

var validCreditCard = function (){
  
}
