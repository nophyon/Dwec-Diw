"use strict"
var x = prompt ("Dame un número");
var x = parseInt(x);
var MayorEdad = function (x) {
  x = x || 18;
  console.log (x);
  if (x<18){
    console.log ("no");
  }
  if (x>=18) {
    console.log ("si");
  }
}
MayorEdad (x);
