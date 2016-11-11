// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 5,
  width: 4,
  isSquare : function () {
    if ( this.length === this.width) {
      return  "rectangle is a square"
    } else  return "rectangle is not a square"
  }
};
var isSquare = function () {
  console.log(rectangle.isSquare);
};

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 4,
  sideB: 6,
  sideC: 4,
  isEquilateral : function() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return "trianle is Equilateral!"
    } else return "trianle is not Equilateral"
  },
  isIsosceles : function() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return "triangle is isIsosceles";
    } else return "triangle is not isIsosceles"
  },
  area : function() {
    var number = (this.sideA + this.sideB + this.sideC)/2;
    var area = (number*(number-this.sideA)*(number-this.sideB)*(number-this.sideC))/2;
    return area;
  },
  isObtuse : function() { //Therefore, an obtuse triangle satisfies one of a^2+b^2<c^2, b^2+c^2<a^2, or c^2+a^2<b^2.
    num1 = this.sideA ^ 2;
    num2 = this.sideB ^ 2;
    num3 = this.sideC ^ 2;
    if ((num1 + num2) < num3 || (num1 + num3) < num2 || (num2 + num3) < num1) {
      return "This is obtuse.";
    } else {
      return "This is not obtuse.";
    }
  }
};
var isEquilateral = function() {
  console.log(triangle.isEquilateral());
};
var isIsocsceles = function() {
  console.log(triangle.isIsocsceles());
};
var area = function() {
  console.log(triangle.area());
};
var isObtuse = function() {
  console.log(triangle.isObtuse());
};


// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};
var cashRegister = function (shopingCart) {
  var sum = 0;
  for (var key in shopingCart) {
    var price = shopingCart[key];
    sum += Number.parseFloat(price);
  };
  return sum;
  console.log(sum);
};
// Output
cashRegister(cartForParty); // 60.55

var cards = [];
var badData = function(num,result,reason,ccDate) {
  cards.push( {
  valid : result,
  number : num,
  result : reason,
  date : ccDate
  });
}
var data = function (num,result,ccDate) {
  cards.push( {
  valid : result,
  number : num,
  date : ccDate
  });
}

var currentDate = {
  month : "10",
  year : "2016",
  date : function() {
    return this.year + this.month;
  }
}; // Close objec

// var card = prompt("please enter a valid card number ####-####-####-####");
// var expDate = prompt("please enter your expiration date YYYY-MM");
var validateCreditCard = function (card, expDate) {
  var cardString = '';
  for ( i = 0 ; i < card.length ; i += 1){
    if (card.charAt(i) !== '=') {
      cardString = cardString + card.charAt(i);
    };
  }; //close loop
  var ccDate = '';
  for ( i = 0 ; i < expDate.length ; i += 1){
    if (expDate.charAt(i) !== '-') {
      ccDate = ccDate + expDate.charAt(i);
    };
  }; //close loop
  if ( isNaN(cardString) === true ) return badData(card,false,"must_only_have_numbers!",ccDate);
  // confirms the number contains integers only
  if ( cardString.length != 16) return badData(card,false,"must_have_16_digits!",ccDate);
  // check the number consists of 16 digits
  if ( isNaN(ccDate) === true ) return badData(card,false,"expiry_date_must_only_have_numbers!",ccDate);
  // confirms the number contains integers only
  if ( ccDate.length != 6) return badData(card,false,"must_enter YYYY-MM in numbers!",ccDate);
  // check the number consists of 6 digits
  if ( currentDate.date() > ccDate) return badData(card,false,"Card has EXPIRED!",ccDate);
  // var first = cardString.charAt(0);
  var isSame = 0;
  for ( i = 1 ; i < cardString.length ; i += 1) {
    if ( cardString.charCodeAt(0) != cardString.charCodeAt(i)) isSame += 1;  // Check for un-identical numbers
  };
  if (isSame === 0) return badData(card,false,"must_have_at_least_two_different_digits",ccDate); // if no un-identical numbers found, INVALID CARD
  if (Number.parseInt(cardString)%2 != 0) return badData(card,false,"last_digit_is_not_even!",ccDate);  // Check that the last digit is even..
  var total = 0;
  for ( i = 0 ; i < cardString.length ; i += 1){
    var value = Number.parseInt(cardString.charAt(i));
    total += value;
  };
  if ( total < 16 ) return badData(card,false,"total_of_digits_under_16!",expDate);
return data(card,true,ccDate)
};
console.clear();
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
var bank = [];
var addAccount = function (name, balance){
  var account = {}
  account.name = name;
  account.balance = balance;
  account.withdraw = function (amountToDraw) {
    if (this.balance-amountToDraw < 0) {
      amountToDraw = prompt("Insufficient funds! would you like to try another amount?");
      if (!amountToDraw) {
        return;
      };
    };
    this.balance -= amountToDraw;
    alert("You have succesfully withrew $" + amountToDraw + ", you have $" + this.balance + " left in your account.");
    return;
  };
  account.deposit = function (amountToDeposit) {
    this.balance = parseInt(this.balance) + parseInt(amountToDeposit);
    alert("You have succesfully deposited $" + amountToDeposit + " into your account,\n" + "Your new balance is $" + this.balance + ".")
    return;
  };
  bank.push(account);
  alert("Congratulations " + name + " your new account number is: " + ((bank.length)-1) + "\n and your remaining balance is: $" + balance + ".")
};
var totalInBank = function (bank) {
  var totalMonies = 0;
  for ( i = 0 ; i < bank.length ; i += 1) {
    totalMonies += bank[i].balance
  };
  return totalMonies;
};
var userResponse = function (user) {
  if (user.toLowerCase() === "withdraw" ) {
    var accNum = prompt("What is your account number?");
    if (!accNum || accNum >= bank.length) return alert("Must enter a valid account number!");
    var cash = prompt("How much would you like to withdraw?");
    bank[accNum].withdraw(cash);
  } else if (user.toLowerCase() === "deposit" ) {
    var accNum = prompt("What is your account number?");
    if (!accNum || accNum >= bank.length || accNum <   0) {
      return prompt("Must enter a valid account number!");
    };
    var cash = prompt("How much would you like to deposit?");
    bank[accNum].deposit(cash);
  } else if (user.toLowerCase() === "create account" ) {
    var name = prompt("Under what name would you like to open the account?");
    var cash = prompt("What would be your initial deposit?");
    if (cash < 0 ) return prompt("Can not create account in debt")
    addAccount(name,cash);
  } else if (user.toLowerCase() === "transfer" ) {
    var accOne = prompt("From which account would you like to transfer?");
    var accTwo = prompt("To which account?");
    var cash = prompt("How much to transfer?");
    bank[accOne].withdraw(cash);
    bank[accTwo].deposit(cash);
  } else prompt("That is not a valid option, please select from the menu!")
};

addAccount("ahi", 300);
addAccount("Groucho", 300);
addAccount("Harpo", 300);
addAccount("Zeppo", 300);
var user = prompt("What would you like to do?\n Withdraw.\n Deposit.\n Create Account.\n Transfer.")
while (user) {
  userResponse(user);
  user = prompt("What else would you like to do?\n Withdraw.\n Deposit.\n Create Account.\n Transfer.");
};

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips
// Don't overthink this. Shorter code is probably the answer.
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
