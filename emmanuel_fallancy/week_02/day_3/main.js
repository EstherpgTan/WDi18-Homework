console.log( "Annoying cat" );

var box = document.querySelector( "img" );

box.style.left = "0";
box.style.right = "0";
box.style.width = "100px";

console.log( box.style.left, box.style.right );

var moveForward = function () {
   var leftPos = parseInt( box.style.left );
   leftPos += 40;
   box.style.left = leftPos + "px";

   return leftPos;
};

var moveBackward = function () {
  var leftPos = parseInt( box.style.left );
  leftPos -= 40;
  box.style.left = leftPos + "px";

  return leftPos;
}

var isMovingForward = true;
var movingAcross = 0;

var moveAcross = function () {
  var leftPos = parseInt( box.style.left );

  if ( movingAcross > 10 ) {
    box.style.display = "none";
    console.log( "You did the magic!" );
    window.clearInterval( movingCat );
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

var movingCat = window.setInterval( moveAcross, 100 );
