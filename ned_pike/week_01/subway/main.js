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


var lines = {

  Lline: ["8th", "6th", "union square", "3rd", "1st"],
  Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
  six_line:["grand central", "33rd", "29th", "union square", "astor place"]

}
var Nline = lines["Nline"]
var Lline = lines["Lline"]
var six_line = lines["six_line"]


function indexOfTrip(arr, stop) {
  var result = arr.indexOf(stop)
  return result
}


function backwardStops(endLine, endStation, startLine, startStation) {
  var startIndex = indexOfTrip(endLine, endStation)
  var endIndex = indexOfTrip(startLine, startStation)
  var myArr = []
  for (var i = startIndex; i >= endIndex; i--) {
    var message = startLine[i]
    myArr.push(message)
  }
  return myArr
}

function forwardStops(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation)
  var endIndex = indexOfTrip(endLine, endStation)
  var myArr = []
  for (var i = startIndex; i <= endIndex; i++) {
    // if (startLine[i] === "Union square")
    var message = startLine[i]
    myArr.push(message)
  }
  return myArr
}

function printStations(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation)
  var endIndex = indexOfTrip(endLine, endStation)
  if (startIndex < endIndex) {
    return forwardStops(startLine, startStation, endLine, endStation)
  }
  else if (endIndex < startIndex) {
    return backwardStops(startLine, startStation, endLine, endStation)
  }
  else {
    return "Thats not a proper Journey"
  }
}

function sortStations(startLine, startStation, endLine, endStation) {
  var startIndex = indexOfTrip(startLine, startStation)
  var endIndex = indexOfTrip(endLine, endStation)
  var startUnion = indexOfTrip(startLine, "union square")
  var endUnion = indexOfTrip(endLine, "union square")
  if (startLine.join("") === endLine.join("")) {
    return printStations(startLine, startStation, endLine, endStation)
  }
  // backward change
  else {
    if (startIndex > startUnion && endIndex < endUnion) {
      var newArr = startLine.slice(startUnion, startIndex + 1)
      newArr.pop();
      for (var i = endUnion; i >= endIndex; i-- ) {
        newArr.unshift(endLine[i])
      }
      return printStations(newArr, startStation, newArr, endStation)
    }
    // forward change
    else if (startIndex < startUnion && endIndex > endUnion) {
      var newArr = startLine.slice(startIndex, startUnion + 1)
      newArr.pop();
      for (var i = endUnion; i <= endIndex; i++) {
        newArr.push(endLine[i])
      }
        return printStations(newArr, startStation, newArr, endStation)
    }
    // backward loop
    else if (startIndex > startUnion && endIndex > endUnion) {
      var newArr = startLine.slice(startUnion, startIndex + 1)
      newArr.pop();
      for (var i = endUnion; i <= endIndex; i++) {
        newArr.unshift(endLine[i])
      }
      return printStations(newArr, startStation, newArr, endStation)
    }
    // Forward loop
    //
    else if (startIndex < startUnion && endIndex < endUnion) {
      return (forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ))
    }
  }
}


console.log(sortStations(six_line, "29th", Lline, "8th"));
console.log(sortStations(Nline, "34th", Lline, "8th"));
console.log(sortStations(six_line, "grand central", Nline, "23rd"));
console.log(sortStations( Lline, "8th", six_line, "grand central"));


function forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ) {
  var counter = 0
  var newArr = startLine.slice(startIndex, startUnion + 1)
  newArr.pop();
  var examArr = newArr.length
  for (var i = endUnion; i >= endIndex; i--) {
    newArr.push(endLine[i])
    counter += 1
  }

  var complete = printStations(newArr, startStation, newArr, endStation)
  var count1 = complete.length - counter
  var message = "You will get on at " + complete.slice(0,1)
  if (examArr > 1) {
    message += " You will stop at " + complete.slice(1, examArr)
  }
  message += " you will change at " + complete.slice(count1, count1 + 1)
  if (counter > 2) {
    message += " you will stop at " + complete.slice(count1 + 1, complete.length - 1)
  }
  message += " you will get off at " + complete.slice(complete.length - 1)
  message += " You will stop at a total of " + complete.length + " stops"
  return message
}
// Lline: ["8th", "6th", "union square", "3rd", "1st"],
// Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
// six_line:["grand central", "33rd", "29th", "union square", "astor place"]










// console.log(printStations(Nline, "astor place", Nline, "Times square"));
// console.log(backwardStops(Lline, "1st", Lline, "8th"));






//new version

lines2 = {
  Lline: [["8th", "6th", "union square"],["union square", "3rd", "1st"]],
  Nline: [["Times square", "34th", "29th", "23rd", "union square"],["union square", "astor place"]],
  six_line:[["azard central", "33rd", "29th", "union square"],["union square", "astor place"]]
}

// sort the users input
function sortedLines (line, station) {
  var first = lines2.Lline[0]
  var second = lines2.Lline[1]
  var third = lines2.Nline[0]
  var fourth = lines2.Nline[1]
  var fifth = lines2.six_line[0]
  var sixth = lines2.six_line[1]

  if (first.includes(station) && line === "Lline") {
    return lines2.Lline[0]
  }
  if (second.includes(station) && line === "Lline") {
    return lines2.Lline[1]
  }
  if (third.includes(station) && line === "Nline") {
    return lines2.Nline[0]
  }
  if (fourth.includes(station) && line === "Nline") {
    return lines2.Nline[1]
  }
  if (fifth.includes(station) && line === "six_line") {
    return lines2.Nline[0]
  }
  if (sixth.includes(station) && line === "six_line") {
    return lines2.Nline[1]
  }
  else {
    return "not a line"
  }
}




// step one find out if stop is on current line
// if yes simply print out the stops
//  if not pop the first array concat string and then print stops
function printStops(startLine, startStation, endLine, endStation) {
  var stationArr1 = sortedLines(startLine, startStation)
  var stationArr2 = sortedLines(endLine, endStation)
  if (stationArr1.includes(endStation) && stationArr2.includes(endStation)) {
    return forwardStops(stationArr1, startStation, stationArr2, endStation)
  }
  else {
    stationArr1.pop()
    var completeLine = stationArr1.concat(stationArr2)
    return forwardStops(completeLine, startStation, completeLine, endStation)
  }
}

// console.log(printStops("Lline", "8th", "Nline", "Times square" ));

// Testing the hard loops
testArr1 = [1,2,3,4]
testArr2 = [5,6,7,8]
function addLastTwo(arr1, arr2) {
  for (var i = 3; i > 1; i--) {
    arr1.push(arr2[i])
  }
  return arr1
}

function addFirstTwo(arr1, arr2) {
  for(var i = 0; i < 2; i++) {
    arr1.unshift(arr2[i])
  }
  return arr1
}
// console.log(testArr1.slice(2,4));
// console.log(addFirstTwo(testArr1, testArr2));
// console.log(addLastTwo(testArr1, testArr2));
// console.log(lines["Nline"].indexOf('union square'));
console.log(testArr1.slice(1,3));
console.log(testArr1);
// if (varline1[0].concat(varline2[1]).join("")) {}





// concat concat concat concat concat concat concat

// identify line function
// identify index of station

// compare two arrays
// sort join the ===





//
//
//
// function indexOfUnion(arr, stop) {
//   var result = arr.indexOf("union square")
//   return result
// }
//
// console.log(indexOfUnion(lines2["Lline"][0]));
