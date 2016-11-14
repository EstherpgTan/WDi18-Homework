console.log("==== The Cash Register ====");
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.
//

var cart = {
  banana: "1.25",
  kiwi: ".99",
  melon: "25.01",
  apple: "0.60",
  mango: "10.34",
  orange: "22.36"
};


 function cashRegister(ob) {
   var total = 0;
   for (var key in ob) {
     var price = parseFloat(ob[key]);
     total = total + price;
     console.log(total);
   }
  //  console.log("The total price of the shopping cart is: " + total + ".");
   return total;
 }


cashRegister(cart); // 60.55
