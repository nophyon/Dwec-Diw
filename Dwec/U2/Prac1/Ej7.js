"use strict"

var frase = "Esto es un string";
console.log(frase);
console.log("a) La longitud del string es: "+ frase.length);
console.log("b) El carácter que ocupa la posición 7 es: "+frase.charAt(7));
console.log("c) El índice en el que está la última t es: "+frase.lastIndexOf("t"));
console.log("d) La transformación a minúsculas del string es: "+frase.toLowerCase());
console.log("e) La transformación de mayúsculas del string es: "+frase.toUpperCase());
console.log("f) Las palabras separadas por comas que componen la frase son: "+frase.split(" "));
console.log("g) las posiciones de la 11 a la 18 de frase son: "+frase.charAt(11)+" y "+frase.charAt(18));