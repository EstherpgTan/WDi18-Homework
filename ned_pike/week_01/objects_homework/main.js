var recipe = {
  name: "Mole",
  serves: 2,
  ingredients: [
    "Cinammon",
    "Cumin",
    "Cocoa"
  ],
  displayAllIngred: function() {
    var yum =
     "Recipe:" + "\n" +
     this.name + " " +  "\n" +
     "Serves " + this.serves + "\n" +
     "Ingredients " +  "\n" +
     this.ingredients[0] + "\n" +
     this.ingredients[1] + "\n" +
     this.ingredients[2]
    return yum
  }
}

console.log(recipe.displayAllIngred());

var booksToRead = [
  {name: "Lord of the rings", author: "Tolkein", read: false},
  {name: "Lord of the rings", author: "Tolkein", read: true},
  {name: "Lord of the rings", author: "Tolkein", read: true}
]

for (var i = 0; i < booksToRead.length; i++) {
  currentBook = booksToRead[i]
  message = currentBook.name + " by " + currentBook.author
  if (currentBook.read === true) {
    final = ("You have read " + message)
  }
  else {
    final = ("you still need to read " + message)
  }
  console.log(final)
}

faveMovie = {
  title: "Puff the magic Dragon",
  duration: 30,
  stars: [
    "Jenny", "martha", "tom"
  ],
  displayAll: function() {
    return this.stars.join(" ")
  },
  writeAll: function() {
    var message = this.title + " goes for " + this.duration + " minutes Starring " + this.displayAll()
    return message
  }
}

console.log(faveMovie.writeAll());

var rectangle = {
  length: 4,
  width: 5,
  isSquare: function() {
    if (this.length === this.width ) {
      return "Square"
    }
    else {
      return "Not a square"
    }
  }
}
console.log(rectangle.isSquare());

var triangle = {
  sideA: 2,
  sideB: 5,
  sideC: 5,
  isEquilateral: function() {
    result = (this.sideA === this.sideB && this.sideB === this.sideC)
    return result
  },
  isIsosceles: function() {
    result = (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC)
      return result
  },
  area: function() {
    perimeter = (this.sideA + this.sideB + this.sideC) /2
    area = Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC))

    return area
  },
  isObtuse: function() {
    var one = Math.pow(this.sideA, 2)
    var two = Math.pow(this.sideB, 2)
    var three = Math.pow(this.sideC, 2)
    var myArr = []
    myArr.push(one, two, three)
    myArr.sort(function(a,b){
    return a - b
    })
    result = (myArr[0] + myArr[1] - myArr[2]) / (2 * Math.sqrt(myArr[0]) * Math.sqrt(myArr[1]))
    result1 = Math.acos(result)

    var final = result1 * 57.3
    if (final > 90) {
      return "obtuse"
    }
    else {
      return "not obtuse"
    }
  }
}

console.log(triangle.isEquilateral());
console.log(triangle.area());
console.log(triangle.isIsosceles());
console.log(triangle.isObtuse());



var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

function total(n) {
var count = 0
for (var key in n) {
  count += parseFloat((n[key]))
}
return count;
}
console.log(total(cartForParty))

// Testing before starting over

// function validateCreditCard(n) {
//   var desired = n.replace(/-/gi, '')
//   var length = desired.length
//   var main = parseInt(desired)
//   var nev = toString(desired)
//   var ends = nev.substring(1, 8)
//   if (n.match(/[a-z]/gi)) {
//     return "false1" + desired;
//   }
//   else {
//     if (length !== 16) {
//       return "false2"
//     }
//     else if (parseInt(desired.slice(desired.length - 1, 1)) % 2 !== 0) {
//       debugger;
//       return "false3" + nev
//
//     }
//     else {
//       return "true"
//     }
//   }
//
// }
//
// console.log(validateCreditCard('9999-9999-9999-8888'))
//
// console.log("hi");


function validateCreditCard(n) {
  var Validated = { number:n }
  var last = n.slice(n.length -1, n.length)
  var isTrue = (last % 2 === 0)
  var remove = n.replace(/[a-z]/gi, '')
  var removeSym = remove.replace(/-/gi, '')
  var length = removeSym.length
  var split = removeSym.toString().split("").map(function(t) { return parseInt(t)})
  count = 0
  var sum = split.reduce((a, b) => a+b, 0)
  if (length < 16) {
    Validated.valid = false
    Validated.message = "Card numbers too short"
  }
  else if (n.match(/[a-z]/gi)) {
    Validated.valid = false
    Validated.message = "Card cannot contain Alphabet characters"
  }
  else if (sum < 17) {
    Validated.valid = false
    Validated.message = "Sum of numbers must be greater than 16"
  }
  else if (sum % last === 0) {
    Validated.valid = false
    Validated.message = "Numbers cannot all be the same"
  }
  else {
    Validated.valid = true
    Validated.message = "Successful credit card number"
  }
  return Validated
}

console.log(validateCreditCard("4444-4444-4444-444"));

var bank = [
  {
    name: "jeremy",
    current_balance: 20000,

  },
  {
    name: "jeremy",
    current_balance: 20000,

  }
]

function returnSum(n) {
  counter = 0
  for (var i = 0; i < bank.length; i++ ) {
    counter += n[i].current_balance
  }
  return counter
}

function addAccount(name, accountName, balance) {
  name.push({ name: "jeremy", current_balance: 32000})
}
function addFunds(name, accountNumber, funds) {
  name[1]["current_balance"] += funds
}
function subFunds(name, accountNumber, funds) {
  bank[1]["current_balance"] -= funds
}


console.log(returnSum(bank))
addAccount(bank, "Jeremy")
console.log(bank[2])
addFunds(bank, 1, 700)
subFunds(bank, 2, 300)
console.log(returnSum(bank))


function range(one, two, three) {
  var myArr = []
  for (var i = one; i < two; i+= three ) {
    myArr.push(i)
  }
  return myArr
}

// Eloquent Javascript excercises
function sum(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(range(5, 10, 2));
console.log(sum(range(10, 21, 3)));

function reverseArray(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}


console.log(reverseArray([1,2,3,4]));


function arrayToList(one) {
  var myObj = {}
  myObj.value = one[0]
  myObj.rest = { value: one[1], rest: { value: one[2], rest: null } }
  return myObj
}

function listToArray(obj) {
  var myArr = []
  if (obj.value !== null) {
    myArr.push(obj.value)
  }
  if (obj["rest"]["value"] !== null ) {
    myArr.push(obj["rest"]["value"])
  }
  if (obj["rest"]["rest"]["value"] !== null) {
    myArr.push(obj["rest"]["rest"]["value"])
  }
  return myArr

}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])))
