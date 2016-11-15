// //
// // Create a variable to store a reference to the img.
// // Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// // Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// // Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// //
// // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
// //
// // Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
// //
// // Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


///try stopping the walk and adding
////more conditions to walk back

var img = document.querySelector("img");
console.log(img);

img.style.position = "absolute";
img.style.left = "0px";


// var catWalk = function() {
//   var oldPos = parseInt(img.style.left);
//
//   if (parseInt(img.style.left) <= 1000) {
//   var newPos = oldPos + 10;  //turns from string to integer to add up
//   img.style.left = newPos + "px";
//
//     if (parseInt(img.style.left) === 1000) {
//         window.clearInterval();
//
//         if (parseInt(img.style.left) > 0) {
//         var newPos = oldPos - 10;  //turns from string to integer to add up
//         img.style.left = newPos - "px";
//       }
//     }
//   }
// };

  var catWalk = function() {
  var oldPos = parseInt(img.style.left);

  if (parseInt(img.style.left) <= 1000) {
  var newPos = oldPos + 10;  //turns from string to integer to add up
  img.style.left = newPos + "px";

    var plusOrMinus = function() {
      if (oldPos <= 1000) {
        var newPos = oldPos + 10;  //turns from string to integer to add up
        img.style.left = newPos + "px";
        if (oldPos === 1000) {
          window.clearinterval();
          if (oldPos > 0) {
            var newPos = oldPos - 10;  //turns from string to integer to add up
            img.style.left = newPos + "px";
          }
        }
      }
    }
  }

};

var stop = window.setInterval(catWalk, 50); //Use stop function to turn cat around

window.setInterval(catWalk, 50);
