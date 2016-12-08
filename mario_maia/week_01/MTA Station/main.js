// MTA Lab

// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.

// Activity:
//
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at
// and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points.
// (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
// so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make
// it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

 // how to move from one station to another

// structure of subway system in arrays
var subwayLine = [ "N", "L", "6" ];
var lineN = [ "Times Square", "34th", "28th", "Union Square", "8th"];
var lineL = [ "8th", "6th", "Union Square", "3rd", "1st"];
var line6 = [ "Grand Central", "33rd", "28th", "23th", "Union Square", "Aston Place"];

// number of stations on each line
var lineNNumberStations = lineN.length;
var lineLNumberStations = lineL.length;
var line6NumberStations = line6.length;

// for sanity check
//console.log( "Number of stations on line N: " + lineNNumberStations );
//console.log( "Number of stations on line L: " + lineLNumberStations );
//console.log( "Number of stations on line 6: " + line6NumberStations );

// Station where all 3 lines intersect
var lineNIntersection = lineN.indexOf["Union Square"]; // Index position of Union Square on line N
var lineLIntersection = lineL.indexOf["Union Square"]; // Index position of Union Square on line L
var line6Intersection = line6.indexOf["Union Square"]; // Index position of Union Square on line 6

// Trip: starting point
// Entering the name of station and subway line where the trip will start at
var startStation = prompt( "Let's start planning your journey. Please enter the station where you will start your trip: " );
var startLine = prompt( "Now enter the subway line where this station is: (eg. for line N enter N)" );

  // Identifying the position of the subway line and station within their respective arrays
  var lineStartPos = subwayLine.indexOf(startLine);    // Index of the line within the subwayLine array

    if ( startLine === "N") {                             // Index of the station within its own subwayLine array
      var stationStartPos = lineN.indexOf(startStation);
    } else if ( startLine === "L") {
      var stationStartPos = lineL.indexOf(startStation);
    } else if ( startLine === "6") {
      var stationStartPos = line6.indexOf(startStation);
    } else {
      var stationEndPos = "Non existent in this line.";
    }

// for sanity check
//console.log( "Index position of " + startStation + " is " + stationStartPos + " ." );
//console.log( "Index position of " + startLine + " is " + lineStartPos + " ." );

// Trip: ending point
// Entering the name of station and subway line where the trip will end
var endStation = prompt( "Please enter the station where your trip will end: ");
var endLine = prompt("Now enter the subway line where this station is: (eg. for line N enter N)");

  // Identifying the position of the subway line and station within their respective arrays
  var lineEndPos = subwayLine.indexOf(endLine);         // Index of the line within the subwayLine array

    if ( endLine === "N") {                             // Index of the station within its own subwayLine array
      var stationEndPos = lineN.indexOf(endStation);
    } else if ( endLine === "L") {
      var stationEndPos = lineL.indexOf(endStation);
    } else if ( endLine === "6") {
      var stationEndPos = line6.indexOf(endStation);
    } else {
      var stationEndPos = "non existent in this line.";
    }

//for sanity check
//console.log("Index position of " + endStation + " is " + stationEndPos + " .");
//console.log("Index position of " + endLine + " is " + lineEndPos + " .");


// Creating a route for a user travelling within the same subway line
if ( startLine === endLine ) {                              // both stations are in the same line
  if ( stationEndPos > stationStartPos ){                    // end station has a higher index than the start station
    var numberStops = ( stationEndPos - stationStartPos);
    var moveforward = true;
  } else {
    var numberStops = ( stationStartPos - stationEndPos);   // start station has a higher index than the end station
    var moveforward = false;
  }
  window.alert( "Trip plan: You are going from " + startStation + " station on line " + startLine + " to " + endStation + " station on line " + endLine + ". This route has " + numberStops + " stops including your final destination.");
};

// Creating a route for a user travelling across multiple subway lines
if ( startLine !== endLine ) {  // stations in different lines >> require crossing in Union Square
    if (startLine === "N") {
       if ( stationStartPos > lineN.indexOf("Union Square")) {   // starting station has a higher index than Union Square where you change lines
          var numberStopsStartLine = (stationStartPos - lineN.indexOf("Union Square")); //# stations from starting station to US, moving backwards
          var moveforward = false;
        } else {
          var numberStopsStartLine = (lineN.indexOf("Union Square") - stationStartPos); // number of stations from starting station to US, moving forward
          var moveforward = true;
        }
      } else if (startLine === "L") {
        if ( stationStartPos > lineL.indexOf("Union Square")) {   // start station has a higher index than Union Square where you change lines
           var numberStopsStartLine = (stationStartPos - lineL.indexOf("Union Square")); // number of stations from starting station to US, moving backwards
           var moveforward = false;
         } else {
           var numberStopsStartLine = (lineL.indexOf("Union Square") - stationStartPos); // number of stations from starting station to US, moving forward
           var moveforward = true;
         }
      }  else if (startLine === "6") {
        if ( stationStartPos > line6.indexOf("Union Square")) {   // start station has a higher index than  Union Square where you change lines
           var numberStopsStartLine = (stationStartPos - line6.indexOf("Union Square")); // number of stations from starting station to US, moving backwards
           var moveforward = false;
         } else {
           var numberStopsStartLine = (line6.indexOf("Union Square") - stationStartPos); // number of stations from starting station to US , moving forward
           var moveforward = true;
         }
      }
      // for sanity check >> console.log("Your trip will start at " + startStation + " station with " + numberStopsStartLine + " planned stop(s) on subway line " + startLine + ".");
    };

if ( startLine !== endLine ) {  // stations in different lines >> require crossing in Union Square
    if (endLine === "N") {
        if ( stationEndPos > lineN.indexOf("Union Square")) {   // final station has a higher index than Union Square where you change lines
            var numberStopsEndLine = (stationEndPos - lineN.indexOf("Union Square")); // number of stations from US to ending, moving backwards
            var moveforward = true;
        } else {
           var numberStopsEndLine = (lineN.indexOf("Union Square") - stationEndPos); // number of stations from US to final station, moving forward
           var moveforward = false;
            }
          } else if (endLine === "L") {
            if ( stationEndPos > lineL.indexOf("Union Square")) {   // final station has a higher index than Union Square where you change lines
               var numberStopsEndLine = (stationEndPos - lineL.indexOf("Union Square")); // number of stations from US to final station, moving backwards
               var moveforward = true;
             } else {
               var numberStopsEndLine = (lineL.indexOf("Union Square") - stationEndPos); // number of stations from US to final station, moving forward
               var moveforward = false;
             }
          }  else if (endLine === "6") {
            if ( stationEndPos > line6.indexOf("Union Square")) {   // final station has a higher index than  Union Square where you change lines
               var numberStopsEndLine = (stationEndPos - line6.indexOf("Union Square")); // number of stations from US to end station, moving backwards
               var moveforward = true;
             } else {
               var numberStopsEndLine = (line6.indexOf("Union Square") - stationEndPos); // number of stations from US to final station, moving forward
               var moveforward = false;
             }
          }
          // for sanity check >> console.log("At Union Square station, you will changing to subway line " + endLine + " where you will have " + numberStopsEndLine + " stops to reach your destination at " + endStation + " station.");
          window.alert( "Trip plan: You are going from " + startStation + " station on line " + startLine + " to " + endStation + " station on line " + endLine + ".  From " + startStation + " station you will have " + numberStopsStartLine + " planned stop(s) on line " + startLine + ". At Union Square station, you will change to subway line " + endLine + " where you will have " + numberStopsEndLine + " stop(s) to reach your destination at " + endStation + " station.");

        };

// Creating an array with the stations where the user will stop
var stationsInRoute = [];
stationsInRoute.unshift(startStation);

var linesInRoute = [];
linesInRoute.unshift(startLine);

// adding stations to route where the start and finish stations are on the same line
if ( startLine === endLine ) {
  if ( startLine === "N") {
    if (stationStartPos < stationEndPos ) {
      for ( var i = stationStartPos + 1; i <= stationEndPos; i +=1) {
            stationsInRoute.push(lineN[i]);
            linesInRoute.push("N");
      }
    } else {
      for ( var i = stationStartPos - 1; i >= stationEndPos; i -=1) {
            stationsInRoute.push(lineN[i]);
            linesInRoute.push("N");
      }
    }
  }  else if ( startLine === "L") {
    if (stationStartPos < stationEndPos ) {
      for ( var i = stationStartPos + 1; i <= stationEndPos; i +=1) {
            stationsInRoute.push(lineL[i]);
            linesInRoute.push("L");
      }
    } else {
      for ( var i = stationStartPos - 1; i >= stationEndPos; i -=1) {
            stationsInRoute.push(lineL[i]);
            linesInRoute.push("L");
      }
    }
  } else if ( startLine === "6") {
    if (stationStartPos < stationEndPos ) {
      for ( var i = stationStartPos + 1; i <= stationEndPos; i +=1) {
            stationsInRoute.push(line6[i]);
            linesInRoute.push("6");
      }
    } else {
      for ( var i = stationStartPos - 1; i >= stationEndPos; i -=1) {
            stationsInRoute.push(line6[i]);
            linesInRoute.push("6");
      }
    }
  }
  var stationsInRouteExclFirst = stationsInRoute.shift();
  stationsInRoute.toString();
  stationsInRouteExclFirst.toString();
  console.log (" All your stations are located on line " + startLine + ".");
  console.log (" Your trip will start at: " + startStation + " station.");
  console.log (" Your train will stop "+ (stationsInRoute.length) + " times at the following stations: " + stationsInRoute + ".");
  console.log (" Your trip will end at: " + stationsInRoute[stationsInRoute.length - 1] + " station.");

  window.alert ("Here is a summary of your itinerary. All your stations are located on line " + startLine + " so you will not be required to change trains. Your trip will start at " + startStation + " station. Your train will stop "+ (stationsInRoute.length) + " times at the following stations: " + stationsInRoute + ". Your trip will end at " + stationsInRoute[stationsInRoute.length - 1] + " station.");

};


// adding stations to route whereas the trip involves multiples lines
var stationsInRouteFirstLine = [];   // Create new array for the stations in the starting subway line
stationsInRouteFirstLine.unshift(startStation);

if ( startLine !== endLine ) {  // stations in different lines >> require crossing in Union Square
    if (startLine === "N") {
        if (stationStartPos < lineN.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationStartPos + 1; i <= lineN.indexOf("Union Square"); i += 1) {
            stationsInRouteFirstLine.push(lineN[i]);
          }
        } else {
          for ( var i = stationStartPos - 1; i >= lineN.indexOf("Union Square"); i -=1) {
              stationsInRouteFirstLine.push(lineN[i]);
        }
      }
    } else if (startLine === "L") {
        if (stationStartPos < lineL.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationStartPos + 1; i <= lineL.indexOf("Union Square"); i += 1) {
            stationsInRouteFirstLine.push(lineL[i]);
          }
        } else {
          for ( var i = stationStartPos - 1; i >= lineL.indexOf("Union Square"); i -=1) {
              stationsInRouteFirstLine.push(lineL[i]);
        }
      }
    }  else if (startLine === "6") {
        if (stationStartPos < line6.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationStartPos + 1; i <= line6.indexOf("Union Square"); i += 1) {
            stationsInRouteFirstLine.push(line6[i]);
          }
        } else {
          for ( var i = stationStartPos - 1; i >= line6.indexOf("Union Square"); i -=1) {
              stationsInRouteFirstLine.push(line6[i]);
          }
        }
    }

stationsInRouteFirstLine.shift();  // removing initial station and include in the array only the stops
stationsInRouteFirstLine.toString();
console.log (" Your trip will start at: " + startStation + " station on line " + startLine + ".");
console.log (" Your train will stop " + numberStopsStartLine + " time(s)at the following station(s): " + stationsInRouteFirstLine + " on line " + startLine + ".");
console.log (" Your trip requires you to change subway lines at Union Square from line " + startLine + " to line " + endLine + ".");

var stationsInRouteEndLine = [];   // Create new array for the stations in the final subway line
stationsInRouteEndLine.unshift(endStation);


if ( startLine !== endLine ) {  // stations in different lines >> require crossing in Union Square
    if (endLine === "N") {
        if (stationEndPos < lineN.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationEndPos + 1; i <= lineN.indexOf("Union Square"); i += 1) {
            stationsInRouteEndLine.unshift(lineN[i]);
          }
        } else {
          for ( var i = stationEndPos - 1; i >= lineN.indexOf("Union Square"); i -=1) {
              stationsInRouteEndLine.unshift(lineN[i]);
        }
      }
    } else if (endLine === "L") {
        if (stationEndPos < lineL.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationEndPos + 1; i <= lineL.indexOf("Union Square"); i += 1) {
            stationsInRouteEndLine.unshift(lineL[i]);
          }
        } else {
          for ( var i = stationEndPos - 1; i >= lineL.indexOf("Union Square"); i -=1) {
              stationsInRouteEndLine.unshift(lineL[i]);
        }
      }
    }  else if (endLine === "6") {
        if (stationEndPos < line6.indexOf("Union Square")) { // Union Square is the last stop within that initial subway line
          for ( var i = stationEndPos + 1; i <= line6.indexOf("Union Square"); i += 1) {
            stationsInRouteEndLine.unshift(line6[i]);
          }
        } else {
          for ( var i = stationEndPos - 1; i >= line6.indexOf("Union Square"); i -=1) {
              stationsInRouteEndLine.unshift(line6[i]);
          }
        }
    }

  stationsInRouteEndLine.shift();  // removing Union Square from string to show just the stations where the train will stop
  stationsInRouteEndLine.toString();

  console.log (" After changing to subway line " + endLine + " at Union Square, your train will stop " + numberStopsEndLine + " time(s) at the following station(s): " + stationsInRouteEndLine + ".");
  console.log (" Your trip will end at: " + stationsInRouteEndLine[stationsInRouteEndLine.length - 1] + " station.");
  }
  window.alert (" <<<<<<<  Here is a summary of your itinerary   >>>>>>>   Your trip will start at " + startStation + " station on line " + startLine + ". From there your train will stop " + (numberStopsStartLine) + " time(s) at the following station(s): " + stationsInRouteFirstLine + ". At Union Square you will change trains from line " + startLine + " to line " + endLine + ". From Union Square, your train will stop " + numberStopsEndLine + " time(s) at the following station(s): " + stationsInRouteEndLine + ". Your trip will end at " + stationsInRouteEndLine[stationsInRouteEndLine.length - 1] + " station.");


};
window.alert("Hope you have a great trip and thanks for using NYC Subway Planner.");
