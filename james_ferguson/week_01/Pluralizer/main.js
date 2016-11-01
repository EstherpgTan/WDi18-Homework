//Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

//  generally, just add ’s’ to the end of the singular noun (eg ‘dog' becomes ‘dogs’)
//- unless it ends in ’s’, then add ‘es’ to the end of the singular noun (eg ‘class’ becomes ‘classes’)
//- or it ends in ‘y’, then remove the ‘y’ from the end of the singular noun and add ‘ies’ (eg ‘pony’ becomes ‘ponies’)

//regular
var newWord;
var noun = "dog"
var number = 2;
if (number > 1) {
console.log(noun + "s");
} else {
  console.log(noun);
}
else if (noun.slice(-2)==="ss" {
console.log(noun + "es");
}

else if (noun.slice(-1)==="y"{
newWord = noun.slice(0, -1);
console.log(newWord + "ies");
}

// var singularES =[
//   "bus",
//   "wish",
//   "pitch",
//   "box",
// ];
// var singularY =[
//   "penny",
//   "spy",
//   "baby",
//   "city",
//   "daisy",
// ]
// //irregular
// var irregular =[
//   "woman",
//   "man",
//   "child",
//   "tooth",
//   "foot",
// ];
// var word = singularY || singularES || singularS || irregular;
// var lastLetter = word.charAt
