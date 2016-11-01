// Write an if statement that gives users a score (A, B, C, D, or F) based on the test results
var testResult = 56;
if (testResult >= 90) {
  console.log("Result A");
} else if (testResult >= 80 && testResult <=90) {
  console.log("Result B");
} else if (testResult >= 70 && testResult <=79) {
  console.log("Result C");
} else if (testResult >= 60 && testResult <=69) {
  console.log("Result D");
}else {
  console.log("Result F");
}
