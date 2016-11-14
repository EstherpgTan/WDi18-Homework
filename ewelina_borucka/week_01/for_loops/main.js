console.log('=============== The even/odd reporte ===========');
// Write a for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd,
// and report that to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i += 1) {
  if (i % 2 ===0) {
    console.log( i + " is even");
  } else {
    console.log(i + " is odd");
  }
}


console.log('=========== Multiplication Tables ===========');
// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"

for (var i = 0; i <= 10; i += 1) {
  // console.log(i);
  var result = (i * 9);
  console.log(i.toString() + " * 9 = " + result.toString());
}

console.log('=============== Bonus Table =====================');
// Use a nested for loop to show the tables
// for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i += 1) {
  for (var j = 0; j <= 10; j += 1) {
    var muliplication = (i * j);
    console.log(i.toString() + " * " + j.toString() + " = " + muliplication.toString());
  }
}

console.log('============ The Grade Assigner 1 ==============');
// The Grade Assigner
// Check the results of assignGrade function
// from the conditionals exercise for every value from 60 to 100 -
// so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var score = 60; score <= 100; score += 1) {
  if (score >= 60 && score <= 69) {
    console.log("For " + score + ", you got a D");
  } else if (score >= 70 && score <= 79 ) {
      console.log("For " + score + ", you got a C");
  } else if (score >= 80 && score <= 89) {
      console.log("For " + score + ", you got a B");
  } else if (score >= 90 && score <= 100) {
      console.log("For " + score + ", you got a A");
  }
}

console.log('============ The Grade Assigner 2 ==============');

for (var score = 60; score <= 100; score += 1) {
  if (score >= 60 && score <= 69) {
    var grade = "D";
  } else if (score >= 70 && score <= 79 ) {
    var grade = "C";
  } else if (score >= 80 && score <= 89) {
    var grade = "B";
  } else if (score >= 90 && score <= 100) {
    var grade = "A";
  }

  console.log("For " + score + ", you got a " + grade);
}
