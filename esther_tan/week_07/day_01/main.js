// console.log($);

//Do something cool with people in space: Number of people
var basePeopleURL="http://api.open-notify.org/astros.json"

var displayPeople = function (data){
var numberPeople = data.number;
var $people = $("p#people");
$people.text(numberPeople + "People in space right now");
};

var getPeopleInformation = function (){
  console.log("Fetching people");

$.ajax({
  url: basePeopleURL,
  type: "GET",
  dataType: "JSONP",
}).done(displayPeople);
};

$(document).ready(function () {

 $(".people button").on("click", function (){
   getPeopleInformation();
 });

 });
