"use strict"

var frase = "Esto es un string";
console.log(frase);
console.log("a) La longitud del string es: "+ frase.length);
console.log("b) El carácter que ocupa la posición 7 es: "+frase.charAt(7));
console.log("c) El índice en el que está la última t es: "+frase.lastIndexOf("t"));
console.log("d) La transformación a minúsculas del string es: "+frase.toLowerCase());
console.log("e) La transformación de mayúsculas del string es: "+frase.toUpperCase());
console.log("f) Las palabras separadas por comas que componen la frase son: "+frase.search(",")+": Esto quiere decir que no hay ninguna coma en la frase");
console.log("g) las posiciones de la 11 a la 18 de frase son: "+frase.charAt(11)+frase.charAt(12)+frase.charAt(13)+frase.charAt(14)+
  frase.charAt(15)+frase.charAt(16)+frase.charAt(17)+frase.charAt(18));
//console.log(frase.slice(11,18));
//console.log(frase.substring(11.18));
//console.log(frase.substr(11,8);
