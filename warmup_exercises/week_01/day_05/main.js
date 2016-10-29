var sergeSays = function(input) {

  if (input.endsWith("?") ) {
    return "Sure.";
  } else if (input === input.toUpperCase()){
    if (input.length !== 0) {
      return "Woah, chill out!";
    } else {
      return "Fine be that way.";
    }
  } else {
    return "Whatever.";
  }
};

console.log(sergeSays("hello there, serge."));
