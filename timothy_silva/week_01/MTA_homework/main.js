//Subway line homework

var subway = { //Define Subway Object
 N:["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
 L:["8th", "6th", "Union Square", "3rd", "1st"],
 6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var goForwards = function(line, stationIndex, destinationIndex){
  var numStops = 0;
  var trip = [];
  for(; stationIndex <= destinationIndex; stationIndex++) { //loops forward
    numStops++;
    trip.push(line[stationIndex]);
  };
  console.log(trip.join(", "));
  return numStops;
};

var goBackwards = function(line, stationIndex, destinationIndex){
  var numStops = 0;
  var trip = [];
  for(;stationIndex >= destinationIndex; stationIndex--){//loops backwards
    numStops ++;
    trip.push(line[stationIndex]);
   };
   console.log(trip.join(", "));
   return numStops;
};

var changeAtUnion = function(line, endIndex){
  var startIndex = line.indexOf("Union Square");// assigns index of Union square on line
  var stationIndex = 0;
  var numStops =0;
  console.log("Changing lines at Union Square and continuing through:" );
  if (startIndex < endIndex){  // this calculates the stop before or after Union Square so it is not logged twice
     stationIndex = startIndex+1;  //stop after Union
     numStops = goForwards(line, stationIndex, endIndex);
  }else{
    stationIndex = startIndex-1; //stop before Union
    numStops = goBackwards(line, stationIndex, endIndex);
  };
 return numStops;
};

var startTrip = function(line1, station1, line2, station2){
  var firstLine = subway[line1]; //array of line
  var secondLine = subway[line2]; //array of line
  var startIndex = firstLine.indexOf(station1); //this gives index number of station1
  var endIndex = secondLine.indexOf(station2); //this gives index station of station2
  var unionSqIndex1 = firstLine.indexOf("Union Square"); //this gives index of Union square for first line
  var line1Stops = 0;
  var line2Stops = 0;
  var totalStops = 0;
  console.log("You are on "+line1+" Line and travelling through the following stops:");

  if (line1 !== line2 && startIndex < unionSqIndex1){
     line1Stops = goForwards(firstLine, startIndex, unionSqIndex1);
     line2Stops = changeAtUnion(secondLine, endIndex);
     totalStops = line1Stops+line2Stops;
  }else if(line1 !== line2 && startIndex > unionSqIndex1){
     line1Stops = goBackwards(firstLine, startIndex, unionSqIndex1);
     line2Stops = changeAtUnion(secondLine, endIndex);
     totalStops = line1Stops+line2Stops;
  }else if(startIndex < endIndex){
    totalStops = goForwards(firstLine, startIndex, endIndex);
  }else{
    totalStops = goBackwards(firstLine, startIndex, endIndex);
  };
 console.log("Total stops for trip is "+totalStops);
};

var tripValid = function(line1, station1, line2, station2){
 if( station1 === "Union Square" && station2 === "Union Square"){//if both stations Union Square trip is invalid
   console.log("You have entered Union Square for both start and destination");
   return false;
 }else if (line1 === line2 && station1 === station2){//if both station and line are the same trip is invalid
   console.log("You have entered both lines and stations the same");
   return false;
 }else { //all other trips are valid
   console.log("Starting trip ....");
   return true;
 }
};

var checkForStations = function(line1, station1, line2, station2){//checks stations in line
  var result1 = subway[line1].indexOf(station1);// assigns index
  var result2 = subway[line2].indexOf(station2);
  if (result1 >= 0 && result2 >= 0){ // a failing result would be -1
      return true;
     }else{
   console.log("Please check your station is on the correct line.");
   return false;
  };
};

var checkLinesExist = function(line1, line2){//checks if lines exists in the subway
  if(subway.hasOwnProperty(line1) && subway.hasOwnProperty(line2)){
    return true;
   }else{
    console.log("Please check you have entered a right line.");
    return false;
  }
};

var planTrip = function(line1, station1, line2, station2){
  if ( checkLinesExist(line1, line2) ){
    if ( checkForStations(line1, station1, line2, station2) ){
      if ( tripValid(line1, station1, line2, station2) ){
           startTrip(line1, station1, line2, station2); //need to check lines are not the same
      };
    };
  };
};




//TEST CASES ALL PASS - probably could have been tested better with TDD / Jasmine.
console.log("**should ERROR if line doesn't exist -- ('N', '8th', 'Wrong Station', '8th')");
planTrip("N", "8th", "Wrong Station", "8th");

console.log("\n**should ERROR if station is not on the line - ('N', 'not in line', '6', '8th')  ");
planTrip("N", "not in line", "6", "8th");

console.log("\n**should ERROR if both stations are Union Square -- ('N', 'Union Square', '6', 'Union Square')");
planTrip("N", "Union Square", "6", "Union Square");

console.log("\n**should ERROR if both stations and both lines are the same -- ('N', '34th', 'N', '34th')");
planTrip("N", "34th", "N", "34th");

console.log("\n--> should go forwards on same line --> ('L', '8th', 'L', '1st')");
planTrip("L", "8th", "L", "1st");

console.log("\n<-- should go backwards on same line <-- ('6', Astor Place', '6', 'Grand Central')");
planTrip("6", "Astor Place", "6", "Grand Central");

console.log("\n-->> should go forward on different lines -->> ('6', 'Grand Central', 'N', '8th')");
planTrip("6", "Grand Central", "N", "8th");

console.log("\n<<-- should go backwards on different lines <<-- ('L', '1st', '6', 'Grand Central')");
planTrip("L", "1st", "6", "Grand Central");

console.log("\n--> should go forwards on first line and backwards on second line <-- ('N', 'Times Square', 'L', '8th')");
planTrip("N", "Times Square", "L", "8th");

console.log("\n<-- should go backwards on first line and forwards on second line -->('L', '3rd', 'N', '8th')");
planTrip("L", "3rd", "N", "8th");






