console.log("============== Credit Card Validation ===========");

// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard
// that returns true or false
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented
// (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
//
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
//
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
//
// Hint:
// Remove the dashed from the input string before checking if the input credit
// card number is valid.
//
// Bonus:
// Return an object indicating whether the credit card is valid,
// and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}
////////////////////////////////////////////////
function ifAllNotTheSame (xlist) {
  for (i = 0; i < xlist.length; i += 1) {
    if (xlist[0] !== xlist[i]) {
      return true;
    }
  }
  return false;
}
/////////////////////////////////////////////////
function sumOfAll (xlist) {
  var sum =  0;
  for (i = 0; i < xlist.length; i += 1) {
    sum = sum + xlist[i];
  }
  return sum; 
}
/////////////////////////////////////////////////


function validateCreditCard(input) {
  var numList = [];  // convert string to a list of numbers

  for (i = 0; i < input.length; i += 1) {

    var num = parseInt(input[i]); //<--- If the first character cannot be converted
                                  // to a number, parseInt() returns NaN.
    if (Number.isInteger(num)) {  // if is not returns false..
      numList.push(num);
    }
  }
  console.log(numList);

  if (numList.length === 16) {
    if (isEven(numList[numList.length -1]) === true) {
      if (ifAllNotTheSame(numList) === true) {
        if (sumOfAll(numList) > 16) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1111-1111-1111-1110"));
console.log(validateCreditCard("6666-6666-6666-6661"));
