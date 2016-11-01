// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var ReadingList = [
   var bookOne = {
    description: "A book about stuff",
    title: " book 1",
    author: "Richard Cheese",
    alreadyRead:(true),
  };
   var bookTwo = {
    description: "Another book about stuff",
    title: " book 2",
    author: "Joe Bloggs",
    alreadyRead: (false),
  };
];
for (var i=0; i<ReadingList.length; i+=1){
  var eachBook = ReadingList[i];
  var message = eachBook.title + " by " + eachBook.author;
  console.log(message);
}
