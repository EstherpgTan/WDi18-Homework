// Create a new Javascript file and link to it with a script tag at the bottom. - done
// Create a variable to store a reference to the img. - done
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

var cat = document.querySelector("img");
var catID = null;
var maxWidth = (window.innerWidth - 296);
console.log(maxWidth);
var catPosition = null;

cat.style.position = "absolute";
cat.style.left = "0px";
cat.style.right = "0px";

var catWalk = function() {
  var currentLeft = parseInt(cat.style.left);
  catPosition = currentLeft + 10;
  cat.style.left = catPosition + "px";
  console.log(cat.style.left);
    if (catPosition > maxWidth) {
      console.log(cat.style.left);
      window.clearInterval(catID);
      // now you just gotta work out how to flip the damn image
      catID = window.setInterval(catWalkBack, 50);
    }
  };

var catWalkBack = function () {
  catPosition = catPosition - 10;
  cat.style.left = (catPosition + "px");
  console.log(cat.style.left);
    if (catPosition < 0) {
      console.log(cat.style.left);
      window.clearInterval(catID);
      catID = window.setInterval(catWalk, 50);
    }
};

catID = window.setInterval(catWalk, 50);

// catWalk();
