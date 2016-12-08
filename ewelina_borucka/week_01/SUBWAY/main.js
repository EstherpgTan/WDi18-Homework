
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

//////////////////////////////////////////////////////////////////////////////////////
function countStops (x, startStop, endStop) {     // total stops
	var count = 0;
	count = Math.abs(x.indexOf(endStop) - x.indexOf(startStop));
	console.log(count);
	return count;
}


function fromStopToStop (x, startStop, endStop) {

	var newlist = [];

	if (x.indexOf(startStop) < x.indexOf(endStop)) {
		for (var i = x.indexOf(startStop); i <= x.indexOf(endStop); i += 1) {
			newlist.push(x[i]);
		}
		console.log(newlist.join(','));
	} else if (x.indexOf(startStop) > x.indexOf(endStop)) {
		for (var i = x.indexOf(startStop); i >= x.indexOf(endStop); i -= 1) {
			newlist.push(x[i]);
		}
		console.log(newlist.join(','));
	} else {
			console.log("It is the same stop mate!");
	}
}

var planTrip = function(startLine, startStation, endLine, endStation) {
	if (startLine === endLine) {
		fromStopToStop(startLine, startStation, endStation);
	} else {
		console.log("Your must travel through the following stops on the N line: ");
		fromStopToStop(startLine, startStation, "Union Square");
		console.log("Change at Union Square.");
		console.log("Your journey continues through the following stops: ");
		fromStopToStop(endLine, "Union Square", endStation);
	}
};

planTrip(lineL, "1st", lineN, "34th");


// fromStopToStop(lineL, "6th", "3rd"); // go forward
// fromStopToStop(lineL, "6th", "3rd"); // go forward
// planTrip(lineL, "6th", lineN, "8th");

// fromStopToStop(lineL, "6th", "3rd"); // go forward
// fromStopToStop(line6, "28th", "23rd"); // go forward
// fromStopToStop(lineN, "34th", "Union Square"); // go forward
// console.log("====================================");
// fromStopToStop(lineL, "3rd", "6th"); // test go backward
// fromStopToStop(lineL, "3rd", "3rd"); // test if it's the same stop
//
// countStops(lineL, "6th", "3rd");
// countStops(line6, "28th", "23rd");
// countStops(lineN, "34th", "Union Square");
// countStops(lineL, "3rd", "6th");
// countStops(lineL, "3rd", "3rd");
