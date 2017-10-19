"use strict"

var frase = "Esto es un string";
var frase1 = " y con esto es un string más largo "

var frase2 = frase.concat(" ",(frase1.trim()));
console.log("a) "+ frase2);

var frase2 = frase2.replace("largo","bonito");
console.log("b) "+frase2);
var frase2 = frase2.concat("¡".repeat(20));
console.log("c) "+frase2);
