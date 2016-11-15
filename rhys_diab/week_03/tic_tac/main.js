///Create array to make it easy to input
//just X into any square
    //figure out how to get specific
    //square clicked to display X

var placeX = function() {

var $showAllX = $("button");

for (var i = 0; i < $showAllX.length; i +=1 ) {

var squareClicked;
var squareClicked = $showAllX.eq(i);

squareClicked.html("X");
squareClicked.css({
  "font-size": "100px",
  "color": "black",

  ///Call function to initiate next player

// var nextPlayer = function() {
//   nextPlayer.on("click", placeO )
//
//         }
//   console.log(nextPlayer());

    });
  }
};


///draft code for placing O on click

  // var placeO = function () {
  //
  // var $showO = $(".topMiddle") ;
  // $showO.html("O");
  // $showO.css({
  //   "font-size": "100px",
  //   "color": "black",
  // });
  //

//Create variable for button clicked
      //ie which class was clicked

$("button").on( "click", placeX );

///
