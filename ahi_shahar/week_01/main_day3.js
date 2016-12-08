// HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK      HOME WORK

// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



var squareNumber = function (aNumber) {
  var square = Math.round(aNumber*aNumber*100)/100;
  console.log("the result of squaring the number " + aNumber + " is " + square + ".");
  return square;
};
var halfNumber = function (aNumber) {
  var halfNum = Math.round(aNumber/2*100)/100;
  console.log("the result of halving the number " + aNumber + " is " + halfNum + ".");
  return halfNum;
};
var precentOf = function (aNumber, bNumber) {
  var result = Math.round(aNumber / bNumber * 100 * 100)/100;
  console.log(aNumber + " is " + result + "% of " + bNumber + ".");
  return result;
};
var geometizer = function (radius) {
  var area = Math.round(Math.PI*(radius*radius)*100)/100;
  console.log("The area of the circle with radius of " + radius + " is " + area);
  return area;
};

var calculate = function (aNumber) {
  var stageTwo = squareNumber(halfNumber(aNumber));
  var area = geometizer(stageTwo);
  precentOf(area,stageTwo);
};


var drEvil = function (num) {
  if (num >= 1000000) {num = num + " dollars (pinky)"}
  else { num = num + " dollars"};
  console.log(num);
};

var mixUp = function (word1, word2) {
  var result1 = word2.charAt(0) + word2.charAt(1) + word1.substr(2);
  var result2 = word1.charAt(0) + word1.charAt(1) + word2.substr(2);
  console.log(result1 + " " + result2 );
};


var fixStart = function (word) {
  var firstLetter = word.charAt(0);
  var newWord = firstLetter;
  for (i = 1 ; i < word.length ; i++) {
    if (firstLetter === word.charAt(i)) newWord+="*";
    else newWord+=word.charAt(i);
  }
  console.log(newWord);
}

var verbing = function (word) {
  if (word.length < 3) return word;
  if (word === "sing" || word === "ring" || word === "bling" || word === "ding") {
    return word + "ingly"
  } else if (word.slice(-3) === "ing") {
    return word + "ly";
  } else {
    return word + "ing";
  };
};

var notBad = function(phrase) {
  var whereNot = phrase.indexOf("not"); //if there is "not", return its startin location, if there isn't, return -1
  var whereBad = phrase.indexOf("bad"); //if there is "bad", return its startin location, if there isn't, return -1
  if (whereNot == -1 || whereBad == -1 || whereNot > whereBad) {
    return phrase;
  } else {
    return (phrase.slice(0, whereNot) + "good" + phrase.slice(whereBad+3));
  };
};


// LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP EXERCISE          LOOP


// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
// console.log("Please enter 'oddReport(the starting number,the last number);' ");
var oddReport = function(startNum,endNum) {
  for (i = startNum ; i <=endNum ; i += 1) {
    if (i%2 === 0) {
      console.log(i + " is and even");
    } else {
    console.log(i + " is and odd");
  };
};
};


// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var mathTable = function () {
  var table;
  for (i = 0 ; i <= 10 ; i += 1) {
    for (x = 0 ; x <= 10 ; x += 1) {
      table = table + "  " + (i*x);
    };
    table = table + "\n";
  };
  console.log(table);
};

var simpleMathTable = function () {
  for (i=0 ; i <= 10 ; i++) {
    console.log(i + " * 9 = " + (i*9));
  };
};

// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var gradeAssign = function (grade) {
  if (grade >= 90) {
    console.log("you've got an A");
  } else if (grade >= 80) {
    console.log("you've got a B");
  } else if (grade >= 70) {
    console.log("you've got a C");
  } else if (grade >= 60) {
    console.log("you've got a D");
  } else if (grade >= 50) {
    console.log("you've got an E");
  } else console.log("you failed you little shit!");
};


// PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN CLASS    PRACTICE IN


// AGE CALCULATOR

// console.log("Please enter 'ageCalculator(the current year,your birth year);' ");
var ageCalculator = function(currentYear, birthYear) {
  var age;
  age = currentYear - birthYear; // input the current data into age
  console.log("You are either " + age + " or " + (age-1));
};

// FORTUNE TELLER

//console.log("Please enter 'fortuneTeller(\"your job\", \"your partner's name\", \"where you wish to live\", and how many kids you want);' ");
var fortuneTeller = function (kids,partner,loc,job) {
  console.log("You will be a " + job + " in " + loc + ", and married to " + partner + " with " + kids + " kids.");
}

// GEOMETIZER

// console.log("Please enter 'geometizer(the radius of the area you wish to check);' ");
// var geometizer = function (radius) {
//   var area = Math.PI*(radius*radius);
//   console.log("The area of the circle is " + area);
// }


// Lifetime Supply
// console.log("Please enter 'supplyCalculator(your current age, your maximum age, how many do you eat per day);' ");
 var supplyCalculator= function(currentAge,maxAge,perDay) {
   var daysLeft = (maxAge - currentAge)*365.2425;
   var totalNeed = Math.ceil(daysLeft*perDay); // calculate totalNeed from data
   console.log("You will need " + totalNeed + " to last you until the ripe age of " + maxAge);
 };


// TEMPERATURE CONVERTER
// console.log("please enter 'tempConvert(temp in celcius, temp in fahrenheit);'");
var tempConvert = function (tempC, tempF) {
    var celcToF = (tempC * 9 / 5 + 32); // convert Celcius to Fahrenheit
    var fahrToC = ((tempF - 32) / 5 * 9); // convert Fahrenheit to Celsius
  console.log(tempC + "°C is" + celcToF + "°F"); // __ °C is __ °F
  console.log(tempF + "°F is" + fahrToC + "°C"); // __ °F is __ °C
};
