var reverseArr = function (myArray) {
  for (i = 0; i < myArray.length / 2 ; i++) { // '/2' to stop the function from going back and reversing itself
    var old = myArray[i]; // store the original data from location 'i'
    myArray[i] = myArray[myArray.length - 1 - i]; // store the data from the opposite side of the array into location 'i'
    myArray[myArray.length - 1 - i] = old; // put back the old data from location 'i' into the opposite side of the array
  };
  return myArray;
};
var lines = {
  N : {
    line : "N",
    stops : ["Times Square", "34th", "28th", "23rd North", "Union Square", "8th North"]
  },
  L : {
    line : "L",
    stops : ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  S : {
    line : "6",
    stops : ["Grand Central", "33rd", "28th St", "23rd", "Union Square", "Astor Place"]
  }
};
var checkChange = function (trip,tripEnd) {
  for (i = 0 ; i < trip.length ; i += 1) {
    for ( x = 0 ; x < tripEnd.length ; x += 1) {
      if (trip[i] === tripEnd[x]) {
        return trip[i];
      };
    };
  };
};
var planTrip = function (startPt, endPt) {
  if (startPt.valueOf() === endPt.valueOf()) { // meaning, is he an idiot and is already at his destination
    return prompt("You're already at your destination you fool.")
  };
  //find your lines
  for (var key in lines) {
    var  tempLn = lines[key].stops;
    for ( i = 0 ; i < tempLn.length ; i += 1 ) {
      if (tempLn[i] === startPt) {
        trip = tempLn;
        startLn = lines[key].line;
      };
      if (tempLn[i] === endPt) {
        tripEnd = tempLn;
        endLn = lines[key].line;
      };
    };
  };
  // check if the user needs to change lines if he doesn't, lets sum things up
  if (trip === tripEnd) {
    trip.pop();
    trip.shift();
    var bonVoyage = "You are traveling from " + startPt + " on line " + startLn + ".\n" +
    "Travel through " + trip.join(", ") + " all the way to " + endPt + ".\n" + (trip.length + 1) + " stops in total.";
    alert(bonVoyage);
    return;
  };
  // check connections
  var changePoint = checkChange(trip,tripEnd);
  // The next 2 conditions check the direction of travel and return the array facing the right way
  if ( tripEnd.indexOf(endPt) < tripEnd.indexOf(changePoint)) {
    tripEnd = reverseArr(tripEnd);
  };
  if (trip.indexOf(startPt) > trip.indexOf(changePoint)) {
    trip = reverseArr(trip);
  };
  trip = trip.slice( trip.indexOf( startPt ) , trip.indexOf( changePoint ) );
  tripEnd =  tripEnd.slice( tripEnd.indexOf( changePoint ) +1 ,tripEnd.indexOf( endPt ) );
  var totalStops = trip.length + tripEnd.length + 1;
  // var finalTrip = trip.concat(tripEnd); // not completely neccesary ATM as its just as easy to count 2 arrays, but for future use (if you'll want to connect two lines and find where they would meet another line)
  trip.shift();
  var bonVoyage = "You are traveling from " + startPt + " on line " + startLn + " continue through " + trip.join(", ") + " to " + changePoint + ",\n" +
   "Change lines at " + changePoint + ".\n" +
    "Take line " + endLn + " and continue through " + tripEnd.join(", ") + " all the way to " + endPt + ".\n" + totalStops + " stops in total.";
  alert(bonVoyage);
};
console.log("N, stops : Times Square, 34th, 28th, 23rd North, Union Square, 8th North");
console.log("L, stops : 8th, 6th, Union Square, 3rd, 1st");
console.log("6, stops : Grand Central, 33rd, 28th St, 23rd, Union Square, Astor Place");
// planTrip("Union Square", "8th")
planTrip(
  startPt = prompt("Where are you starting your trip?"),
  endPt = prompt("and where are you going to?")
);
