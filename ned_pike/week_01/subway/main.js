$(document).ready(function(){

  $("div.container").hide();
  $("button.start").click(function() {
    $("div.container").fadeIn("slow");
    $("div.main").fadeOut();
  });

  function inputSort(input1, input2) {
    isEmpty(input1, input2);
  }

  function buttonColor(input1, input2, divName){
    if($("div.one").html() === "" || $("div.three").html() === ""){
      inputSort(input1, input2);
      $(divName).css("background", "green");
    }
  }
  // Nline stops
  // Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
  $("button.times_square").click(function() {
    buttonColor("Nline", "Times square", "button.times_square");
    // $("button.times_square").css("background", "red");
  });

  $("button.34th").click(function() {
    buttonColor("Nline", "34th", "button.34th");
  });

  $("button.29th").click(function() {
    buttonColor("Nline", "29th", "button.29th");
  });

  $("button.23rd").click(function() {
    buttonColor("Nline", "23rd", "button.23rd");
  });

  $("button.union_square_N").click(function() {
    buttonColor("Nline", "union square","button.union_square_N");
  });

  $("button.8thN").click(function() {
    buttonColor("Nline", "8th ","button.8thN");
  });
  // Lline stops
  // Lline: ["8th", "6th", "union square", "3rd", "1st"],
  $("button.8th").click(function() {
    buttonColor("Lline", "8th", "button.8th");
  });

  $("button.6th").click(function() {
    buttonColor("Lline", "6th", "button.6th");
  });

  $("button.union_square_L").click(function() {
    buttonColor("Lline", "Union Square", "button.union_square_L");
  });

  $("button.3rd").click(function() {
    buttonColor("Lline", "3rd", "button.3rd");
  });

  $("button.1st").click(function() {
    buttonColor("Lline", "1st", "button.1st");
  });
  // six line stops
  // six_line:["grand central", "33rd", "29th", "union square", "astor place"]
  $("button.grand_central").click(function() {
    buttonColor("six line", "grand central", "button.grand_central");
  });

  $("button.33rd").click(function() {
    buttonColor("six line", "33rd","button.33rd");
  });

  $("button.29thS").click(function() {
    buttonColor("six line", "29th ", "button.29thS");
  });

  $("button.union_square_S").click(function() {
    buttonColor("six line", "union square", "button.union_square_S");
  });

  $("button.astor_place").click(function() {
    buttonColor("six line", "astor place", "button.astor_place");
  });
  // finds and displays d trip path
  $("button.final").click(function() {
    var input = sortStations(
       $("div.one").html(),
       $("div.two").html(),
       $("div.three").html(),
       $("div.four").html() );
       $("div.image_wrap").hide();
       imageMatch($("div.four").html());
       $("div.image_wrap").fadeIn();
    $("div.result").html(input).append();
  });

  $("button.clear").click(function() {
    $("div.one").html("");
    $("div.two").html("");
    $("div.three").html("");
    $("div.four").html("");
    $("div.error").html("");
    $("h5.wrong").hide();
    $("div.result").html("");
    $(".btn-primary").css("background","#337ab7");
  });

  function isEmpty(input1, input2) {
    if ($("div.one").html() === "") {
    $("div.one").html(input1).append();
    $("div.two").html(input2).append();
    }
    else if ($("div.three").html() === "")  {
      $("div.three").html(input1).append();
      $("div.four").html(input2).append();
    }
    else {
      $("h5.wrong").show();
      $("div.error").html("You may only choose two stations");
    }
  }

  function imageMatch(input1) {
    if (input1 == "Times square") {
      $('#img').html('<img id="theImg" class="img-rounded img-responsive" src="http://travellingmoods.com/wp-content/uploads/2015/05/times-square.jpg" />');
      $("h1.describe").html("Times square");
      $("p.explain").html("Times Square is a section of Manhattan, New York City. It is a major center for tourism, show business and commerce. The square is at the meeting point of Broadway, Seventh Avenue and 42nd street. It is named for the New York Times which formerly had its main building there. One of the biggest stations in the New York City Subway system is under Times Square. The well-known city street area is probably most famous for its New Year's Eve ball drop that happens every year. It is one of the most famous sights of New York.");
    }
    else if(input1 == "union square") {
      $('#img').html('<img id="theImg" class="img-rounded img-responsive" src="http://www.catholicevidence.org/wp-content/uploads/2015/11/union-square-stock-photo.jpg" />');
      $("h1.describe").html("Union Square");
      $("p.explain").html("Union Square is an important and historic intersection and surrounding neighborhood in Manhattan, New York City, located where Broadway and the former Bowery Road – now Fourth Avenue[4] – came together in the early 19th century; its name celebrates neither the Federal union of the United States nor labor unions but rather denotes that 'here was the union of the two principal thoroughfares of the island.'");
    }
    else if (input1 == "astor place") {
      $('#img').html('<img id="theImg" class="img-rounded img-responsive" src="http://www.urban75.org/photos/newyork/images/ny551.jpg" />');
      $("h1.describe").html("Astor Place");
      $("p.explain").html("Astor Place is a short, two-block street in NoHo/East Village, in the lower part of the New York City borough of Manhattan. It runs from Broadway in the west, just below East 8th Street; through Lafayette Street, past Cooper Square and Fourth Avenue; and ends at Third Avenue, continuing as St. Mark's Place.");
    }
    else if (input1 == "grand central") {
      $('#img').html('<img id="theImg" class="img-rounded img-responsive" src="https://ispynyc.files.wordpress.com/2009/06/dsc_0545.jpg" />');
      $("h1.describe").html("Grand Central");
      $("p.explain").html("It's actually the third station to occupy the site. The first was Grand Central Depot, built by railroad tycoon Cornelius Vanderbilt and opened in 1871, which served as a hub for a number of railroad lines entering Manhattan.");
    }
    else {
      $('#img').html('<img id="theImg" class="img-rounded img-responsive" src="http://cdn.scahw.com.au/cdn-1d1ec697aded480/ImageVaultFiles/id_418973/cf_7/986x606-sydsuburbsworst-getty.JPG" />');
      $("h1.describe").html("Visiting the suburbs!");
      $("p.explain").html("Come see the Hip shops all over our suburbs or just catch up with family and friends");
    }
  }

  var lines = {
    Lline: ["8th", "6th", "union square", "3rd", "1st"],
    Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th "],
    six_line:["grand central", "33rd", "29th ", "union square", "astor place"]
  };

  // convert internal arrays to vars for ease of access
  function sortedLines (line, station) {
    var first = lines.Lline;
    var second = lines.Nline;
    var third = lines.six_line;

    if (first.includes(station) && line === "Lline") {
      return lines.Lline;
    }
    if (second.includes(station) && line === "Nline") {
      return lines.Nline;
    }
    if (third.includes(station) && line === "six line") {
      return lines.six_line;
    }
    else {
      return "not a line";
    }
  }
  // testing inputing a string for user interface
  // console.log(sortedLines("Nline", "Times square"));
  // console.log(sortedLines("Lline", "8th"));

  // find out d index of a stop
  function indexOfTrip(arr, stop) {
    var result = arr.indexOf(stop);
    return result;
  }
  // function that goes forward on a single line by testing index
  function forwardStops(startLine, startStation, endLine, endStation) {
    var startIndex = indexOfTrip(startLine, startStation);
    var endIndex = indexOfTrip(endLine, endStation);
    var myArr = [];
    for (var i = startIndex; i <= endIndex; i++) {
      // if (startLine[i] === "Union square")
      var message = startLine[i];
      myArr.push(message);
    }
    return myArr;
  }
  // function that goes backward on a single line by testing index
  function backwardStops(endLine, endStation, startLine, startStation) {
    var startIndex = indexOfTrip(endLine, endStation);
    var endIndex = indexOfTrip(startLine, startStation);
    var myArr = [];
    for (var i = startIndex; i >= endIndex; i--) {
      var message = startLine[i];
      myArr.push(message);
    }
    return myArr;
  }
  // identifies by using d index of start and last stop whedr to list forwards or backwards
  function printStations(startLine, startStation, endLine, endStation) {
    var startIndex = indexOfTrip(startLine, startStation);
    var endIndex = indexOfTrip(endLine, endStation);
    if (startIndex < endIndex) {
      return forwardStops(startLine, startStation, endLine, endStation);
    }
    else if (endIndex < startIndex) {
      return backwardStops(startLine, startStation, endLine, endStation);
    }
    else {
      return "Thats not a proper Journey";
    }
  }
  // this is simply d message for a simple one line trip
  function oneLine(startLine, startStation, endLine, endStation) {
    var complete = printStations(startLine, startStation, endLine, endStation);
    var message = "Get on at " + complete.slice(0,1) + '<br>';
      if (complete.length > 2) {
        message += " You will stop at " + complete.slice(1, complete.length - 1) + '<br>';
      }
      message += " you will get off at " + complete.slice(complete.length - 1) + '<br>';
      message += " " + complete.length + " stops in total";
      return message;
  }
  // After seeing this code present in all complex lines I added it in to a function
  // this determines d slice values by using d length of d three arrays (start, end and joined)
  function finalMessage(newArr, startStation, endStation, examArr, counter) {
    var complete = printStations(newArr, startStation, newArr, endStation);
    var count1 = complete.length - counter;
    var message = "Get on at " + complete.slice(0,1) + '<br>';
    if (examArr > 1) {
      message += " Go through stops " + complete.slice(1, examArr) + '<br>';
    }
    message += " Change at " + complete.slice(count1, count1 + 1) + '<br>';
    if (counter > 2) {
      message += " Go through stops " + complete.slice(count1 + 1, complete.length - 1) + '<br>';
    }
    message += " Get off at " + complete.slice(complete.length - 1) + '<br>';
    message += " " + complete.length + " stops in total";
    return message;
  }
  // I would have liked to refactor d next four but as dy all vary slight it cannot be done
  // this simply joins d arrays depending on d if statement to follow
  function backSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
    var counter = 0;
    var newArr = startLine.slice(startUnion, startIndex + 1);
    newArr.shift();
    var examArr = newArr.length;
    for (var i = endUnion; i >= endIndex; i-- ) {
      newArr.unshift(endLine[i]);
      counter += 1;
    }
    return finalMessage(newArr, startStation, endStation, examArr, counter);
  }

  function forSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
    var counter = 0;
    var newArr = startLine.slice(startIndex, startUnion + 1);
    newArr.pop();
    var examArr = newArr.length;
    for (var y = endUnion; y <= endIndex; y++) {
      newArr.push(endLine[y]);
      counter += 1;
    }
    return finalMessage(newArr, startStation, endStation, examArr, counter);
  }

  function backLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex) {
    var counter = 0;
    var newArr = startLine.slice(startUnion, startIndex + 1);
    newArr.shift();
    var examArr = newArr.length;
    for (var i = endUnion; i <= endIndex; i++) {
      newArr.unshift(endLine[i]);
      counter += 1;
    }
    return finalMessage(newArr, startStation, endStation, examArr, counter);
  }

  function forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ) {
    var counter = 0;
    var newArr = startLine.slice(startIndex, startUnion + 1);
    newArr.pop();
    var examArr = newArr.length;
    for (var i = endUnion; i >= endIndex; i--) {
      newArr.push(endLine[i]);
      counter += 1;
    }
    return finalMessage(newArr, startStation, endStation, examArr, counter);
  }
  // Using d index's of start, end and union square for both lines determine which if statement to follow
  function sortStations(startString, startStation, endString, endStation) {
    var startLine = sortedLines(startString, startStation);
    var endLine = sortedLines(endString, endStation);
    var startIndex = indexOfTrip(startLine, startStation);
    var endIndex = indexOfTrip(endLine, endStation);
    var startUnion = indexOfTrip(startLine, "union square");
    var endUnion = indexOfTrip(endLine, "union square");
    // one line back or forth
    if (startLine.join("") === endLine.join("")) {
      return oneLine(startLine, startStation, endLine, endStation);
    }
    // backward change
    else {
      if (startIndex > startUnion && endIndex < endUnion) {
        return (backSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex));
      }
      // forward change
      else if (startIndex < startUnion && endIndex > endUnion) {
        return forSwitch(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex);
      }
      // backward loop
      else if (startIndex > startUnion && endIndex > endUnion) {
        return (backLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex));
      }
      // Forward loop
      else if (startIndex < startUnion && endIndex < endUnion) {
        return (forLoop(startLine, startStation, endStation, endLine, startUnion, endUnion, startIndex, endIndex ));
      }
    }
  }
  console.log(sortStations("Nline","Times square","Nline","8th "));
  console.log(sortStations("Lline", "1st", "six line", "grand central")); //back switch
  console.log(sortStations("Nline", "8th ", "six line", "grand central")); //back loop
  console.log(sortStations("six line", "grand central", "Nline", "8th ")); // for switch
  console.log(sortStations( "Lline", "8th", "six line", "grand central")); // for loop

});
// start of function d
// list array in object
// For references
// Lline: ["8th", "6th", "union square", "3rd", "1st"],
// Nline: ["Times square", "34th", "29th", "23rd", "union square", "8th"],
// six_line:["grand central", "33rd", "29th" ,"union square", "astor place"]

// end of function anythin after or before this is purely testing





//2nd version didnt work for lines that looped

// lines2 = {
//   Lline: [["8th", "6th", "union square"],["union square", "3rd", "1st"]],
//   Nline: [["Times square", "34th", "29th", "23rd", "union square"],["union square", "astor place"]],
//   six_line:[["azard central", "33rd", "29th", "union square"],["union square", "astor place"]]
// };

// sort the users input
// function sortedLines (line, station) {
//   var first = lines.Lline;
//   var second = lines.Nline;
//   var third = lines.six_line;
//
//   if (first.includes(station) && line === "Lline") {
//     return lines.Lline;
//   }
//   if (third.includes(station) && line === "Nline") {
//     return lines.Nline;
//   }
//   if (fifth.includes(station) && line === "six_line") {
//     return lines.six_line;
//   }
//   else {
//     return "not a line";
//   }
// }

// step one find out if stop is on current line
// if yes simply print out the stops
//  if not pop the first array concat string and then print stops
// function printStops(startLine, startStation, endLine, endStation) {
//   var stationArr1 = sortedLines(startLine, startStation);
//   var stationArr2 = sortedLines(endLine, endStation);
//   if (stationArr1.includes(endStation) && stationArr2.includes(endStation)) {
//     return forwardStops(stationArr1, startStation, stationArr2, endStation);
//   }
//   else {
//     stationArr1.pop();
//     var completeLine = stationArr1.concat(stationArr2);
//     return forwardStops(completeLine, startStation, completeLine, endStation);
//   }
// }

// console.log(printStops("Lline", "8th", "Nline", "Times square" ));
// Testing the hard loops
// testArr1 = [1,2,3,4];
// testArr2 = [5,6,7,8];
// function addLastTwo(arr1, arr2) {
//   for (var i = 3; i > 1; i--) {
//     arr1.push(arr2[i]);
//   }
//   return arr1;
// }
//
// function addFirstTwo(arr1, arr2) {
//   for(var i = 0; i < 2; i++) {
//     arr1.unshift(arr2[i]);
//   }
//   return arr1;
// }
// console.log(testArr1.slice(2,4));
// console.log(addFirstTwo(testArr1, testArr2));
// console.log(addLastTwo(testArr1, testArr2));
// console.log(lines["Nline"].indexOf('union square'));
// console.log(testArr1.slice(1,3));
// console.log(testArr1);
// if (varline1[0].concat(varline2[1]).join("")) {}

// concat concat concat concat concat concat concat or maybe not

// identify line function
// identify index of station

// compare two arrays
// sort join the ===
// function indexOfUnion(arr, stop) {
//   var result = arr.indexOf("union square")
//   return result
// }
//
// console.log(indexOfUnion(lines2["Lline"][0]));
