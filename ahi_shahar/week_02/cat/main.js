// var cat = document.querySelector(".cat");
//
// cat.style.left = "-200px";
//
// var leftToRight = true;
// var catWalk = function ()  {
//   var startLeft = parseInt(cat.style.left);
//   // var fromTop = parseInt(cat.style.top)
//
//   if ( leftToRight && ( startLeft > ( window.innerWidth-cat.width ) ) ) {
//     leftToRight = false;
//   }
//    if ( (!leftToRight) && (startLeft <= 0) ) {
//     leftToRight = true;
//   }
//   if (leftToRight) {
//     cat.style.left = (startLeft + 1) + 'px';
//     cat.style.transform = "scaleX(1)";
//     // cat.style.top = parseInt(fromTop) + (Math.random()*200)-100;
//   } else {
//     cat.style.transform = "scaleX(-1)";
//     cat.style.left = (startLeft - 1) + 'px';
//     // cat.style.top = parseInt(fromTop) + (Math.random()*200)-100;
//   }
// };
// window.setInterval(catWalk, 1);

var cat = document.querySelector("img");

var escape = function () {
  var oldCoords = cat.getAttribute("class").substring(4);
  var random = parseInt(Math.random()*7);
  // console.log(oldCoords);
  cat.classList.toggle(oldCoords);
  cat.classList.toggle("esc"+random);
};
cat.addEventListener("mouseenter", escape);

var getClose = function () {
  cat.style.width = Number(cat.style.width.substr(0,3)) + 100 + "px";
  cat.style.height = Number(cat.style.height.substr(0,3)) + 100 + "px";
  if (Number(cat.style.width.substr(0,3)) > 500) {
    var body = document.querySelector("body");
    body.style.backgroundImage = "url(https://media.giphy.com/media/MZ9ojQywavtXq/giphy.gif)";
    body.style.backgroundSize = "100%";
    console.log(body);
    cat.style.display = "none";
  }
};
cat.addEventListener("click", getClose);

//
// var catEscape = function () {
//   var top = parseInt(cat.style.top);
//   console.log(top);
//   var desiredTop = parseFloat(Math.random()*30-15);
//   console.log(desiredTop.valueOf());
//   cat.style.top = (cat.style.top - desiredTop) + "px";
// };
//
// cat.addEventListener("mouseenter", catEscape);










// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

var anagramDetect = function (word, list) {
  word = word.toLowerCase();
  for ( i = 0 ; i < word.length ; i += 1) {
    var letter = word.charAt(i);
    newList = [];
    for ( x = 0 ; x < list.length ; x += 1 ) {
      testWord = list[x].toLowerCase();
      if ( testWord.indexOf(letter) >= 0 ) {
        newList.push(list[x]);
      }
    }
    list = newList;
  }
  while (list[0].length != word.length) {
    list.shift();
  }
  console.log("the anagram for the word " + word + " is the word " +list);
};

anagramDetect("listen", ["enlisdts", "google", "inlets", "banana"]);

var anagrams =  ["enlisdts", "google", "inlets", "banana"];

var getAnagram = function (word) {
  var sortedWord = word.split("").sort().join("");
  for ( i = 0 ; i < anagrams.length ; i += 1) {
    var sortedAnagram = anagrams[i].split("").sort().join("");
    if ( sortedWord === sortedAnagram) {
      console.log(word + " is an anagram of " + anagrams[i]);
      return anagrams[i];
    }
  }
};
console.log(getAnagram("legoog"));

// var anagramFinder = {
//   anagrams: ["enlisdts", "google", "inlets", "banana"],
//   sortWord: function(word) {
//     return word.split("").sord().join("");
//   },
//   findAnagram: function (word) {
//     for (i = 0 ; i < this.anagrams.length ; i++) {
//       var sortedWord = this.sortWord(this.anagrams[i]);
//
//       console.log(word);
//     }
//   }
// }

// anagramFinder.findAnagram("chicken")
