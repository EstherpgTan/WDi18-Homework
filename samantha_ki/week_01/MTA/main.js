// Creating Lines - forward direction
var lineNForward = [
  "Times Square",
  "34th",
  "28th",
  "23rd",
  "Union Square",
  "8th"
];

var lineLForward = [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
];

var line6Forward = [
  "Grand Central Terminal",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place"
];

var lineNBackward = lineNForward.slice();
lineNBackward.reverse();

var lineLBackward = lineLForward.slice();
lineLBackward.reverse();

var line6Backward = line6Forward.slice();
line6Backward.reverse();

// Test Case: If we want to travel from Times Square to Union Square
  // Log the line, the direction, each stop, and how many stops in total
    // You will want to write a function for totalStops
    // You will want to write a function to determine lineDirection
    // You will want to write a function (utilising a for loop) to print & return each stop

// This is the info we are requesting from the user
  // What do we do with this info - how are we storing it to use efficiently?
  // Answer: Write a function to request & store info first
  // Make sure user input aligns with array values - how to test for this?
    // Potential issue: Inconsistent upper/lowercasing
      // Solution: Translate all station input to lowercase - all array values will be referenced in lowercase - will we need to do the same for Line except uppercase?
        // NOTE: All array values will now have to be reconverted upon final printing of output to user
    // Potential issue: - value does not exist in array
      // NOTE: This will need to be addressed via a If/Else statement - if I get to the stage of building an input interface
    // How are we using it?


// Function to return user's input for Starting Line aka origin - making sure that startLine is returned as a string
var startLineRequest = function(start) {
  var startingLine = start.toString();
  console.log("Starting Line: " + startingLine);
  return startingLine;
};

// Function to return user's input for Starting Station
var startStationRequest = function(start) {
  var startingStation = start//.toLowerCase();
  console.log("Starting Station: " + startingStation);
  return startingStation;
};

// Function to return user's input for Ending Line aka destination - making sure that endLine is returned as a string
var endLineRequest = function(end) {
  var endingLine = end.toString();
  console.log("Ending Line: "+ endingLine);
  return endingLine;
};

// Function to return user's input for Ending Station aka destination
var endStationRequest = function(end) {
  var endingStation = end//.toLowerCase();
  console.log("Ending Station: " + endingStation);
  return endingStation;
};

          // TEST CASE
var startLine = startLineRequest("N");
var startStation = startStationRequest("Times Square");
var endLine = endLineRequest("6");
var endStation = endStationRequest("33rd");

// Now that we have the user's input - what do we do with it?
  // First, check whether the startLine === endLine
    // If yes, then move on to second step
    // If no, then send them to Transfer Point ie. Union Square
  // Secondly, we need to figure out the direction they are moving on the line
  // Thirdly, calculate the indexOf startStation & endStation to
    // Store number of stops between the two
    // Print each stop between the two
  // Fourth, test to see whether current location === end location
    // If yes, then return finalTotalStops (final number of total stops) & end
    // If no, then... return to step 1

// DETERMINING LINE TRAVEL DIRECTION
  // First, check the startLine and startStation
              // TRANSFERRING

  if (startLine === endLine) {
    var transfer = false;
    var currentLine = startLine;
  } else {
    var transfer = true;
    var currentLine = startLine;
};

// Using Transfer information, we create new variable nextStation to determine next step
if (transfer === true) {
  var nextStation = "Union Square";
  } else {
  var nextStation = endStation;
};

var transferComplete = function() {
  if (currentLine === endLine) {
    console.log("You have reached your destination");
  } else{
  console.log("Transfer at Union Square from " + currentLine + " to " + endLine + ".");
  currentLine = endLine;
  }
};

// Getting from one point to another... PT 1
  // CHECKING DIRECTIONAL FLOW...
  // Using indexOf to test and compare the direction of travel

if (currentLine === "N") {
  var testLine = lineNForward;
} else if (currentLine === "L") {
  var testLine = lineLForward;
} else {
  var testLine = line6Forward;
};

var startStationIndex = testLine.indexOf(startStation);
var nextStationIndex = testLine.indexOf(nextStation);

              // CHECKING LINE DIRECTION

if (startStationIndex < nextStationIndex) {
  var lineDirection = testLine;
} else {
  if (currentLine === "N") {
    var lineDirection = lineNBackward;
  } else if (currentLine === "L") {
    var lineDirection = lineLBackward;
  } else {
    var lineDirection = line6Backward;
  };
};

var nextLine = lineDirection;

startStationIndex = nextLine.indexOf(startStation);
nextStationIndex = nextLine.indexOf(nextStation);


                // CALCULATING & PRINTING STOPS
// Now you know which way you are going, you can calculate and print out how many stops to the next destination - use a for loop

  // How many stops?
var numberOfStops = nextStationIndex - startStationIndex;
var numberOfStopsLeg1 = numberOfStops;

var stopsLog = [];

// logging the stops
for (i = startStationIndex; i <= nextStationIndex; i++) {
  stopsLog.push(nextLine[i]);
};

  // NOTE: at some point, you need to come back and for loop tripStops[i] for trips with multiple lines/legs

var tripStops = stopsLog.join(", ");

console.log("You must travel through the following stops on the " + currentLine + " : " + tripStops);

transferComplete();


              // TESTING IF WE NEED TO RUN AGAIN

if (currentLine === endLine && nextStation === endStation) {
  var totalStops = numberOfStopsLeg1;
  console.log("Total Stops: " + totalStops);

} else if (currentLine === endLine) {
    transfer = false;
    startStation = nextStation;
    nextStation = endStation;
  // SECOND LEG OF TRIP

      // Getting from one point to another... PT 1
        // CHECKING DIRECTIONAL FLOW...
        // Using indexOf to test and compare the direction of travel

      if (currentLine === "N") {
        var testLine = lineNForward;
      } else if (currentLine === "L") {
        var testLine = lineLForward;
      } else {
        var testLine = line6Forward;
      };

      var startStationIndex = testLine.indexOf(startStation);
      var nextStationIndex = testLine.indexOf(nextStation);

                    // CHECKING LINE DIRECTION

      if (startStationIndex < nextStationIndex) {
        var lineDirection = testLine;
      } else {
        if (currentLine === "N") {
          var lineDirection = lineNBackward;
        } else if (currentLine === "L") {
          var lineDirection = lineLBackward;
        } else {
          var lineDirection = line6Backward;
        };
      };

      var nextLine = lineDirection;

      startStationIndex = nextLine.indexOf(startStation);
      nextStationIndex = nextLine.indexOf(nextStation);


                      // CALCULATING & PRINTING STOPS
      // Now you know which way you are going, you can calculate and print out how many stops to the next destination - use a for loop

        // How many stops?
      var numberOfStops = nextStationIndex - startStationIndex;
      var numberOfStopsLeg2 = numberOfStops;

      var stopsLog = [];

      // logging the stops
      for (i = startStationIndex; i <= nextStationIndex; i++) {
        stopsLog.push(nextLine[i]);
      };
        // NOTE: at some point, you need to come back and for loop tripStops[i] for trips with multiple lines/legs

      var tripStops = stopsLog.join(", ");

      console.log("Your journey continues through the following stops on the " + currentLine + " : " + tripStops);

      var totalStops = numberOfStopsLeg1 + numberOfStopsLeg2;
      console.log("Total Stops: " + totalStops);

} else {
  // they need to transfer again - go back to transfer step
  console.log("Sam hasn't done this yet, and doesn't need to, but wanted to keep it here just in case she has time to investigate");
};
