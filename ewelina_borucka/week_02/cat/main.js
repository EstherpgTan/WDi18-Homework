////////////////////////////////////////////////////////////////
// the cat walks 24/7
// var cat = document.querySelector(".cat");
//
// cat.style.background = "pink";
// cat.style.position = "absolute";
// cat.style.bottom = "0px";
// cat.style.left = "0px";
//
// function walkingCat() {
//   var currentPos = parseInt(cat.style.left);
//
//   var desiredRight = currentPos + 5;
//   cat.style.left = desiredRight + "px";
// }
//
// window.setInterval(walkingCat, 44)
//////////////////////////////////////////////////////////////////

var cat2 = document.querySelector(".cat2");
var xCat = null;
var catWidth = 293;
console.log(catWidth)
cat2.style.position = "absolute";
cat2.style.bottom = "400px";
cat2.style.left = "0px";


function walkingCat2() {
  var currentPos = parseInt(cat2.style.left);

  var desiredRight = currentPos + 10;
  cat2.style.left = desiredRight + "px";
  if (desiredRight >= window.innerWidth - catWidth) {  // the cat stops at certain point ==> inner.width

    window.clearInterval(xCat);                        // Cancel the timer called xCat
    cat2.style.transform = "scaleX(-1)"
    xCat = window.setInterval(walkingCatLeft, 64);
  }
}

function walkingCatLeft() {
  var currentPos = parseInt(cat2.style.left);

  var desiredRight = currentPos - 10;
  cat2.style.left = desiredRight + "px";
  if (desiredRight <= 0) {                    // stops if position 0
                                             // Cancel the timer called xCat
    cat2.style.transform = "scaleX(1)"
    window.clearInterval(xCat);
    xCat = window.setInterval(walkingCat2, 84);
  }
}

xCat = window.setInterval(walkingCat2, 84)
/////////////////////////////////////////////////////////////////////////


 /////////////////// disco light //////////////

var disco = document.querySelector(".rainbow");

function setColor() {
  disco.style.backgroundColor = disco.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

window.setInterval(setColor, 100 );
