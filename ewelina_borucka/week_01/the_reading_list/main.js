console.log(" ========= The Reading List ======== ");

// Keep track of which books you read and which books you want to read!
//
// 1. Create an array of objects,
// where each object describes a book and has properties for
// the title (a string), author (a string),
// and alreadyRead (a boolean indicating if you read it yet).

// 2. Iterate through the array of books. For each book,
// log the book title and book author
// like so: "The Hobbit by J.R.R. Tolkien".

// 3. Now use an if/else statement to change the output
// depending on whether you read it yet or not.
// If you read it, log a string like
// 'You already read "The Hobbit" by J.R.R. Tolkien',
// and if not, log a string like
// 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var aBook1 = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  alreadyRead: false
  };

var aBook2 = {
  title: " The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  alreadyRead: true
  };

var aBook3 = {
  title: "The Master and Margarita",
  author: " Mikhail Bulgakov",
  alreadyRead: true
  };


var allBooks = [ aBook1, aBook2, aBook3];

for ( i = 0; i < allBooks.length; i += 1) {
  if (allBooks[i]("alreadyRead") === true) {
    console.log("You already read " + allBooks[i]("title") + " by " + allBooks[i]("author"));

  } else {
    console.log("You still need to read " + allBooks[i]("title") + " by " + allBooks[i]("author"));
  }
}
