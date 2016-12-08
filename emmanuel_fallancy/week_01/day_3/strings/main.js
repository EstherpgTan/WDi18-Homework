// Emmanuel 26102016

// DrEvil
// It should take a single argument, an amount, and return ' dollars',
// except it will add '(pinky)' at the end if the amount is 1 million.
// Function: DrEvil
// @param: amount (Number)
// @output: DrEvil(10): 10 dollars
// @output: DrEvil(1000000): 1000000 dollars (pinky)
var drEvil = function( amount ) {
  var messageOutput = "";
  if( amount === 1000000 ) {
    messageOutput = String( amount ) + " dollars (pinky)";
  }
  else {
    messageOutput = String( amount ) + " dollars"
  }

  return messageOutput;
};
console.log( "1. DrEvil" );
console.log( "drEvil( 100 ): ", drEvil( 100 ) );
console.log( "drEvil( 1000000)", drEvil( 1000000) );

// MixUp
// It should take in two strings, and return the concatenation of the two strings
//   (separated by a space) slicing out
//   and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long.
// Function: mixUp
// @param: firstWord (String)
// @param: secondWord (String)
// @output-> mixUp('mix', pod'): 'pox mid'
// @output-> mixUp('dog', 'dinner'): 'dig donner'
// Assumption: Each word will at least contain 2 letters
var mixUp = function( firstWord, secondWord ) {
  var mixFirstWord = secondWord.substring( 0, 2 ) + firstWord.substring( 2, firstWord.length );
  var mixSecondWord = firstWord.substring( 0, 2 ) + secondWord.substring( 2, secondWord.length );;
  var output = mixFirstWord + " " + mixSecondWord;

  return output;
};
console.log( "2. MixUp" );
console.log( "mixUp( 'dog', 'jinggo' ):", mixUp( "dog", "jinggo" ) );
console.log( "mixUp( 'mix', pod' ):", mixUp( "mix", "pod" ) );

// FixStart
// It should take a single argument, a string, and return a version
//     where all occurences of its first character have been replaced with '*',
//     except for the first character itself.
// Function: fixStart
// @param: word
// @output-> fixStart('babble'): 'ba**le'
// Assumption:  The string is at least one character long.
var fixStart = function( word ) {
  var manipulatedWord = "";
  var firstChar = word.charAt( 0 );

  // Loop throughout the letter and compare with the first character of the word
  for( var i = 0; i < word.length; i++ ) {
    // If the loop is not in first index, then loop to check and replace with *.
    // Otherwise, just remain the letter as it is.
    if( i > 0 && word.charAt(i) === firstChar ) {
      manipulatedWord += "*";
    }
    else {
      manipulatedWord += word.charAt( i );
    }
  }

  return manipulatedWord;
};

console.log( "3. FixStart" );
console.log( "fixStart( 'babble' ):", fixStart( "babble" ) );
console.log( "fixStart( 'aloha' ):", fixStart( "aloha" ) );

// Verbing
// If its length is at least 3,
//   it should add 'ing' to its end,
// If it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.
// Function: verbing
// @param: word
// @output -> verbing('swim'): 'swimming'
// @output ->  verbing('swimming'): 'swimmingly'
// @output ->  verbing('go'): 'go'
var verbing = function( word ) {
  var output = "";

  if( word.length > 2 ) {
    if( word.substring( word.length - 3, word.length ) === "ing" ) {
      output = word + "ly";
      return output;
    }
    else {
      output = word + "ing";
      return output;
    }
  }

  // If string length less than 3, return the word
  return word;
};

console.log( "4. Verbing" );
console.log( "verbing( 'swim' ):", verbing( "swim" ) );
console.log( "verbing( 'swimming' ):", verbing( "swimming" ) );
console.log( "verbing( 'go' ):", verbing( "go" ) );

// NotBad
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not',
//   then it should replace the whole 'not'...'bad' substring with 'good'
//   and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all),
//   just return the original sentence.
// Function: notBad
// @param: sentence (String)
// @output -> notBad('This dinner is not that bad!'): 'This dinner is good!'
// @output -> notBad('This movie is not so bad!'): 'This movie is good!'
// @output -> notBad('This dinner is bad!'): 'This dinner is bad!'
var notBad = function( sentence ) {
  var positionOfNot = sentence.indexOf( "not" );
  var positionOfBad = sentence.indexOf( "bad" );
  var manipulatedSentence = "";

  // This is to check for distinct 'not'
  if( sentence.charAt( positionOfNot + 3 ).match( /[a-z]/i )
      || sentence.charAt( positionOfNot - 1 ).match( /[a-z]/i ) ) {
    positionOfNot = -1;
  }

  // This is to check for distinct 'bad'
  if( sentence.charAt( positionOfBad + 3 ).match( /[a-z]/i )
      || sentence.charAt( positionOfBad - 1 ).match( /[a-z]/i ) ) {
    positionOfBad = -1;
  }

  if( positionOfNot !== -1
      && positionOfBad !== -1
      && positionOfNot < positionOfBad ) {

    manipulatedSentence = sentence.substring( 0, positionOfNot ) + "good!"
  }
  else {
    manipulatedSentence = sentence;
  }

  return manipulatedSentence;
};

console.log( "5. NotBad");
console.log( "notBad( 'This dinner is not that bad!'):", notBad( "This dinner is not that bad!" ) );
console.log( "notBad( 'This movie is not so bad!' ):", notBad( "This movie is not so bad!" ) );
console.log( "notBad( 'This dinner is bad!' ):", notBad( "This dinner is bad!" ) );
