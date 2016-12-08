// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

// FIRST APPROACH - SIMPLE.

var anagrams = ["enlists", "google", "inlets", "banana"];

var getAnagrams = function(word) {
  // Chaining methods - we can chain methods together. Each method will be called on whatever the previous method returns (ie, sort will be called on the array returned by split, join will be called on the array returned by sort).

  // There's no simple way to compare arrays in JavaScript, so we want to join the elements in the array back together into a string, so we can do string === string comparison.
  var sortedWord = word.split("").sort().join("");
  for (var i = 0; i < anagrams.length; i++) {
    // The line below looks pretty similar to the line two above, so maybe we can refactor this later on.
    var sortedAnagram = anagrams[i].split("").sort().join("");
    if (sortedWord === sortedAnagram) {
      console.log(anagrams[i] + " is an anagram of " + word);
      return anagrams[i];
    }
  }
};

console.log(getAnagrams("legoog"));


// SECOND APPROACH - REFACTORING USING AN OBJECT.
// Why bother putting everything in an object? It looks scary, right?

// This approach encapsulates all the functionality relating to finding anagrams in a single object. We have methods/functions 'namespaced' to our anagramFinder object, meaning we can use descriptive, simple method names like "find" and "sort" without worrying about them conflicting with native JS methods, or methods in the global namespace, or other objects. It also means other developers know exactly where to find everything they need to know about finding anagrams.


var anagramFinder = {
  anagrams: ["enlists", "google", "inlets", "banana"],
  sort: function(word) {
    return word.split("").sort().join("");
  },
  find: function(word) {
    var sortedWord = this.sort(word);
    for (var i = 0; i < this.anagrams.length; i++) {
      var sortedAnagram = this.sort(this.anagrams[i]);
      if (sortedWord === sortedAnagram) {
        console.log(this.anagrams[i] + " is an anagram of " + word);
      }
    }
    return this.anagrams[i];
  }
};


console.log(anagramFinder.find("listen"));
