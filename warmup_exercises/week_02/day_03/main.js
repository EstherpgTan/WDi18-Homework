var validNucleotides = ["A", "G", "C", "T", "U"];

var includesValid = false;

var counter = function(nucleotide, string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === nucleotide) {
      count += 1;
      includesValid = true;
    }
  }
  return count;
};

var countNucleotides = function(string) {
  var result = "";
  string = string.toUpperCase();
  for (var i = 0; i < validNucleotides.length; i++) {
    result += validNucleotides[i] + ": " + counter(validNucleotides[i], string) + "\n";
  }
  if (includesValid) {
    return result;
  } else {
    return "No valid nucleotides in " + string;
  }
};

console.log(countNucleotides("TGATCGA"));

// ALTERNATIVE SOLUTION - a little cleaner and more dynamic since we use a single object to (1) get the valid nucleotides; (2) store the number of valid nucleotides:

var altNucleotides = {
  A: 0,
  G: 0,
  C: 0,
  T: 0,
  U: 0
};

var altIncludesValidNucleotides = false;

var altCounter = function(string) {
  var result = "";
  var nucleotideKeys = Object.keys(altNucleotides);
  for (var i = 0; i < string.length; i++) {
    if (nucleotideKeys.includes(string[i])) {
      altNucleotides[string[i]] += 1;
      altIncludesValidNucleotides = true;
    }
  }
  for (var prop in altNucleotides) {
    result += prop + ": " + altNucleotides[prop] + " \n";
  }

  if (altIncludesValidNucleotides) {
    return result;
  } else {
    return string + " has no valid nucleotides";
  }
};

console.log(altCounter("CATGATCG"));
