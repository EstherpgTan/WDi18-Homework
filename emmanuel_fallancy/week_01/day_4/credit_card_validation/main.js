// Emmanuel 27102016

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented
//   (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

// Assumption of credit card number in String

// Function validateCreditCard will return object type
var validateCreditCard = function ( creditCardNumber ) {

  var splitedCreditCardNum = creditCardNumber.split( "" );
  var rejoinedCreditCardNum = "";

  // Lets just remove the (-) and only check for digit matching
  for ( var i = 0; i < splitedCreditCardNum.length; i++ ) {
    if ( splitedCreditCardNum[ i ].match( /\d/ ) ) {
      rejoinedCreditCardNum += splitedCreditCardNum[ i ];
    }
  }

  // Immediately return false if the credit card number is less than 16
  if ( rejoinedCreditCardNum.length !== 16 ) {
    var errorMsg = "Not 16 digit";
    return { valid: false,
             number: creditCardNumber,
             error: errorMsg };
  }

  var resplitCreditCardNum = rejoinedCreditCardNum.split( "" );
  var firstNum = resplitCreditCardNum[0];
  var differences = 0;
  var lastdigit = resplitCreditCardNum[ resplitCreditCardNum.length - 1 ];
  var totaldigitsum = 0;

  // Check for total digits being sum should be more than 16
  for ( var i = 0; i < resplitCreditCardNum.length; i++) {
    var digit = parseInt( resplitCreditCardNum[ i ] );

    totaldigitsum += digit;
  }

  // Ideally, should be more than 16
  if ( totaldigitsum <= 16 ) {
    var errorMsg = "Total sum of all digits less than 16";
    return { valid: false,
             number: creditCardNumber,
             error: errorMsg };
  }

  // Check for the last digit if it is an even digit. Otherwise, not valid.
  if ( lastdigit % 2 !== 0 ) {
    var errorMsg = "Last digit is not even";
    return { valid: false,
             number: creditCardNumber,
             error: errorMsg };
  }

  // Get the digit representation differences in the credit card number
  for ( var i = 0; i < resplitCreditCardNum.length; i++ ) {
    if( resplitCreditCardNum[ i ] !== firstNum ) {
      differences++;
    }
  }

  // If no difference, then it is not valid.
  // Shall contain more than 2 different digits.
  if ( differences === 0 ) {
    var errorMsg = "Well, all digits are the same";
    return { valid: false,
             number: creditCardNumber,
             error: errorMsg };
  }

  // If all goes well, it will return true :)
  return { valid: true,
           number: creditCardNumber };
};

var cardNumber = "6666-6666-6666-6661";

console.log( validateCreditCard( cardNumber ) );
