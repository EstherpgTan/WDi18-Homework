//
//     There are 3 subway lines:
//         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//         All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
// Hints:
//
//     Work out how you would do it on paper first! Then start to explain that process in Javascript.
//     Get the program to work for a single line before trying to tackle multiple lines.
//     Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
//     Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//     The key to the lab is finding the index positions of each stop. (hint: indexOf())
//     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

//
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// l line 8th to union square first 8th second 6 3rd union square
//
// var people = ["randy", "sam", "jerry", "ali", "rain"];

// check whether array invcludes element
// var res = people.indexOf("sdasda");
// returns -1
// var inArray = function() {
//   var result = people.indexOf("rain")
//   if (result > -1) {
//     return "in array"
//   }
//   else {
//     return "not in array"
//   }
// }

// start of function
// list array in object
var lines = {
  Lline: ["8th", "6th", "union square", "3rd", "1st"],
  Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
  six_line:["grand central", "33rd", "29th", "union square", "astor place"]
};
// convert internal arrays to vars for ease of access
var Nline = lines.Nline;
var Lline = lines.Lline;
var six_line = lines.six_line;
// find out the index of a stop
function indexOfTrip(arr, stop) {
  var result = arr.indexOf(stop);
  return result;
}
// function that goes forward on a single line by testing index
function forwardStops(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation);
  var endIndex = indexOfTrip(endLine, endStation);
  var myArr = [];
  for (var i = startIndex; i <= endIndex; i++) {
    // if (startLine[i] === "Union square")
    var message = startLine[i];
    myArr.push(message);
  }
  return myArr;
}
// function that goes backward on a single line by testing index
function backwardStops(endLine, endStation, startLine, startStation) {
  var startIndex = indexOfTrip(endLine, endStation);
  var endIndex = indexOfTrip(startLine, startStation);
  var myArr = [];
  for (var i = startIndex; i >= endIndex; i--) {
    var message = startLine[i];
    myArr.push(message);
  }
  return myArr;
}
// identifies by using the index of start and last stop whether to list forwards or backwards
function printStations(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation);
  var endIndex = indexOfTrip(endLine, endStation);
  if (startIndex < endIndex) {
    return forwardStops(startLine, startStation, endLine, endStation);
  }
  else if (endIndex < startIndex) {
    return backwardStops(startLine, startStation, endLine, endStation);
  }
  else {
    return "Thats not a proper Journey";
  }
}
// this is simply the message for a simple one line trip
function oneLine(startLine, startStation, endLine, endStation) {
  var complete = printStations(startLine, startStation, endLine, endStation);
  var message = "You will get on at " + complete.slice(0,1);
    message += " You will stop at " + complete.slice(1, complete.length - 1);
    message += " you will get off at " + complete.slice(complete.length - 1);
    message += " " + complete.length + " stops in total";
    return message;
}
// After seeing this code present in all complex lines I added it in to a function
// this determines the slice values by using the length of the three arrays (start, end and joined)
function finalMessage(newArr, startStation, endStation, examArr, counter) {
  var complete = printStations(newArr, startStation, newArr, endStation);
  var count1 = complete.length - counter;
  var message = "You will get on at " + complete.slice(0,1);
  if (examArr > 1) {
    message += " You will stop at " + complete.slice(1, examArr);
  }
  message += " you will change at " + complete.slice(count1, count1 + 1);
  if (counter > 2) {
    message += " you will stop at " + complete.slice(count1 + 1, complete.length - 1);
  }
  message += " you will get off at " + complete.slice(complete.length - 1);
  message += " " + complete.length + " stops in total";
  return message;
}
// I would have liked to refactor the next four but as they all vary slight it cannot be done
// this simply joins the arrays depending on the if statement to follow
function backSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
  var counter = 0;
  var newArr = startLine.slice(startUnion, startIndex + 1);
  newArr.shift();
  var examArr = newArr.length;
  for (var i = endUnion; i >= endIndex; i-- ) {
    newArr.unshift(endLine[i]);
    counter += 1;
  }
  return finalMessage(newArr, startStation, endStation, examArr, counter);
}

function forSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
  var counter = 0;
  var newArr = startLine.slice(startIndex, startUnion + 1);
  newArr.pop();
  var examArr = newArr.length;
  for (var y = endUnion; y <= endIndex; y++) {
    newArr.push(endLine[y]);
    counter += 1;
  }
  return finalMessage(newArr, startStation, endStation, examArr, counter);
}

function backLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
  var counter = 0;
  var newArr = startLine.slice(startUnion, startIndex + 1);
  newArr.shift();
  var examArr = newArr.length;
  for (var i = endUnion; i <= endIndex; i++) {
    newArr.unshift(endLine[i]);
    counter += 1;
  }
  return finalMessage(newArr, startStation, endStation, examArr, counter);
}

function forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ) {
  var counter = 0;
  var newArr = startLine.slice(startIndex, startUnion + 1);
  newArr.pop();
  var examArr = newArr.length;
  for (var i = endUnion; i >= endIndex; i--) {
    newArr.push(endLine[i]);
    counter += 1;
  }
  return finalMessage(newArr, startStation, endStation, examArr, counter);
}
// Using the index's of start, end and union square for both lines determine which if statement to follow
function sortStations(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation);
  var endIndex = indexOfTrip(endLine, endStation);
  var startUnion = indexOfTrip(startLine, "union square");
  var endUnion = indexOfTrip(endLine, "union square");
  // one line back or forth
  if (startLine.join("") === endLine.join("")) {
    return oneLine(startLine, startStation, endLine, endStation);
  }
  // backward change
  else {
    if (startIndex > startUnion && endIndex < endUnion) {
      return (backSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex));
    }
    // forward change
    else if (startIndex < startUnion && endIndex > endUnion) {
      return forSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex);
    }
    // backward loop
    else if (startIndex > startUnion && endIndex > endUnion) {
      return (backLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex));
    }
    // Forward loop
    else if (startIndex < startUnion && endIndex < endUnion) {
      return (forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ));
    }
  }
}

console.log(sortStations(Nline, "Times square", Nline, "8th"));
console.log(sortStations(Lline, "1st", six_line, "grand central")); //back switch
console.log(sortStations(Nline, "8th", Lline, "1st")); //back loop
console.log(sortStations(six_line, "grand central", Nline, "8th")); // for switch
console.log(sortStations( Lline, "8th", six_line, "grand central")); // for loop


// For references
// Lline: ["8th", "6th", "union square", "3rd", "1st"],
// Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
// six_line:["grand central", "33rd", "29th" ,"union square", "astor place"]

// end of function anythin after or before this is purely testing





//2nd version didnt work for lines that looped

lines2 = {
  Lline: [["8th", "6th", "union square"],["union square", "3rd", "1st"]],
  Nline: [["Times square", "34th", "29th", "23rd", "union square"],["union square", "astor place"]],
  six_line:[["azard central", "33rd", "29th", "union square"],["union square", "astor place"]]
};

// sort the users input
function sortedLines (line, station) {
  var first = lines2.Lline[0];
  var second = lines2.Lline[1];
  var third = lines2.Nline[0];
  var fourth = lines2.Nline[1];
  var fifth = lines2.six_line[0];
  var sixth = lines2.six_line[1];

  if (first.includes(station) && line === "Lline") {
    return lines2.Lline[0];
  }
  if (second.includes(station) && line === "Lline") {
    return lines2.Lline[1];
  }
  if (third.includes(station) && line === "Nline") {
    return lines2.Nline[0];
  }
  if (fourth.includes(station) && line === "Nline") {
    return lines2.Nline[1];
  }
  if (fifth.includes(station) && line === "six_line") {
    return lines2.Nline[0];
  }
  if (sixth.includes(station) && line === "six_line") {
    return lines2.Nline[1];
  }
  else {
    return "not a line";
  }
}

// step one find out if stop is on current line
// if yes simply print out the stops
//  if not pop the first array concat string and then print stops
function printStops(startLine, startStation, endLine, endStation) {
  var stationArr1 = sortedLines(startLine, startStation);
  var stationArr2 = sortedLines(endLine, endStation);
  if (stationArr1.includes(endStation) && stationArr2.includes(endStation)) {
    return forwardStops(stationArr1, startStation, stationArr2, endStation);
  }
  else {
    stationArr1.pop();
    var completeLine = stationArr1.concat(stationArr2);
    return forwardStops(completeLine, startStation, completeLine, endStation);
  }
}

// console.log(printStops("Lline", "8th", "Nline", "Times square" ));
// Testing the hard loops
testArr1 = [1,2,3,4];
testArr2 = [5,6,7,8];
function addLastTwo(arr1, arr2) {
  for (var i = 3; i > 1; i--) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

function addFirstTwo(arr1, arr2) {
  for(var i = 0; i < 2; i++) {
    arr1.unshift(arr2[i]);
  }
  return arr1;
}
// console.log(testArr1.slice(2,4));
// console.log(addFirstTwo(testArr1, testArr2));
// console.log(addLastTwo(testArr1, testArr2));
// console.log(lines["Nline"].indexOf('union square'));
// console.log(testArr1.slice(1,3));
// console.log(testArr1);
// if (varline1[0].concat(varline2[1]).join("")) {}

// concat concat concat concat concat concat concat or maybe not

// identify line function
// identify index of station

// compare two arrays
// sort join the ===
// function indexOfUnion(arr, stop) {
//   var result = arr.indexOf("union square")
//   return result
// }
//
// console.log(indexOfUnion(lines2["Lline"][0]));
