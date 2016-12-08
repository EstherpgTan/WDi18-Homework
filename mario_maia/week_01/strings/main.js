console.log("Strings");


// Dr Evil:
// Create a function called DrEvil.
// It should take a single argument, an amount, and return ' dollars',
// except it will add '(pinky)' at the end if the amount is 1 million.
// For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function ( dollar ) {
  if ( dollar === 1000000 ) {
    console.log( dollar + " dollars 🤘");
  } else {
    console.log( dollar + " dollars ");
  }
}
drEvil(1000000);


// MixUp:
// Create a function called mixUp.
// It should take in two strings, and return the concatenation of
// the two strings (separated by a space) slicing out and swapping the
// first 2 characters of each. You can assume that the strings are at least 2 characters long.
// For example:
// mixUp('mix', pod'): 'pox mid'
// mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful

var mixUp = function ( a , b ) {
  var firstTwoCharA = a.slice( 0, 2 ); // returns the first 2 charcters of the word .. slice (begin , end ); being =0 is the start of the string up to 2 - two characters.... it is source.lenght - the number, if end is ommited then it slices until the end of the source
  var remainCharA = a.slice ( 2, a.length );
  var firstTwoCharB = b.slice( 0, 2); //
  var remainCharB = b.slice( 2, b.length ); // returns the characters in a string starting on position 2 and endign at the end of the string (=stringlength)
  var result = firstTwoCharB + remainCharA + " " + firstTwoCharA + remainCharB;
  console.log(result);
}
mixUp( 'dog' , 'dinner' );


// FixStart:
// Create a function called fixStart. It should take a single argument, a string, and return a version
// where all occurences of its first character have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

var fixStart = function ( character ) {
  var firstChar = character.slice(0,1) // extracts the first character of a string, startign at zero and extracting 1 character
  var re = new RegExp(firstChar, "g")
  var replaceChar = character.replace(re, "*");
  var final = re + replaceChar.substring(1, character.length);
  console.log(final);
}
fixStart("bubble");

// 'Verbing:
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.
// For example:
// verbing('swim'): 'swimming'
// verbing('swimming'): 'swimmingly'
// verbing('go'): 'go''

var verbing = function ( word ) {
  var wordLength = word.length;
  var wordLastThreeChar = word.slice( -3 ); // shows the last 3 characters of a string
  if ( wordLength >= 3 && wordLastThreeChar === "ing") {
      console.log( word + "ly" );
    }
  if ( wordLength >= 3 && wordLastThreeChar !== "ing" ){
        console.log( word + "ing" );
      }
  if ( wordLength < 3 ) {
        console.log( word );
  }
}
verbing( 'go' );


// Not Bad:
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// notBad('This dinner is not that bad!'): 'This dinner is good!'

// var noBad = function( sentence ) {
//   var findNot = sentence.indexOf('not');// checks where the word is in a string
//   var findBad = sentence.indexOf('bad');
//   if (findNot > 0 )
//
// }
