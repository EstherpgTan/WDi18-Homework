// input : startingPoint, endingPoint, startLine, endLine;
// test:
// - is it the same line?
// - how many stops?
// - forward / backward
//
// planTrip('N', 'Times Square', '6', '33rd'); This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// if it is on the sameline and before the 4th station, it will be directly to the endingPoint
// else go to Union Square and interchange

// "Change at Union Square." (test if the startLine === endLine && !== the endingPoint for N & 6)
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total." (calculate the stops)


var station = ["N", "L", "6"];

var nLine = ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lLine = ["8th", "6th", "Union Square", "3rd", "1st"];
var sixLine = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

// test if it is within the same line
// input is ('N', 'Times Square', '6', '33rd')
// if it is in the same station, which line it is?


// a = start line
// b = start station
// c = end line
// d = end station

var stops = 0;

var sameLine = function (a,b,c,d)
{
    if (a === station[0])
    {
      var endIndex = nLine.indexOf(d);
      var firstIndex = nLine.indexOf(b);
      console.log(endIndex);
      console.log(firstIndex);
      if ( endIndex > firstIndex)
      {
        stops = endIndex - firstIndex;
        moveForward( firstIndex, endIndex, nLine );
        return stops;
      }
      else
      {
        stops = firstIndex - endIndex;
        moveBackward(firstIndex, endIndex, nLine);
        return stops;
      }
    }
    else if (a === station[1])
      {
        var endIndex = lLine.indexOf(d);
        var firstIndex = lLine.indexOf(b);
        if ( endIndex > firstIndex)
        {
          moveForward( firstIndex, endIndex, lLine );
          stops = endIndex - firstIndex;
          return stops;
        }
        else
        {
          stops = firstIndex - endIndex;
          moveBackward(firstIndex, endIndex, lLine);
          return stops;
        }
      }
    else if (a === station[2])
    {
      var endIndex = sixLine.indexOf(d);
      var firstIndex = sixLine.indexOf(b);
      if ( endIndex > firstIndex)
      {
        moveForward( firstIndex, endIndex, sixLine );
        stops = endIndex - firstIndex;
        return stops;
      }
      else
      {
        stops = firstIndex - endIndex;
        moveBackward(firstIndex, endIndex, sixLine);
        return stops;
      }
    }
};

var moveForward = function (x,y,z) // x = firstStation, y = lastStation, z = whichLine
{
  var stationPoint = [];
  for (var i = x; i <= y; i++)
  {
    stationPoint.push( z[i] );
  }

return stationPoint;
}

var moveBackward = function (x,y,z) // x = firstStation, y = lastStation, z = whichLine
{
  var stationPoint =[];
  for (var i=x; i>=y; i= i-1)
  {
    stationPoint.push(z[i]);
  }
  return stationPoint;
}

// a = start line
// b = start station
// c = end line
// d = end station

var firstStops = 0;
var secondStops = 0;
var totalStops = 0;
var stationsOne = "";
var stationsTwo ="";
var totalStations ="";
var One ="";
var two="";

var differentLine = function (a,b,c,d)
{
  var firstHalf = function (a,b,c,d)
  {
    if (a === station[0])
      {
        var unionSquareIndex = nLine.indexOf("Union Square");
        var firstStationIndex = nLine.indexOf(b);
        if (unionSquareIndex > firstStationIndex)
        {
          stationsOne = moveForward(firstStationIndex, unionSquareIndex, nLine);
          firstStops = unionSquareIndex - firstStationIndex;

          // return firstStops;
        }
        else
        {
          stationsOne = moveBackward(firstStationIndex, unionSquareIndex, nline);
          firstStops = firstStationIndex - unionSquareIndex;

          // return firstStops;
        }
      }
  if (a === station[1])
      {
        var unionSquareIndex = lLine.indexOf("Union Square");
        var firstStationIndex = lLine.indexOf(b);
        if (unionSquareIndex > firstStationIndex)
        {
          stationsOne = moveForward(firstStationIndex, unionSquareIndex, lLine);
          firstStops = unionSquareIndex - firstStationIndex;

          // return firstStops;
        }
        else
        {
          stationsOne = moveBackward(firstStationIndex, unionSquareIndex, lline);
          firstStops = firstStationIndex - unionSquareIndex;

          // return firstStops;
        }
      }
  if (a === station[2])
      {
        var unionSquareIndex = sixLine.indexOf("Union Square");
        var firstStationIndex = sixLine.indexOf(b);
        if (unionSquareIndex > firstStationIndex)
        {
          stationsOne = moveForward(firstStationIndex, unionSquareIndex, sixLine);
          firstStops = unionSquareIndex - firstStationIndex;

          // return firstStops;
        }
        else
        {
          stationsOne = moveBackward(firstStationIndex, unionSquareIndex, sixLine);
          firstStops = firstStationIndex - unionSquareIndex;

          // return firstStops;
        }
      }
    }
  var secondHalf = function (a,b,c,d)
  {
    if (c === station[0])
        {
          var unionSquareIndex = nLine.indexOf("Union Square");
          var lastStationIndex = nLine.indexOf(d);
          if (lastStationIndex > unionSquareIndex)
          {
            unionSquareIndex += 1;
            stationsTwo = moveForward(unionSquareIndex, lastStationIndex, nLine);
            secondStops = lastStationIndex - unionSquareIndex -1;

            // return firstStops;
          }
          else
          {
            unionSquareIndex -= 1;
            stationsTwo = moveBackward(unionSquareIndex, lastStationIndex, nLine);
            secondStops = unionSquareIndex + 1 - lastStationIndex;
            // return firstStops;
          }
        }
    if (c === station[1])
        {
          var unionSquareIndex = lLine.indexOf("Union Square");
          var lastStationIndex = lLine.indexOf(d);
          if (lastStationIndex > unionSquareIndex)
          {
            unionSquareIndex += 1;
            stationsTwo = moveForward(unionSquareIndex, lastStationIndex, lLine);
            secondStops = lastStationIndex - unionSquareIndex - 1;

            // return firstStops;
          }
          else
          {
            unionSquareIndex -= 1;
            stationsTwo = moveBackward(unionSquareIndex, lastStationIndex, lLine);
            secondStops = unionSquareIndex - lastStationIndex + 1;
            // return firstStops;
          }
        }
    if (c === station[2])
    {
      var unionSquareIndex = sixLine.indexOf("Union Square");
      var lastStationIndex = sixLine.indexOf(d);
      if (lastStationIndex > unionSquareIndex)
        {unionSquareIndex += 1;
        stationsTwo = moveForward(unionSquareIndex, lastStationIndex, sixLine);
        secondStops = lastStationIndex - unionSquareIndex - 1;

        // return firstStops;
        }
      else
        {
        unionSquareIndex -= 1;
        stationsTwo = moveBackward(unionSquareIndex, lastStationIndex, sixLine);
        secondStops = unionSquareIndex - lastStationIndex + 1;
        // return firstStops;
        }
      }
  }



  firstHalf(a,b,c,d);
  secondHalf(a,b,c,d);
  stationsOne.shift();
  One = stationsOne.join(", ");
  Two = stationsTwo.join(", ");
  totalStations = One + Two;
  totalStops = firstStops + secondStops;
  return totalStops;
}

//console.log(totalStations);
//console.log(totalStops);

var output ="";
var planTrip = function (e,f,g,h)
{

  if (e === g)
  {
    sameLine(e,f,g,h);
    var output1 = "You must travel the following stops on the " + e + " Line: " + One;
    var output2 = stops + " stops in total";
    console.log(output1);
    console.log(output2);


  }
  else
  {
    differentLine(e,f,g,h);
    var output1 = "You must travel the following stops on the " + e + " Line: " + One + ".";
    var output2 = "Change at Union Square.";
    var output3 = "Your journey continues on the " + g + " line through the following stops: " + Two + ". ";
    var output4 = totalStops + " stops in total.";
    console.log(output1);
    console.log(output2);
    console.log(output3);
    console.log(output4);
  }
};

//planTrip("N", "Time Square", "6", "33rd");
planTrip("L","8th", "6", "33rd");
