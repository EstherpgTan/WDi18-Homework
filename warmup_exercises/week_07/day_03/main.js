var reverser = function(arr) {

  // var reversed = [];
  // for (var i = 0; i < arr.length; i++) {
  //   reversed.unshift(arr[i]);
  // }

  var reversed = [].concat(arr).reverse();
  console.log(reversed);

  return reversed;
};


var flatten = function(arr) {
  var flattened = [];

  for (var i = 0; i < arr.length; i++) {

    // Array.isArray() is nice, but it is an ES6 method and will only work in modern browsers.

    // if (Array.isArray(arr[i])) {

    // The instanceof operator tests whether the constructor on the right is present in the object's prototype chain. This isn't 100% reliable, since different contexts (eg windows, or frames) will have different global objects (so the Array reference in the operation may not be the Array constructor in the array's prototype chain)

    // if (arr[i] instanceof Array) {

    // The most reliable test is below. This takes the (potential) array's prototype chain, converts it to a string, and checks to see whether the string "Array" is included in that string:
    if (Object.prototype.toString.call(arr[i]).match("Array")) {
      for (var j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  console.log(flattened);
  return flattened;

};

reverser([1,2,3,4,5]);

flatten([1,2,3,4,[5,6]]);
