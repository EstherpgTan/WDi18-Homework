// Emmanuel 25102016 - Week 1
// Write an if statement that works with a noun and a number.
// Make the noun plural if necessary!!
var noun = "study";
var number = 2;

console.log( "Original noun is: " + noun );
if( number > 1 ) {
  console.log( "You asked for plural" );
}
else if( number === 1 ) {
  console.log( "You asked for singular" );
}
else {
  console.log( "It seems magical as it is not singular or plural.");
}

if( number > 0 ) {
  if( noun.charAt( noun.length - 1) === "s" ) {
    if( number === 1 ) {
      // Display output for singular
      console.log( "Hence, it is called " + noun );
    } else if( number > 1 ) {
      // Display output for plural
      console.log( "Hence, it is called " + noun + "es" );
    }
  }
  else if( noun.charAt( noun.length - 1 ) === "y" ) {
    if( number === 1 ) {
      // Display output for singular
      console.log( "Hence, it is called " + noun );
    } else if( number > 1 ) {
      // Display output for plural
      console.log( "Hence, it is called " + noun.substring( 0, noun.length - 1 ) + "ies" );
    }
  }
  else {
    if( number === 1 ) {
      console.log( "Hence, it is called " + noun );
    }
    else {
      console.log( "Hence, it is called " + noun + "s" );
    }
  }

}
