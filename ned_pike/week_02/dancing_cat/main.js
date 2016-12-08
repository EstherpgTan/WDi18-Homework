var cat = document.querySelector('#main');
cat.style.transform = "rotate(0deg)";
var current_rotate = 0;
cat.style.left = '0px';
cat.style.top = '50px';
var move = true;

function crazyCat() {
  var side = parseInt(cat.style.left);
  cat.style.transition = '0.5s';

  if (move && (side > (window.innerWidth-cat.width))) {
    move = false;
  }
  if (move && (side > window.innerHeight-cat.height)) {
    move = false;
  }
  if (move === false && (side <= 0)) {
    move = true;
  }
  var rotate1 = Math.ceil(Math.random() * 500);
  // var rotate2 = Math.ceil(Math.random() * 50);
  var rotate3 = Math.ceil(Math.random() * 300);
  if (move) {
    cat.style.left = (side + rotate1) + 'px';
    cat.style.transform = "rotate(" + (current_rotate += rotate3) + "deg)";
    // cat.style.top = (side += rotate1) + 'px';
    // cat.style.bottom = (side += rotate3) + 'px';

  } else {
    cat.style.left = (side - rotate1) + 'px';
    cat.style.transform = "rotate(" + (current_rotate -= rotate3) + "deg)";
    // cat.style.top = (side -= rotate1) + "px";
  }

}
window.setInterval(crazyCat, 20);
