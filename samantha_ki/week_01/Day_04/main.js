// Geometry Function Lab
//
// Part 1, Rectangle - done
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
  length: 5,
  width: 4,
};

var isSquare = function(length, width) {
  if (length === width) {
    return "rectangle is a square";
  } else {
    return "rectangle is not a square";
  }
};

var squareTest = isSquare(rectangle.length, rectangle.width);
console.log(squareTest);

var area = function(length, width) {
  var rectangleArea = length * width;
  return rectangleArea;
};

var areaTest = area(rectangle.length, rectangle.width);
console.log(areaTest);

var perimeter = function(length, width) {
  var rectanglePerimter = 2 * length + 2 * width;
  return rectanglePerimter;
}

var perimeterTest = perimeter(rectangle.length, rectangle.width);
console.log(perimeterTest);

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not - done
// isIsosceles - Returns whether the triangle is isosceles or not - done
// area - Returns the area of the Triangle - kinda done
// isObtuse - Returns whether the triangle is obtuse or not - no idea
var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 3
};

console.log(triangle.sideA);
console.log(triangle.sideB);
console.log(triangle.sideC);

var isEquilateral = function(a, b, c) {
  if (a === b && b === c && a === c) {
    return "Triangle is equilateral";
  } else {
    return "Triangle is not equilateral"
  }
};

var equilateralCheck = isEquilateral(triangle.sideA, triangle.sideB, triangle.sideC);
console.log(equilateralCheck);

var isIsosceles = function(a, b, c) {
  if (a === b && b !== c || a !== b && b === c || a === c && a !== b) {
    return "Triangle is isoceles";
  } else {
    return "Triangle is not isoceles";
  }
};

var isocelesCheck = isIsosceles(triangle.sideA, triangle.sideB, triangle.sideC);
console.log(isocelesCheck);

// SAM NOTE: How the hell do you work out the area of a triangle without base x height? And the obtuse too?

var triangle2 = {
  base: 3,
  height: 4
};

var area = function (base, height) {
  triangleArea = base * height / 2;
  return triangleArea;
};

var findArea = area(triangle2.base, triangle2.height);
console.log(findArea);

var triangle2 = {
  base: 3,
  height: 4
};

// HALP T___T
// var isObtuse = function(base, height) {
//   var area = function (base, height) {
//     triangleArea = base * height / 2;
//     console.log(triangleArea);
//   if (triangleArea === ((Math.pow(height, base)* base)/ 2)) {
//     return "Triangle is obtuse";
//   } else {
//     return "Triangle is not obtuse";
//   }
// }
// };
//
// var triangleObtuse = isObtuse(triangle2.base, triangle2.height);
// console.log(triangleObtuse);


//  js-homework-5.md
// The Cash Register - done
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// var cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

shoppingCart = {
  hat: "1.25",
  cat: "2.25",
  bat: "2.98",
  mat: "0.1",
  vat: "61.73",
  rat: "32.03"
};

var convertPrice = function() {
  for (var key in shoppingCart) {
    var itemPrice = shoppingCart[key];
    var itemPriceNum = parseFloat(itemPrice);
    console.log(itemPriceNum);
    shoppingCart[key] = itemPriceNum;
  }
};

var cashRegister = function() {
  convertPrice();
  addPrices = shoppingCart.hat + shoppingCart.cat + shoppingCart.bat + shoppingCart.mat + shoppingCart.vat + shoppingCart.rat;
  return addPrices;
}

var checkOut = cashRegister();
console.log(checkOut);


//  js-homework-6.md
// Credit Card Validation - started looking at it
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
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// var validateCreditCard = function {
//   if (creditCardNumber matches ) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// var creditCardNumber must
//
// creditCardNumber.length === 16 X
// creditCardNumber must be numbers // how do we check this? must return true > 0 X
// creditCardNumber must have at least 2 different numbers // turn into string ?
// creditCardNumber final digit must be even // there are different ways to check this, i think
// creditCardNumber sum of digits must be > 16 X

// FIRST, REMOVE DASHES FROM string - SPLICE O
  // CHECK STRING LENGTH IS EQUAL TO 16, IF NOT REJECT str.length === 16 O
// SECOND, SEPARATE STRING - to do this use .split(" "); O
// THIRD, TURN STRING INTO NUMBERS - PARSE INT
  // CHECK ALL ARE NUMBERS, IF NOT REJECT O - NaN
    // CHECK SUM OF DIGITS > 16, IF NOT REJECT
    // CHECK LAST DIGIT IS EVEN, IF NOT REJECT
    // CHECK AT LEAST 2 NUMBERS, IF NOT REJECT
      // Set variable to first number in string (var firstNumber = array[0]);
      // FOR NUM IN NUMBER
        // If any number is not === firstNumber then it passes!
        // if NUM === firstNumber then var moreThanOneNumber = true;
      // After finishing FOR LOOP: check if any number has matched!
        // if ! moreThanOneNumber then return false



//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
// Raw
//  js-homework-bank.md
// JavaScript Bank - have yet to attempt
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Sam fat
// var bank = {
//   accounts: []
// };
//
// function addAccount(account) {
//   bank.accounts.push(account);
// };
//
// function sumAccounts() {
//   var total = 0;
//   for (var i = 0; i < bank.accounts.length; i++) {
//     total += bank.accounts[i];
//   }
//   return total;
// };

// var Bank = function(accounts) {
//   this.accounts = accounts;
// };
//
// Bank.prototype.addAccount = function(account) {
//   if (!this.accounts || !Array.isArray(this.accounts)) {
//     this.accounts = [];
//   }
//   return this.accounts.push(account);
// }
//
// Bank.prototype.sumAccounts = function() {
//   var total = 0;
//   if (this.accounts && Array.isArray(this.accounts)) {
//     total = this.accounts.reduce(function(a, memo) {
//       return a + memo;
//     }, 0);
//   }
//   return total;
// }
//
// bankInstance = new Bank([1,2,3]);

//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
