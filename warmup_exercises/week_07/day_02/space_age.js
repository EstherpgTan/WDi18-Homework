// We're creating a constructor - a function that will return an object, invoked using the 'new' keyword.

// Our constructor has a bunch of properties, all tied to the 'this' keyword, which will be the object returned when we create a new spaceAge object (eg, in the constructor, this.seconds will become obj.seconds where var obj = new spaceAge(2000)).

// All the functions within the spaceAge function will become methods of spaceAge objects constructed usin the spaceAge constructor (eg, in the constructor, this.allPlanets will become obj.allPlanets where var obj = new spaceAge(2000))

var spaceAge = function(seconds) {
  this.seconds = seconds;
  this.yearsOnEarth = this.seconds / 31557600;
  this.yearsOnOtherPlanets = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };
  this.allPlanets = function() {
    var arr = [];
    for (var planet in this.yearsOnOtherPlanets) {
      arr.push(planet + " years: " + this.yearsOnEarth / this.yearsOnOtherPlanets[planet]);
    }
    return arr;
  };
  this.yearsOnPlanet = function(planet) {
    var yearsOnEarth = this.yearsOnEarth;
    var ratio = this.yearsOnOtherPlanets[planet];
    var ageOnPlanet = yearsOnEarth / ratio;
    return ageOnPlanet;
  };
};

var age = new spaceAge(1000000000);

console.log(age.allPlanets());
console.log(age.yearsOnPlanet("Jupiter"));
