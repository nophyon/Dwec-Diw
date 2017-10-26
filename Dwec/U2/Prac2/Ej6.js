"use strict"

var array = [13,27,"hola",false,17,true,"adios"];
console.log("a) "+array.map(function(num){return Number(num);}));
console.log("b) "+array.filter(function(num){return isNaN(num)==false;}));
