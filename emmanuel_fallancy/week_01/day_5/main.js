console.log( "The MTA Line" );

var lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var lineL = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var line6 = [ "Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place" ];

/*
  Main method to run the planning for the trip.
  Will return the direction as string.
  @param {String} originLine [Starting origin line]
  @param {String} originStation [Starting station in the origin line]
  @param {String} destinationLine [Ending destination line]
  @param {String} destinationStation [Ending station in destination line]
  @return {String}
 */
var planTrip = function ( originLine, originStation, destinationLine, destinationStation ) {

  // Lets just say that someone wanna mess around
  if( arguments.length !== 4 ) {
    return "Please enter valid input...";
  }

  var isSameLine = originLine === destinationLine;
  var msg = "";
  var totalStops = 0;
  var originStations = getStationsInLine( originLine ); // This will be in array
  var destinationStations = getStationsInLine( destinationLine ); // This will be in array

  // Get validation result for the line and station
  var validateOrigin = validateLineAndStation( originLine, originStation );
  var validateDestination = validateLineAndStation( destinationLine, destinationStation );

  // Check for same station
  var isTheSameStation = isSameStation( originLine, originStation, destinationLine, destinationStation );

  // This is used to validate the stations and line, and same destination with origin
  if ( validateOrigin.length > 0 ) {
    return validateOrigin;
  }
  else if ( validateDestination.length > 0 ) {
    return validateDestination;
  }
  else if ( isTheSameStation.length > 0 ) {
    return isTheSameStation;
  }


  // Variable for intersection station stop to identify to go forward or backward
  var intersectionStop = "Union Square";

  // Compare the line if the destination line is the same
  if ( isSameLine ) {
    // Get the station number
    var start = getStationNumber( originLine, originStation );
    var end = getStationNumber( destinationLine, destinationStation );
    var stationNames = "";
    var numberOfStops = 0;

    // Get the station names and number of stops
    stationNames = moveToDestination( start, end, originStations );
    numberOfStops = getNumberOfStopsInSingleLine( start, end );

    msg = singleLineMsgPrefix( originLine, stationNames, numberOfStops );

    return msg;
  }
  else {
    // Get the station number
    var stationsOrigin = "";
    var stationsDestination = "";
    var numberOfStops = 0;

    // Get the origin station number
    var startA = getStationNumber( originLine, originStation );
    var endA = getStationNumber( originLine, intersectionStop );

    // Get the destination station number
    var startB = getStationNumber( destinationLine, intersectionStop );
    var endB = getStationNumber( destinationLine, destinationStation );

    // Get the stations and total number of stops
    var stations = moveToDestinations( startA, endA, originStations, startB, endB, destinationStations );
    stationsOrigin = stations.origin;
    stationsDestination = stations.destination;
    numberOfStops = getNumberOfStopsInMultipleLine( startA, endA, startB, endB );

    return multipleLineMsgPrefix( originLine, stationsOrigin, destinationLine, stationsDestination, numberOfStops );
  }
};

/*
  Used to the index of the station or relatively, the position of the station.
  Will return the station index number. If not found, will return -1.
  @param {String} stationLine [The name of the line]
  @param {String} stationStop [The name of the station]
  @return {Number}
 */
var getStationNumber = function ( stationLine, stationStop ) {
  var stationNumber = -1;

  if ( stationLine === "N" ) {
    stationNumber = lineN.indexOf( stationStop );

    return stationNumber;
  }
  else if ( stationLine === "L" ) {
    stationNumber = lineL.indexOf( stationStop );

    return stationNumber;
  }
  else if ( stationLine === "6" ) {
    stationNumber = line6.indexOf( stationStop );

    return stationNumber;
  }

  return stationNumber;
};

/*
  Prefix for single line message.
  Overloading function as it is also being used in other function.
  @param {String} line [Name of the line]
  @param {String} stationNames [Name of the stations passed]
  @param {Number} totalStops [Total number of stops]
  @return {String}
 */
var singleLineMsgPrefix = function ( line, stationNames, totalStops ) {
  var msgPrefix = "You must travel through the following stop on "
                  + line
                  + " line: "
                  + stationNames
                  + ".";

  if ( arguments.length === 2 ) {
    return msgPrefix;
  }
  else if ( arguments.length === 3 ){
    msgPrefix = msgPrefix
              + "\n"
              + totalNumberOfStopsMsgPrefix( totalStops );
  }

  return msgPrefix;
};

/*
  Prefix for the multiple line message
  @param {String} lineA [Name of the first line]
  @param {String} stationNamesA [Name of the stations in first line]
  @param {String} lineB [Name of the second line]
  @param {String} stationNamesB [Name of the stations in second line]
  @param {Number} totalStops [Total number of stops throughout the journey]
  @return {String}
 */
var multipleLineMsgPrefix = function ( lineA, stationNamesA, lineB, stationNamesB, totalStops ) {
  var msgPrefix = singleLineMsgPrefix( lineA, stationNamesA );

  if ( stationNamesB.length > 0 ) {
    msgPrefix += "\n"
                  + "Change at Union Square.\n"
                  + "Your journey continues through the following stops: "
                  + stationNamesB
                  + ".";
  }

  msgPrefix += "\n"
               + totalNumberOfStopsMsgPrefix( totalStops );

  return msgPrefix;
};

/*
  Prefix for the number of stops.
  @param {Number} stops [Total number of stops]
  @return {String}
 */
var totalNumberOfStopsMsgPrefix = function ( stops ) {
  return String( stops ) + " stops in total.";
};

/*
  Return the stations in array form.
  If no line found based on the passing argument, then return empty array.
  @param {String} line [Name of the line passed in the argument]
  @return {Array}
 */
var getStationsInLine = function ( line ) {

  // Return the stations in array
  if ( line === "N" ) {
    return lineN;
  }
  else if ( line === "L" ) {
    return lineL;
  }
  else if ( line === "6" ) {
    return line6;
  }

  return [];
};

/*
  To simulate on moving forward in the line.
  Will return the stations passed from the starting point to ending point.
  @param {Number} start [Starting point]
  @param {Number} end   [Ending point]
  @param {Array} line   [The line]
  @return {String} [returns the stations passed]
 */
var moveForward = function ( start, end, line ) {
  var stations = [];

  for ( var i = start; i <= end; i++ ) {
    stations.push( line[ i ] );
  }

  return stations.join( ", " );
};

/*
  To simulate on moving backward in the line.
  Will return the stations passed from starting point to ending point.
  @param {Number} start [Starting point]
  @param {Number} end   [Ending point]
  @param {Array} line   [The line]
  @return {String} [returns the stations passed]
 */
var moveBackward = function ( start, end, line ) {
  var stations = [];

  for ( var i = start; i >= end; i-- ) {
    stations.push( line[ i ] );
  }

  return stations.join( ", " );
};

/*
  To simulate on moving to destination in single line
  @param {Number} start [Starting point]
  @param {Number} end   [Ending point]
  @param {Array} line   [Line]
  @return {String} [Output out the stations passed in the line]
 */
var moveToDestination = function ( start, end, line ) {
  var stationNames = "";

  if ( parseInt( end ) > parseInt( start ) ) {
    stationNames = moveForward( start + 1, end, line );
  }
  else {
    stationNames = moveBackward( start - 1, end, line );
  }

  return stationNames;
};

/*
  Used to simulate on going to the destination.
  Will return the stations passed in object form.
  @param {Number} startA [Starting point in first line]
  @param {Number} endA [Ending point in first line]
  @param {Array} lineA [Line in array form - first line]
  @param {Number} startB [Starting point in second line]
  @param {Number} endB [Ending point in second line]
  @param {Array} lineB [Line in array form - second line]
  @return Object
 */
var moveToDestinations = function ( startA, endA, lineA, startB, endB, lineB ) {
  var stationNamesA = "";
  var stationNamesB = "";
  var stationNames = {};

  stationNamesA = moveToDestination( startA, endA, lineA );
  stationNamesB = moveToDestination( startB, endB, lineB );

  // Store the origin station name and destination station name
  stationNames.origin = stationNamesA;
  stationNames.destination =  stationNamesB;

  // Takes in object form
  return stationNames;
};

/*
  To keep track the number of stops in single line
  @param {Number} start [Start point]
  @param {Number} end [End point]
  @return {Number}
 */
var getNumberOfStopsInSingleLine = function ( start, end ) {
  var numberOfStops = Math.abs( end - start );

  return numberOfStops;
};

/*
 To keep track on number of stops which involved multiple line
 @param  {Integer} startA [Index of origin station]
 @param  {Integer} endA   [Index of ending station]
 @param  {Integer} startB [Index of continuing starting station]
 @param  {Integer} endB   [Index of destination station]
 @return {Integer}
*/
var getNumberOfStopsInMultipleLine = function ( startA, endA, startB, endB ) {
  var numberOfStopsA = getNumberOfStopsInSingleLine( startA, endA );
  var numberOfStopsB = getNumberOfStopsInSingleLine( startB, endB );

  var numberOfStops = numberOfStopsA + numberOfStopsB;

  return numberOfStops;
};

/*
 * Used to validate line and station. Will return message in String.
 * If no error, will return empty string
 * @param  {String} line    [The line]
 * @param  {String} station [The station]
 * @return {String}
 */
var validateLineAndStation = function ( line, station ) {
  var stations = getStationsInLine( line );

  if ( line.length === 0 || station.length === 0 ) {
    return "Please enter the station and line.";
  }
  if ( stations.length === 0 ) {
    return "Line " + line + " does not exist.";
  }
  if ( getStationNumber( line, station ) < 0 ) {
    return "Station " + station + " does not exist in Line " + line + ".";
  }

  return "";
};

/*
  Used to check if it is the same station. If not the same, then return empty string.
  @param {String} lineA [Origin line]
  @param {String} stationA [Origin station]
  @param {String} lineB [Destination line]
  @param {String} stationB [Destination station]
  @return {String}
 */
var isSameStation = function ( originLine, originStation, destinationLine, destinationStation ) {

 if ( originLine === destinationLine
      && originStation === destinationStation ) {
    return "You are already in station "
           + destinationStation
           + " in line "
           + destinationLine
           + ".";
  }
  // This is for checking origin and destination is the intersection station
  // -> though it is in the different line
  if ( originLine !== destinationLine
       && originStation === "Union Square"
       && destinationStation === "Union Square" ) {
    return "You are already in "
           + destinationStation
           + " in line "
           + destinationLine
           + ".";
  }

  return "";
};

/*
 * To be used for web page
 * @return {void} [Do some action only]
 */
var getDirection = function () {
  var orgLine = document.getElementById( "origin-line" ).value;
  var orgStation = document.getElementById( "origin-station" ).value;
  var destLine = document.getElementById( "destination-line" ).value;
  var destStation = document.getElementById( "destination-station" ).value;

  var direction = planTrip( orgLine, orgStation, destLine, destStation );

  document.getElementById( "showdirection" ).innerHTML = direction;
};

// Different Line
console.log( planTrip( "N", "34th", "L", "1st" ) );
console.log( planTrip( "L", "1st", "N", "Times Square" ) );

// Same Line
console.log( planTrip( "N", "8th", "N", "Times Square" ) );
console.log( planTrip( "6", "Grand Central", "6", "Union Square" ) );

// Negative scenario
console.log( planTrip( "" ) );
console.log( planTrip( "L", "1st", "NA", "Times Square" ) );
console.log( planTrip( "N", "8th", "N", "8th"));
console.log( planTrip( "L", "Union Square", "N", "Union Square"));

// Intersection stop
console.log( planTrip( "6", "Grand Central", "L", "Union Square" ) );
