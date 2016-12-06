// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

//cange background

// animation - cadding new background at end of walk
var background = document.querySelector(".background");
background.style.width = "1200";
background.style.height = "740px";

var cat = document.querySelector("#cat");
var catMovingRight = null; // animation for a cat to move right
cat.style.left = "0px";
cat.style.top ="220px";

var moveCatRight = function () {
  var currentHposLtoR = parseInt(cat.style.left); // current horziontal position (left 0 to right = window width)
  var newHposLtoR = currentHposLtoR + 5; // adding 10 from left to right every XX seconds
  cat.style.left = newHposLtoR + "px"; //new position in pixels

    if (newHposLtoR >= window.innerWidth - 296) { //761 is the window.innerHeight but not centered so im using 1150
      window.clearInterval( catMovingRight ); //animation stops when the cat hits the side of the window/screens
      cat.style.opacity = "0";

      var catback = document.querySelector("#catback");
      catback.style.display = "block";
      catback.style.opacity = "1";
      // catback.style.display = "block";
      var catMovingBack = null; // animation for a cat to move left, starting as the point where it ended moving right
      catback.style.right = "0px";
      catback.style.top = "220px";
      var moveCatBack = function () {
        var currentHposRtoL = parseInt(catback.style.right); // current horziontal position (left 0 to right = window width)
        var newHposRtoL = currentHposRtoL + 5; // adding 10 from left to right every XX seconds
        catback.style.right = newHposRtoL + "px"; //new position in pixels
            console.log(newHposRtoL);
            if (newHposRtoL >= 1200 ) { //761 is the window.innerHeight but not centered so im using 900
              console.log("clear back");
              window.clearInterval( catMovingBack ); //animation stops when the cat hits the side of the window/screens
              catback.style.opacity = "0";

              cat.style.left = "0px"; //reset to original style and recall function
              cat.style.opacity = "1";
              catMovingRight = window.setInterval( moveCatRight, 50);

              var zoolander = document.querySelector("#zoolander");
              var zoolanderMoving = null;
              zoolander.style.width = "50px";
              zoolander.style.height ="21px";
              zoolander.style.position = "absolute";
              zoolander.style.right = "100px";
              zoolander.style.top = "100px";

              var moveZoolander = function () {
                var currentPosH = parseInt(zoolander.style.right);
                var currentPosV = parseInt(zoolander.style.top);
                var currentWidth = parseInt(zoolander.style.width);
                var currentHeight = parseInt(zoolander.style.height);

                var newPosH = currentPosH + 5;
                var newPosV = currentPosV + 5;
                var newWidth = currentWidth + 5;
                var newHeight = currentHeight + 2;

                zoolander.style.right = newPosH + "px";
                zoolander.style.top = newPosV + "px";
                zoolander.style.width = newWidth + "px";
                zoolander.style.height = newHeight + "px";

                if (newPosH >= 300) {
                  window.clearInterval( zoolanderMoving );
                }
              };
              zoolanderMoving = window.setInterval (moveZoolander, 100);
            }
        };
        catMovingBack = window.setInterval( moveCatBack, 50);
  }
};
  catMovingRight = window.setInterval( moveCatRight, 50);


// animation - cat moving from left to right upside down
var catmirror = document.querySelector("#catmirror");
var catMovingMirror = null; // animation for a cat to move left, starting as the point where it ended moving right
catmirror.style.left = "0px";
catmirror.style.top = "435px";

var moveCatMirror = function () {
  var currentHposLtoRM = parseInt(catmirror.style.left); // current horziontal position (left 0 to right = window width)
  var newHposLtoRM = currentHposLtoRM + 5; // adding 10 from left to right every XX seconds
  catmirror.style.left = newHposLtoRM + "px"; //new position in pixels

      if (newHposLtoRM >= window.innerWidth - 296 ) { //761 is the window.innerHeight but not centered so im using 900
        window.clearInterval( catMovingMirror ); //animation stops when the cat hits the side of the window/screens
        catmirror.style.opacity= "0";

        var catbackMirror = document.querySelector("#catbackmirror");
        var catMovingBackMirror = null; // animation for a cat to move left, starting as the point where it ended moving right
        // catbackMirror.style.display = "block"; // so the cat doe snot show up ahead of time
        catbackMirror.style.right = "0px";
        catbackMirror.style.top = "435px";
        var moveCatBackMirror = function () {
          var currentHposRtoL = parseInt(catbackMirror.style.right); // current horziontal position (left 0 to right = window width)
          var newHposRtoL = currentHposRtoL + 5; // adding 10 from left to right every XX seconds
          catbackMirror.style.right = newHposRtoL + "px"; //new position in pixels

              if (newHposRtoL >= 1200 ) { //761 is the window.innerHeight but not centered so im using 900
                window.clearInterval( catMovingBackMirror ); //animation stops when the cat hits the side of the window/screens
                catbackMirror.style.opacity = "0";
                catmirror.style.left = "0px"; // reset mirror style again and recall function
                catmirror.style.opacity = "0.15";
                catMovingMirror = window.setInterval( moveCatMirror, 50);

              }
          };
          catMovingBackMirror = window.setInterval( moveCatBackMirror, 50);
      }
  };
  catMovingMirror = window.setInterval( moveCatMirror, 50);
