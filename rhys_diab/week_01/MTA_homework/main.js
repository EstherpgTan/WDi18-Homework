///URL file:///Users/rhysdiab/Documents/general_assembly/WDi18-Homework/rhys_diab/week_01/MTA_homework/index.html
/// MTA https://gist.github.com/wofockham/8ac3c1d747f345d89d3d

///Determine function for 1 line

var planTripLineL = function(stopOn, stopOff) {

///Create array with all stops on line L

var lineLStops = ["8th", "6th", "Union Square", "1st"];

///Assign stop number to stopOn and stopOff

var currentStopNumber = lineLStops.indexOf(stopOn) + 1;
var endStopNumber = lineLStops.indexOf(stopOff) + 1;

// Create variable for total number of stops on journey

var totalStops = endStopNumber - currentStopNumber;

// };
///End result - number of stops and order of stops passed through
//console.log( totalStops + firstStop + secondStop + thirdStop ect );

///Determine which direction the train is going

if ((lineLStops.indexOf(stopOff) > lineLStops.indexOf(stopOn) ) && (totalStops === 4 )) {

console.log("You must travel through " + totalStops + " stops total on the Nline. Starting at "
+ stopOn + " going to " + lineLStops[(lineLStops.indexOf(stopOn) + 1)] + " " +
lineLStops[(lineLStops.indexOf(stopOn) + 2)] + lineLStops[(lineLStops.indexOf(stopOff))]);

    // else if (lineLStops.indexOf(stopOff) > lineLStops.indexOf(stopOn) ) && (totalStops === 3 ) {
    //   //..
    // };
      // else { //2 stops
      //
      //   }


  };

///repeat above for if stopOn > stopOff going in the other direction


};

planTripLineL("8th", "1st");
