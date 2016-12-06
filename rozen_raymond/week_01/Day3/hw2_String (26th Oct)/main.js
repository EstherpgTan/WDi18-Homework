// DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

console.log("1. DrEvil");

    var DrEvil = function(amount)
    {
      if(amount === 1000000)
      {
        console.log("DrEvil (1000000): " + amount + " dollars (pinky)");
      }
      else {
        console.log("DrEvil (" + amount +"): " + amount + " dollars");
      }
    };

    DrEvil (10);
    DrEvil(1000000);

console.log(" ");
console.log("2. MixUp");

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (x,y)
{
    if (x.length >=2 && y.length >=2)
      {
        var letter1 = x.charAt(1);
        var letter2 = y.charAt(1);
        var newX = x.replace(x.charAt(1),letter2);
        var newY = y.replace(y.charAt(1),letter1);

        console.log(newY + " " + newX);
      }

      else {
        {
          console.log("Please enter two words with at least 2 letters");
        }
      }
};

var newLetter = mixUp("Rozen", "Raymond");

console.log(" ");
console.log("3. FixStart");

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'


var fixStart = function(word1)
{
  var firstLetter = word1.charAt(0);
  var newWord = "";
  for (var i = 0; i <=word1.length; i++)
  {
    if (i > 0 && word1.charAt(i) === firstLetter)
    {
      newWord = newWord + "*";
    }
    else
    {
        newWord = newWord + word1.charAt(i);
    }
  }
  return newWord;
}

console.log(fixStart ("bobby"));


// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

console.log("");
console.log("4. Verbing");
var verbing = function(verb)
{
  var newVerb = "";
  var substring = "ing";
  if (verb.length >=3 && verb.indexOf(substring) === -1)
  {
    newVerb = verb + "ing";
    console.log("verbing (" + verb + "): " + "'" + newVerb + "'");
  }
  else if (verb.length>=3 && verb.indexOf(substring) !== -1)
  {
    newVerb = verb +"ly";
    console.log("verbing (" + verb + "): " + "'" + newVerb + "'");
  }
  else {
    {
      newVerb = verb;
      console.log("verbing (" + verb + "): " + "'" + newVerb + "'");
    }
  }
};

verbing ("swim");
verbing ("swimming");
verbing ("go");


// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


console.log("");
console.log("5. Not Bad");

var notBad = function (bad)
{
  var substring1 = "not";
  var substring2 = "bad";

  var firstWord = bad.indexOf(substring1);
  var secondWord = bad.indexOf(substring2);

//debugger;
  if (firstWord !== -1 && secondWord !== -1 && secondWord > firstWord)
  { var x = secondWord;
    var y = bad.length;
    var newWord =bad.slice(0,firstWord+3);
    var newWord2 = bad.slice(secondWord, bad.length);
    console.log("notBad(" + "'" + bad + " '): '" + newWord + " " + newWord2 + "'");

  }

  else {
    console.log("notBad('" + bad + " '): '" + bad + "'"  );
  }

};

notBad ("The dinner is not that bad");
notBad("The dinner is not so bad");
notBad("The dinner is bad");
