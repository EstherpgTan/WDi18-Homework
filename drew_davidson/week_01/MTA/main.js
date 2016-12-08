console.log("MTA - Working single train-line only - Forward and backward - not printing stops in a sentence - using consloe.log and not return function");


// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// HINTS
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
//////////////////////////////////////////////////////////////////////
// // NLINE
// //Stops covered forward
// for (var n = lines.nLine.indexOf("N 34th") + 1; n <= lines.nLine.indexOf("N 8th"); n+=1) {
//   var currentNStop = lines.nLine[n];
//   console.log(currentNStop)
// }
//
// //Stops covered reverse
// for (var n = lines.nLine.indexOf("N 8th") - 1; n >= lines.nLine.indexOf("N 34th"); n-=1) {
//   var currentNStop = lines.nLine[n];
//   console.log(currentNStop)
// }
//
// //Stops covered forward
//
// //Amount
//   var stopNum1 = lines.nLine.indexOf("N Union Square") + 1;
//   var stopNum2 = lines.nLine.indexOf("N 34th") + 1;
//   var howManyStops = stopNum1 - stopNum2;
//   var howManyStopsPos = Math.abs(howManyStops);
//   console.log(howManyStopsPos);
// //Amount of Stops
// // for (var n = lines.nLine.indexOf("N 28th") + 1; n < lines.nLine.indexOf("N Union Square"); n+=1) {
// //   console.log(n - 1 + " stops in total")
// // }
// /////////////////////////////////////////////////////////

var lines = {
  nLine: ["N Times Square", "N 34th", "N 28th", "N 23rd", "N Union Square", "N 8th"],
  lLine: ["L 8th", "L 6th", "L Union Square", "L 3rd", "L 1st"],
  sixLine: ["6 Grand Central", "6 33rd", "6 28th", "6 23rd", "6 Union Square", "6 Astor Place"]
}


var planTrip = function(startLine, startStop, endLine, endStop) {

if (startStop === endStop) {
  console.log("Walk you lazy bum.");
}

  else if (startLine === "N") {
  var stopNum1 = lines.nLine.indexOf(startStop) + 1;
  var stopNum2 = lines.nLine.indexOf(endStop) + 1;
  var howManyStops = stopNum1 - stopNum2;
  var howManyStopsPos = Math.abs(howManyStops);
  console.log("You must travel " + howManyStopsPos + " stops.");
    if (lines.nLine.indexOf(startStop) < lines.nLine.indexOf(endStop)) {
    for (var n = lines.nLine.indexOf(startStop) + 1; n <= lines.nLine.indexOf(endStop); n+=1) {
    var currentNStop = lines.nLine[n];
    console.log(currentNStop);
  }
}   else if (lines.nLine.indexOf(startStop) > lines.nLine.indexOf(endStop)) {
    for (var n = lines.nLine.indexOf(startStop) - 1; n >= lines.nLine.indexOf(endStop); n-=1) {
    var currentNStop = lines.nLine[n];
    console.log(currentNStop)
  }
}
} else if (startLine === "L") {
  var stopNum1 = lines.lLine.indexOf(startStop) + 1;
  var stopNum2 = lines.lLine.indexOf(endStop) + 1;
  var howManyStops = stopNum1 - stopNum2;
  var howManyStopsPos = Math.abs(howManyStops);
  console.log("You must travel " + howManyStopsPos + " stops.");
    if (lines.lLine.indexOf(startStop) < lines.lLine.indexOf(endStop)) {
    for (var l = lines.lLine.indexOf(startStop) + 1; l <= lines.lLine.indexOf(endStop); l+=1) {
    var currentLStop = lines.lLine[l];
    console.log(currentLStop)
  }
}   else if (lines.lLine.indexOf(startStop) > lines.lLine.indexOf(endStop)) {
    for (var l = lines.lLine.indexOf(startStop) - 1; l >= lines.lLine.indexOf(endStop); l-=1) {
    var currentLStop = lines.lLine[l];
    console.log(currentLStop)
  }
}
} else if (startLine === "6") {
  var stopNum1 = lines.sixLine.indexOf(startStop) + 1;
  var stopNum2 = lines.sixLine.indexOf(endStop) + 1;
  var howManyStops = stopNum1 - stopNum2;
  var howManyStopsPos = Math.abs(howManyStops);
  console.log("You must travel " + howManyStopsPos + " stops.");
    if (lines.sixLine.indexOf(startStop) < lines.sixLine.indexOf(endStop)) {
    for (var s = lines.sixLine.indexOf(startStop) + 1; s <= lines.sixLine.indexOf(endStop); s+=1) {
      var currentSixStop = lines.sixLine[s];
      console.log(currentSixStop);
  }
}   else if (lines.sixLine.indexOf(startStop) > lines.sixLine.indexOf(endStop)) {
    for (var s = lines.sixLine.indexOf(startStop) - 1; s >= lines.sixLine.indexOf(endStop); s-=1) {
    var currentSixStop = lines.sixLine[s];
    console.log(currentSixStop)
  }
}
} else {
    console.log("Invalid Input");
  }
}

planTrip("N", "N 34th", "N", "N Union Square");
