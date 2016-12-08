$(document).ready(function() {
  function evenOdd(start, end) {
    for (var i = start; i <  end; i++) {
      if (i % 2 === 0) {
        console.log(i + "is even");
      }
      else {
        console.log(i + "is odd");
      }
    }
  }

  function multiply() {
    for (var i = 1; i < 10; i++ ) {
      for (var y = 1; y < 10; y++ ) {
        console.log(i + " times " + y + " equals " + (i * y));
      }
    }
  }
  multiply()
  evenOdd(2,30);
  function grade(n) {
    for (var i = n; i <= 100; i+= 10 ) {
      if (i <= 60) {
        console.log("For " + i + " you got a F");
      }
      else if (i <= 70) {
        console.log("For " + i + " you got a D");
      }
      else if (i <= 80) {
        console.log("For " + i + " you got a C");
      }
      else if (i <= 90) {
        console.log("For " + i + " you got a B");
      }
      else if (i <= 100) {
        console.log("For " + i + " you got a A");
      }
    }
  }
  grade(60)
  function squareNumber(n) {
    console.log("The result of squaring " + n + " is " + (n * n));
    return (n * n)
  }
  squareNumber(3);

  function halfNumber(n) {
    result = (n / 2)
    console.log(result);
    return result
  }

  halfNumber(5);

  function percentOf(num1, num2) {
    result = (num1 + " is " + (num1/num2 * 100 ).toFixed(2) + "% of " + num2)
    var rest = (num1/num2).toFixed(2)
    console.log(result);
    return rest
  }
  percentOf(3, 4)

  function areaOfCircle(n) {
    result = (n * Math.PI * n);
    console.log(result.toFixed(2));
    return result.toFixed(2)

  }

  areaOfCircle(5)

  function all(n) {
    var half = halfNumber(n);
    var square = squareNumber(half);
    var area = areaOfCircle(square)
    var last = percentOf(square, area)
  }
  all(9)
function DrEvil(n) {
  if (n === 1000000) {
    console.log(n + " dollars (pinky)");
  }
  else {
    console.log(n + " dollars");
  }
}

DrEvil(10000)
function mixUp(one, two) {
  var i = one.substring(0,1)
  var y = two.substring(0,1)
  console.log(y + one.substring(1, one.length) + ", " + i + two.substring(1, two.length));
}

mixUp("Dog", "happy")

function verbing(hope) {
  if (hope.length > 3) {
    if (hope.endsWith('ing')) {
      console.log(hope + "ly");
    }
    else
      console.log(hope + "ing");
  }
  else {
    console.log(hope);
  }
}

verbing("swimming")

function notBad(n) {
  var main = n
  if (n.match(/not(.*)bad/gi)) {
    var main = n.replace(/not(.*)bad/i, "good")
  }
  console.log(main);
}
notBad("not so bad is this realyy sdfsfse not so bad")
//
function fixStart(n) {
  var one = n.slice(0, 1)
  var re = new RegExp(one, "g")
  var main = n.replace(re, "*")
  var final = one + main.substring(1, n.lenth)
  console.log(final);
}


fixStart("hehhodfsfgzsdvgfdvrdvfdgfddgdfdgdsfdgsdffdgdfsadgfhfghg")
$("button.main").click(function() {
  var n = $("input.first").val()
  $("div.one").html(leapYear(n)).append()


})

function leapYear(n) {
  if (n % 400 === 0) {
    return true
  }
  else if (n % 4 === 0 && n % 100 !== 0 ) {
    return true
  }
  else {
    return "false"
  }
}


})
