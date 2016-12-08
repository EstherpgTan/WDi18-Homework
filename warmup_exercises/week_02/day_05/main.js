var Beer = {

  song: function(numStart, numFinish, typeOfBeer) {
    numStart = numStart || 99;
    numFinish = numFinish || 0;
    typeOfBeer = typeOfBeer || "VB";
    for (var i = numStart; i >= numFinish; i--) {
      console.log(this.verse(i, typeOfBeer));
    }
  },
  verse: function(num, beer) {
    var quantity = this.formatQuantity(num, beer);
    var action = this.formatAction(num);
    var remainingQuantity = this.formatQuantity(num -1, beer) + " on the wall";

    var firstLine = quantity + " on the wall. " + quantity + "\n";
    var secondLine = action + remainingQuantity;
    return firstLine + secondLine;

  },
  formatQuantity: function(num, beer) {
    if (num === 0) {
      return "No more tinnie of " + beer;
    } if (num === 1) {
      return "1 more tinnie of " + beer;
    } else if (num === -1) {
      return "\nNow we've got a whole bunch more tinnies!";
    } else {
      return num + " tinnies of " + beer;
    }
  },

  formatAction: function(num) {
    // What we need to do in response to number of beers left.
    if (num === 0) {
      return "Hop in the ute and fang it to the store for more tinnies. ";
    } else if (num === 1) {
      return "Take it down and smash it. ";
    } else {
      return "Take one down and smash it. ";
    }
  }

};

Beer.song(50, 0, "VB");
