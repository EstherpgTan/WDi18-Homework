/*
MTA Lab

Objectives:

Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:

Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

*/

var planTrip = function(lineC,stationC,lineD,stationD){
  var startLine = lineC;
  var startStation =stationC;
  var destinationLine =lineD;
  var destinationStation = stationD;

  // Define the 3 train lines
  var lineN = ["Times Square","34th","28th","23rd","Union Square","8th"];
  var lineL = ["8th","6th","Union Square","3rd","1st"];
  var line6 = ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"];


  // Define 2 variables which is an array of stops in the current and desination train line.
  var startLineArray;
  var destinationLineArray;

  //Assign the initial train line!
  switch (startLine) {
    case "N":
      startLineArray = lineN;
      break;
    case "L":
      startLineArray = lineL;
      break;
    default:
      startLineArray = line6;
  }

  //Assign the destination train line!
  switch (destinationLine) {
    case "N":
      destinationLineArray = lineN;
      break;
    case "L":
      destinationLineArray = lineL;
      break;
    default:
      destinationLineArray = line6;
  }


  // Check if the destination line is the same as starting line. Boolean true or false
  startSameDestination = (startLine === destinationLine);
  // define 2 variables for indexing
  var indexOfStart;
  var indexOfDestination;
  var indexOfUnionSquareStart;
  // Find the index of the start station and the index of the destination station,
  // and index of Union Square
  indexOfStart = startLineArray.indexOf(startStation);
  indexOfDestination = destinationLineArray.indexOf(destinationStation);

  // index of Union Square in the Start Line
  if (startLine === "N"){
    indexOfUnionSquareStart = 4;
  } else if (startLine === "L"){
    indexOfUnionSquareStart =2;
  } else {
    indexOfUnionSquareStart =4;
  }

  // index of Union Square in the Destination line
  if (destinationLine === "N"){
    indexOfUnionSquareDestination = 4;
  } else if (destinationLine === "L"){
    indexOfUnionSquareDestination =2;
  } else {
    indexOfUnionSquareDestination =4;
  }

  // Define route variable - this variable stores the route in an array
  var route = [];
  // If start line same as destination line, use for loop to find route
  if (startSameDestination){
    // inner for loop for same line
    if (indexOfStart < indexOfDestination){
      for (i=indexOfStart;i<=indexOfDestination;i+=1){
        route.push(startLineArray[i]);

      }
    } else {
      for (i=indexOfStart;i>=indexOfDestination;i-=1){
        route.push(startLineArray[i]);
      }
    }
  } else {    // if destination is on a different line, go to union square then change line
//debugger;
    // inner for loop for going from starting station to Union Square
    if(indexOfStart < indexOfUnionSquareStart){
      for (i = indexOfStart;i<=indexOfUnionSquareStart;i+=1){
        route.push(startLineArray[i]);
      }
    } else{
      for (i = indexOfStart;i>=indexOfUnionSquareStart;i-=1){
        route.push(startLineArray[i]);
      }
    }
    // inner for loop for going from Union Square to Destination
    if (indexOfDestination < indexOfUnionSquareDestination){
      for (i = indexOfUnionSquareDestination-1; i>=indexOfDestination;i-=1){
        route.push(destinationLineArray[i]);
      }
    } else {
        for (i = indexOfUnionSquareDestination+1;i<=indexOfDestination;i+=1){
          route.push(destinationLineArray[i]);
        }
      }
    }

  // we have a route array. Now its time to manipulate it for logging
  console.log("You are current at station:",route[0],"on line:",startLine);
  console.log("Your destination is station:",route[route.length - 1],"on line:",destinationLine);
  var routeMessage ="";

  // the message for changing lines is different to message for staying on same line.
  // use a if condition statement
  if (startSameDestination){
    for (i=1;i<=route.length-1;i+=1){
      routeMessage = routeMessage + ", " + route[i];
    }
    routeMessage = routeMessage.slice(1); // removes the comma at the first character of message string
    console.log("You must first travel through the following stops on line",startLine,":",routeMessage);
  } else {
    for (i=1;i<=route.indexOf("Union Square");i+=1){
      routeMessage = routeMessage + ", " + route[i];
    }
    routeMessage = routeMessage.slice(1);
    console.log("You must first travel through the following stops on line",startLine,":",routeMessage);
    console.log("Change at Union Square");
    routeMessage = ""; // reset route message
    for (i=route.indexOf("Union Square")+1 ; i<= route.length - 1; i+=1){
      routeMessage = routeMessage + ", " + route[i];
    }
    routeMessage = routeMessage.slice(1);
    console.log("Your journey continues through the following stops on line",destinationLine,":",routeMessage);
  }
  var numberOfStops =route.length - 2;
  console.log("Number of stops:",numberOfStops);

  return route; // return is route [stops] in an array
};

planTrip('N','Times Square','N','8th');
planTrip('N','8th','N','Times Square');
planTrip('6','Grand Central','N','34th');
planTrip('L','1st','6','28th');
