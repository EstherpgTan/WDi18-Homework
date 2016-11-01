// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

var lines = {
  nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
  sixLine: ["Grand Central", "33rd", "28TH", "23rd", "Union Square", "Astor Place"]
};
var planTrip = function(startLine, startStation, endLine, endStation){

  // SINGLE LINE TRIPS

  // Get the starting line from the lines object
  var startingLine = lines[startLine];

  // Get the starting station's index in the startingLine
  var startingStationIndex = startingLine.indexOf(startStation);
  console.log(startingStationIndex);

  // Get the ending station's index in the startingLine
  var endingStationIndex = startingLine.indexOf(endStation);
  console.log(endingStationIndex);
  // Push all the stations between the startingStationIndex and the endingStationIndex to a new array.
  var journey = [];
     journey = startingLine.slice(startingStationIndex, endingStationIndex)
     console.log(journey);  // Log out the array of stations

  // Log out a count of all the stops in the array
console.log(journey.length);
};

// move backwards along the line

if (endLine === startLine){
  
};

planTrip("nLine", "Times Square","nLine", "Union Square")





  // var startLineStations = []
  // for (var key in lines){
  //   if (startLine.codePointAt(0) == lines[key].codePointAt(0)) {
  //     startLineStations = lines.key;
  //     break;
  //   }
