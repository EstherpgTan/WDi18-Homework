//Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

var numOne = 145;
var numTwo = 30;

if (numOne > numTwo){
  console.log(numOne +" is greater than "+ numTwo);
}else if(numTwo > numOne){
  console.log(numTwo +" is greater than " + numOne);
}else{
  console.log("Numbers are equal or not numbers");
};

var language = "Spanish";

if (language === "English"){
  console.log("Hello World");
} else if (language ==="French"){
 console.log("Bonjour Le Monde");
}else if (language ==="Italian"){
 console.log("Ciao Mondo");
}else if (language ==="Spanish"){
 console.log("Holla Mondo");
}else{
 console.log("Sorry I don't speak that language");
};

//case would be good here
// switch (language){
//   case "English": console.log("Hello World");
//   break;
//   case "French": console.log("Bonjour Le Monde");
//   break;
//   case "Italian": console.log("Ciao Mondo");
//   break;
//   case "Spanish": console.log("Holla Mundo");
//   break;
//   default: console.log("Sorry I don't speak that language");
// };

//Write an if statement that gives users a score (A, B, C, D, or F) based on the test results

var score = 75;

if (score >= 80){
  console.log("Score is an A");
} else if (score >= 70){
  console.log("Score is a B");
} else if (score >= 70){
  console.log("Score is a B");
} else if (score >= 60){
  console.log("Score is a C");
} else if (score >= 50){
  console.log("Score is a D");
} else if (score > 50){
  console.log("YOU FAIL!!!");
}else{
 console.log("Your score was so low it didn't even register");
}


//Write an if statement that works with a noun and a number. Make the noun plural if necessary!!

var newWord = "";
var numberOfItems = 20;
var word = "sheep";

if(numberOfItems > 1){
		if (checkUncountable(word)){ console.log(checkUncountable(word));}
		else if (checkIrregular(word)){ console.log(checkIrregular(word)); }
    else if (word.slice(-2)==="ss"){ console.log(word+"es") }
    else if(word.slice(-2)==="us"){ newWord = word.slice(0, -2); console.log(newWord+"i");}
    else if(word.slice(-1)==="y"){ newWord = word.slice(0, -1); console.log(newWord+"ies");}
    else if(word.slice(-1)==="f" || word.slice(-2)==="fe"){newWord = word.slice(0, -2); console.log(newWord+"ves");}
    else if(word.slice(-1)==="o"){ console.log(word+"es");}
		else if(word.slice(-2)==="es"){ newWord = word.slice(0, -2); console.log(newWord+"es");}
		else if(word.slice(-2)==="on"){ newWord = word.slice(0, -2); console.log(newWord+"a");}
		else{ console.log(word+"s");};
 }else{
  console.log(word);
};

function checkUncountable(item){
var uncountable = ['sheep','deer','moose','series','species','money','rice','information','equipment'];
 for (var i = 0; i < uncountable.length; i++){
  if (item === uncountable[i]){
     return item;
   }else{
     return false;
    };
  }
}

function checkIrregular(item){
var irregular = {'move':'moves','roof':'roofs','mouse':'mice','foot':'feet','goose':'geese','sex':'sexes',
                  'child':'children','man':'men','tooth':'teeth','person':'people'};
 if(item in irregular){
    return irregular[item];
  }else{
   return false;
 };
}
