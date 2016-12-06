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
    var result;
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
    }
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
  for (var item in inputObject){
    totalCost = totalCost + Number(  inputObject[item]  );
  }
  console.log("The total cost is:",totalCost);
};

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

var validCreditCard = function (inputNumber){
  var isValid = true;                 // by default, isVaid = true
  var creditNumber = inputNumber;     // string

  //    check if the length of the input string is 19 (16 numbers, 3 dashes)
  if ( creditNumber.length !== 19 ){
    isValid = false;
    console.log("Numbers must be 16 digits");
  }

  //    check if numbers are in groups of 4 digits seperated by dash
  if ( creditNumber[4] !== "-" || creditNumber[9] !== "-" || creditNumber[14] !== '-' ){
    isValid = false;
    console.log("Numbers must be groups of 4");
  }

  //    check if last digit is odd
  if ( creditNumber.slice(-1) % 2 !==0 ) {
    isValid = false;
    console.log("The last digit must be even");
  }

  //  to check sum, we remove dash from input string and then convert it to array then to number then add
  var creditNumberNoDash = creditNumber.replace(/-/g,''); // regular expression. g removes all instances in string
  var creditNumberArray = creditNumberNoDash.split("").map(Number); // .map(Number) coverts to number
  var sumCreditNumberNoDash = 0;
  for (i = 0 ; i < creditNumberArray.length ; i+=1){
    sumCreditNumberNoDash = sumCreditNumberNoDash + creditNumberArray[i];
  }
  if ( sumCreditNumberNoDash <= 16 ){
    isValid = false;
    console.log( "The sum of digits must be more than 16" );
  }
  // Check if the credit card number contains characters. If it contains only numbers, the below
  // regular expression should return true
  onlyNumbers = /^\d+$/.test(creditNumberNoDash);
  if ( onlyNumbers === false ){
    isValid = false;
    console.log("The input must only contain numbers");
  }


  return isValid;
};
validCreditCard('1111-2222-3233-4444');


/*
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account at the bank
and add it to the array of accounts. There is no need to create additional functions
of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values
-- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows
that the methods do indeed work as expected: add some accounts, show the total balance,
make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/



/*
//  Constructor pattern to create object
var bankAccounts = [];
var Account = function(inputFirstName,inputLastName){
  this.currentBalance = 0;  // by default balance is zero
  this.firstName = inputFirstName;
  this.lastLast = inputLastName;
  this.deposit = function (amountIn){
    this.currentBalance += amountIn;
    console.log("Deposited:",amountIn);
    return this.currentBalance;
  };
  this.withdraw = function(amountOut){
    this.currentBalance -= amountOut;
    console.log("Withdrawn:",amountOut);
    return this.currentBalance;
  }
  bankAccounts.push(this);
  return this;
};

var steveAccount = new Account("Steve","Liu")
*/

var bankAccounts = [];
var totalAmountStoredInBank = 0;

// Factory pattern to make object
var AccountFactory = function( inputFirst, inputLast ){
  accountObject = {
    firstName:inputFirst,
    lastName:inputLast,
    currentBalance:0,
    deposit:function( amountIn ){
      this.currentBalance += amountIn;
      console.log( "Deposited:", amountIn );
      return this.currentBalance;
    },
    withdraw:function( amountOut ){
      if ( this.currentBalance  <  amountOut ){  // check if withdraw amount is more than balance
        console.log( "Can not withdraw, balance not enough!" );
        return; // break out of the function
      }
      this.currentBalance -= amountOut;
      console.log( "Withdrawn:", amountOut );
      return this.currentBalance;
    },
  };
  bankAccounts.push( accountObject ); // add the new object to the acount array

  return accountObject;
};

// a for loop to sum the balance in every account
var totalAmountStoredInBank = 0;
for ( i = 0 ; i < bankAccounts.length ; i += 1){
  totalAmountStoredInBank += bankAccounts[i]["currentBalance"];
}
console.log( "The total money stored in this banks is:", totalAmountStoredInBank );
