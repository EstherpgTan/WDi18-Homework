var getPrimes = function(min, max) {
  // The first thing we need to do is get a range of all the numbers between (and including) two limits. Regular JS doesn't give us any neat method for this, so we'll just start off with an empty array and push all the numbers between the min limit and the max limit to that array:
  var range = [];
  for (var i = min; i <=max; i++) {
    range.push(i);
  }
  // We'll be storing our confirmed prime numbers in an array called primes. Obviously, this will start off as an empty array:
  var primes = [];
  // Iterating through all the numbers in the range array...
  for (var j = 0; j <= range.length; j++) {
    // ... store the j'th element in the range array in a variable called candidate...
    var candidate = range[j];
    // ... and we'll start off by assuming that the number is a prime number:
    var isPrime = true;
    // A number is a prime number if it is only evenly divisible by itself and 1. Since we don't want to test whether the number is evenly divisible by 1 (all whole numbers are), and we don't want to test whether the number is evenly divisible by anything greater than itself (no whole numbers are), we'll be iterating from the number 2 up to (but excluding) the candiate itself:
    for (var k = 2; k < candidate; k++) {
      // If the candidate is evenly divisible by any number k in that range, it is not a prime, so change the value of isPrime to false.
      if (candidate % k === 0) {
        isPrime = false;
      }
    }
    // If, after we've gone through all the numbers between 2 and the number itself, and the candidate is not 1 (since 1 is not a prime number), then it's a confirmed prime:
    if ((isPrime === true) && (candidate > 1)) {
      // So let's push it to the primes array.
      primes.push(candidate);
    }
  }
  console.log(primes);
  // Once we've gone through all the numbers in the range array, return the primes array.
  return primes;
};

getPrimes(1,50);
