
var badgersRevenge = {
  // We need to decide what data structure to use to store the clap counts for our students. An object is really the most appropriate here - we want to map values (claps) to keys (student names).
  students: {
    Emmanuel: 0,
    Rozen: 0,
    Samantha: 0,
    James: 0,
    Ahi: 0,
    Mario: 0,
    Ned: 0,
    Drew: 0,
    Timothy: 0,
    Steve: 0,
    Esther: 0,
    Ewelina: 0,
    Rhys: 0
  },
  // Let's add some methods to make our code nice and modular, and to just attack one problem at a time.
  // This method will take a single argument (a string, that will be a student's name, which we'll be using to look up and increment the student's clap count in the badgersRevenge.students object.)
  addClaps: function(student) {
    // 'this', here, refers to the object (since we're inside an object). We could have written the line below as badgersRevenge.students[students] += 1
    // Take the student passed in as an argument to this function, look up that student's key/value pair in the students object, and increment the value by 1.
    this.students[student] += 1;
  },
  // this.clappers starts out as an empty array to which we'll be pushing values in our getClappers function.
  clappers: [],
  // this.getClappers will go through all the key/value pairs in the this.students object and, if a student key has a value of 2 or more, it will push that student's name to the this.clappers array.
  getClappers: function() {
    for (var student in this.students) {
      if (this.students[student] >= 2) {
        this.clappers.push(student);
      }
    }
    return badgersRevenge.clappers;
  },
  getRandomClapper: function() {
    // Call the badgersRevenge.getClappers method to populate our badgersRevenge.clappers array.
    this.getClappers();
    // We want to get a random student from the clappers array. We'll use some Math methods to do that. Math.floor will round DOWN whatever argument we pass into it to the nearest whole number (we need it to round DOWN, because arrays are zero-indexed collections). We'll pass in Math.random(), but we need to first multiply that random number by the length of the clappers array (since Math.random returns a floating point number between 0 and 1. We need a floating point number between 0 and however many elements there are in teh clappers array.)
    var randomIndex = Math.floor(Math.random() * this.clappers.length);
    // Look up a random element in the clappers array by passing in the randomIndex variable.
    return this.clappers[randomIndex];
  }
};

// We'll need to add some claps to the students object in the badgersRevenge object. We'll do this by calling the addClaps method of the badgersRevenge object.
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Mario");
badgersRevenge.addClaps("Timothy");
badgersRevenge.addClaps("Timothy");
badgersRevenge.addClaps("Timothy");
badgersRevenge.addClaps("Timothy");
badgersRevenge.addClaps("Rhys");
badgersRevenge.addClaps("Rhys");
badgersRevenge.addClaps("Rhys");

// Call getRandomClapper and log out whatever it RETURNs.
console.log(badgersRevenge.getRandomClapper());
