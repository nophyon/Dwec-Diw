"use strict"

function edad() {

  var x = prompt ("dame tu edad");

  var MayorEdad = function (x) {
    var x = x || 18;
    console.log (x);
    if (x<18){
      document.write ("<ul><li>"+
        "Coca Cola,3€ </li><li>"+
        "Café,5€ </li></ul>")
    }
    if (x>=18) {
      document.write ("<ul><li>" +
        "Coca Cola,3€</li><li>" +
        "Café,5€</li><li>" +
        "Martini,9€</li><li>" +
        "Whisky,10€</li></ul>");
    }
  }
  MayorEdad (x);

}
edad();
