// Emmanuel 27102016
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var cashRegister = function( cart ) {
  var totalPrice = 0;

  for( var item in cart ) {
    totalPrice += parseFloat( cart[item] );
  }

  return totalPrice;
};

// Output
console.log( cashRegister(cartForParty) ); // 60.55
