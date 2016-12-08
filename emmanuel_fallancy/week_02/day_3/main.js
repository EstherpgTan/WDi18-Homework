console.log( "Annoying cat" );

var box = document.querySelector( "#cat" );
var mindblown = document.querySelector( "#mind_blown" );
var wiggly = document.querySelector( "#wiggly" );
var body = document.querySelector( "body" );

body.style.textAlign = "center";

box.style.left = "0";
box.style.right = "0";
box.style.width = "100px";

mindblown.style.display = "none";
wiggly.style.display = "none";

console.log( box.style.left, box.style.right );

var moveForward = function () {
   var leftPos = parseInt( box.style.left );
   leftPos += 5;
   box.style.left = leftPos + "px";

   return leftPos;
};

var moveBackward = function () {
  var leftPos = parseInt( box.style.left );
  leftPos -= 5;
  box.style.left = leftPos + "px";

  return leftPos;
}

var isMovingForward = true;
var movingAcross = 0;

var moveAcross = function () {
  var leftPos = parseInt( box.style.left );

  if ( movingAcross > 1 && ( window.innerWidth / 2 ) > leftPos ) {
    box.style.display = "none";
    console.log( "You did the magic!" );
    window.clearInterval( movingCat );
    window.setTimeout( function () {
      wiggly.style.display = "inline";
      wiggly.style.textAlign = "center";
    }, 1000 )
    window.setTimeout( function () {
      mindblown.style.display = "inline";
      mindblown.style.textAlign = "center";
      wiggly.style.display = "none";
    }, 10000 )
  }

  if ( leftPos < ( window.innerWidth - parseInt( box.style.width ) ) && isMovingForward ) {
      leftPos = moveForward();
      if ( leftPos > window.innerWidth - parseInt( box.style.width ) ) {
        box.style.transform = "scale( -1, 1 )";
        isMovingForward = false;
        movingAcross += 1;
      }
  }
  else if ( leftPos > 0 && !isMovingForward ) {
      leftPos = moveBackward();
      if ( leftPos <= 0 ) {
        box.style.transform = "scale( 1, 1 )";
        isMovingForward = true;
        movingAcross += 1;
      }
  }

};

var movingCat = window.setInterval( moveAcross, 200 );
